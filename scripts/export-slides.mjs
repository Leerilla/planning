#!/usr/bin/env node
/* eslint-disable no-console */

// S{N} 슬라이드를 PDF로 내보내는 스크립트.
//
// Usage:
//   node scripts/export-slides.mjs --session s1 --deck both
//
// Options:
//   --session  s1 (기본값 s1)
//   --deck     theory | activity | both (기본값 both)
//   --format   pdf (기본값 pdf — 현재 PDF만 지원)
//   --base-url http://localhost:3000 (기본값)
//   --keep-png (디버그용. tmp/{session}-{deck}/*.png 보존)
//   --headed   (디버그용. 헤드리스 모드 끔)
//
// 전제: `npm run dev`로 dev 서버가 http://localhost:3000 에 떠 있어야 함.

import { chromium } from '@playwright/test';
import { PDFDocument } from 'pdf-lib';
import fs from 'node:fs';
import path from 'node:path';

const opts = parseArgs(process.argv.slice(2));

main(opts).catch((err) => {
  console.error('[export-slides] FATAL:', err);
  process.exitCode = 1;
});

async function main({ session, decks, formats, baseUrl, keepPng, headed }) {
  ensureDir('out');
  ensureDir('tmp');

  const browser = await chromium.launch({ headless: !headed });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  try {
    for (const deck of decks) {
      console.log(`\n=== [${session}/${deck}] start ===`);
      const tmpDir = path.join('tmp', `${session}-${deck}`);
      ensureDir(tmpDir);

      const total = await discoverSlideCount(page, baseUrl, session, deck);
      console.log(`[${session}/${deck}] total slides: ${total}`);

      const pngPaths = [];
      for (let i = 1; i <= total; i++) {
        const url = `${baseUrl}/print/${session}/${deck}/${i}`;
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.waitForSelector('body[data-export-ready="1"]', { timeout: 30000 });
        // 컴포넌트 내부 마운트 애니메이션이 정착할 시간 확보 (PersonaBuilder, ChainDiagram 등)
        await page.waitForTimeout(900);

        const fileName = String(i).padStart(2, '0') + '.png';
        const filePath = path.join(tmpDir, fileName);
        await page.screenshot({
          path: filePath,
          clip: { x: 0, y: 0, width: 1920, height: 1080 },
          type: 'png',
        });
        pngPaths.push(filePath);
        console.log(`[${session}/${deck}] ${String(i).padStart(2, '0')}/${total} → ${path.relative(process.cwd(), filePath)}`);
      }

      if (formats.includes('pdf')) {
        const pdfPath = path.join('out', `${session}-${deck}.pdf`);
        await assemblePdf(pngPaths, pdfPath);
        console.log(`[${session}/${deck}] PDF written → ${pdfPath}`);
      }

      if (!keepPng) {
        fs.rmSync(tmpDir, { recursive: true, force: true });
      }
    }
  } finally {
    await browser.close();
  }

  console.log('\nDone.');
}

async function discoverSlideCount(page, baseUrl, session, deck) {
  const url = `${baseUrl}/print/${session}/${deck}/1`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('body[data-export-ready="1"]', { timeout: 30000 });
  const ariaLabel = await page.locator('[role="group"][aria-label]').first().getAttribute('aria-label');
  if (!ariaLabel) throw new Error(`Could not read aria-label on first slide for ${session}/${deck}`);
  // "슬라이드 1 / 38" → 38
  const m = ariaLabel.match(/\/\s*(\d+)\s*$/);
  if (!m) throw new Error(`Unexpected aria-label format: "${ariaLabel}"`);
  return parseInt(m[1], 10);
}

async function assemblePdf(pngPaths, outPath) {
  const pdf = await PDFDocument.create();
  for (const png of pngPaths) {
    const bytes = fs.readFileSync(png);
    const img = await pdf.embedPng(bytes);
    // 1920×1080 pt 페이지 — 16:9, 화면 픽셀과 동일 비율 유지
    const pageWidth = 1920;
    const pageHeight = 1080;
    const p = pdf.addPage([pageWidth, pageHeight]);
    p.drawImage(img, { x: 0, y: 0, width: pageWidth, height: pageHeight });
  }
  const bytes = await pdf.save();
  fs.writeFileSync(outPath, bytes);
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function parseArgs(args) {
  const opts = {
    session: 's1',
    decks: ['theory', 'activity'],
    formats: ['pdf'],
    baseUrl: 'http://localhost:3000',
    keepPng: false,
    headed: false,
  };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--session') opts.session = args[++i];
    else if (a === '--deck') {
      const v = args[++i];
      opts.decks = v === 'both' ? ['theory', 'activity'] : [v];
    } else if (a === '--format') {
      const v = args[++i];
      if (v !== 'pdf') {
        console.warn(`[export-slides] --format ${v} is not supported; only "pdf" is available. Using pdf.`);
      }
      opts.formats = ['pdf'];
    } else if (a === '--base-url') opts.baseUrl = args[++i];
    else if (a === '--keep-png') opts.keepPng = true;
    else if (a === '--headed') opts.headed = true;
    else {
      console.warn(`[export-slides] unknown arg: ${a}`);
    }
  }
  return opts;
}
