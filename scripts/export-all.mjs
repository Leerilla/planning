#!/usr/bin/env node
/* eslint-disable no-console */

// S1~S9 슬라이드 theory + activity를 PDF로 일괄 export.
//
// Usage:
//   node scripts/export-all.mjs                                # 9세션 × 2 deck = 18 PDF
//   node scripts/export-all.mjs --sessions s1                  # 단일 세션
//   node scripts/export-all.mjs --sessions s2,s3,s4            # 부분
//   node scripts/export-all.mjs --decks theory                 # deck 1종만
//
// Options:
//   --sessions  s1 | s1,s2,... | all (기본 all = s1~s9)
//   --decks     theory | activity | both (기본 both)
//   --base-url  http://localhost:3000 (기본)
//   --keep-png  (디버그용, tmp/{session}-{deck}/*.png 보존)
//   --headed    (디버그용, 헤드리스 모드 끔)
//   --fail-fast (deck 1개 실패 시 즉시 중단. 기본은 continue-on-error)
//
// 전제: `npm run dev`로 dev 서버가 baseUrl에 떠 있어야 함.
// 비고: 기존 scripts/export-slides.mjs와 분리된 wrapper. 첫 페이지 timeout 60s
//       (콜드 컴파일 대응), 후속 페이지 30s 적용.

import { chromium } from '@playwright/test';
import { PDFDocument } from 'pdf-lib';
import fs from 'node:fs';
import path from 'node:path';

const ALL_SESSIONS = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
const ALL_DECKS = ['theory', 'activity'];

const COLD_TIMEOUT_MS = 90_000; // 첫 페이지 (콜드 컴파일)
const WARM_TIMEOUT_MS = 30_000; // 후속 페이지
const MOUNT_SETTLE_MS = 900;    // mount 애니메이션 대기

const opts = parseArgs(process.argv.slice(2));

main(opts).catch((err) => {
  console.error('[export-all] FATAL:', err);
  process.exitCode = 1;
});

async function main({ sessions, decks, baseUrl, keepPng, headed, failFast }) {
  ensureDir('out');
  ensureDir('tmp');

  const targets = [];
  for (const session of sessions) {
    for (const deck of decks) {
      targets.push({ session, deck });
    }
  }
  console.log(`[export-all] target deck 수: ${targets.length}`);

  const browser = await chromium.launch({ headless: !headed });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  const summary = []; // [{session, deck, slides, pdfPath, sizeBytes, ok, error?, durationSec}]

  try {
    for (let idx = 0; idx < targets.length; idx++) {
      const { session, deck } = targets[idx];
      const tag = `[${idx + 1}/${targets.length}] ${session}/${deck}`;
      console.log(`\n=== ${tag} start ===`);
      const startedAt = Date.now();

      const tmpDir = path.join('tmp', `${session}-${deck}`);
      ensureDir(tmpDir);

      try {
        const total = await discoverSlideCount(page, baseUrl, session, deck);
        console.log(`${tag} total slides: ${total}`);

        const pngPaths = [];
        for (let i = 1; i <= total; i++) {
          const url = `${baseUrl}/print/${session}/${deck}/${i}`;
          await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
          await page.waitForSelector('body[data-export-ready="1"]', { timeout: WARM_TIMEOUT_MS });
          await page.waitForTimeout(MOUNT_SETTLE_MS);

          const fileName = String(i).padStart(2, '0') + '.png';
          const filePath = path.join(tmpDir, fileName);
          await page.screenshot({
            path: filePath,
            clip: { x: 0, y: 0, width: 1920, height: 1080 },
            type: 'png',
          });
          pngPaths.push(filePath);
          // 진행 표시 — 매 5장마다 or 마지막
          if (i % 5 === 0 || i === total) {
            console.log(`${tag} ${String(i).padStart(2, '0')}/${total}`);
          }
        }

        const pdfPath = path.join('out', `${session}-${deck}.pdf`);
        await assemblePdf(pngPaths, pdfPath);
        const stat = fs.statSync(pdfPath);
        const sizeMB = (stat.size / (1024 * 1024)).toFixed(2);
        const durationSec = ((Date.now() - startedAt) / 1000).toFixed(1);
        console.log(`${tag} PDF → ${pdfPath} (${sizeMB} MB, ${durationSec}s)`);

        summary.push({
          session, deck, slides: total, pdfPath,
          sizeBytes: stat.size, ok: true, durationSec,
        });

        if (!keepPng) {
          fs.rmSync(tmpDir, { recursive: true, force: true });
        }
      } catch (err) {
        const durationSec = ((Date.now() - startedAt) / 1000).toFixed(1);
        console.error(`${tag} FAIL: ${err.message}`);
        summary.push({
          session, deck, ok: false, error: err.message, durationSec,
        });
        if (failFast) {
          throw new Error(`fail-fast at ${session}/${deck}: ${err.message}`);
        }
      }
    }
  } finally {
    await browser.close();
  }

  printSummary(summary);
  const failCount = summary.filter((s) => !s.ok).length;
  if (failCount > 0) {
    process.exitCode = 2;
  }
}

async function discoverSlideCount(page, baseUrl, session, deck) {
  const url = `${baseUrl}/print/${session}/${deck}/1`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90_000 });
  // 첫 페이지는 콜드 컴파일 대응 — 60s+
  await page.waitForSelector('body[data-export-ready="1"]', { timeout: COLD_TIMEOUT_MS });
  const ariaLabel = await page
    .locator('[role="group"][aria-label]')
    .first()
    .getAttribute('aria-label');
  if (!ariaLabel) {
    throw new Error(`Could not read aria-label on first slide for ${session}/${deck}`);
  }
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
    const pageWidth = 1920;
    const pageHeight = 1080;
    const p = pdf.addPage([pageWidth, pageHeight]);
    p.drawImage(img, { x: 0, y: 0, width: pageWidth, height: pageHeight });
  }
  const bytes = await pdf.save();
  fs.writeFileSync(outPath, bytes);
}

function printSummary(summary) {
  console.log('\n');
  console.log('═══════════════════════════════════════════════════════════════════');
  console.log(' Summary');
  console.log('═══════════════════════════════════════════════════════════════════');
  console.log(' session  deck      slides  size       time     status');
  console.log(' ───────  ────────  ──────  ─────────  ───────  ──────');
  for (const s of summary) {
    const session = s.session.padEnd(7);
    const deck = s.deck.padEnd(8);
    const slides = (s.slides ?? '-').toString().padStart(6);
    const size = s.ok
      ? `${(s.sizeBytes / (1024 * 1024)).toFixed(2)} MB`.padEnd(9)
      : '-'.padEnd(9);
    const time = `${s.durationSec}s`.padEnd(7);
    const status = s.ok ? 'OK' : `FAIL: ${s.error}`;
    console.log(` ${session}  ${deck}  ${slides}  ${size}  ${time}  ${status}`);
  }
  console.log('═══════════════════════════════════════════════════════════════════');
  const okCount = summary.filter((s) => s.ok).length;
  const failCount = summary.length - okCount;
  console.log(` Total: ${summary.length} deck | OK: ${okCount} | FAIL: ${failCount}`);
  console.log('═══════════════════════════════════════════════════════════════════');
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function parseArgs(args) {
  const opts = {
    sessions: ALL_SESSIONS,
    decks: ALL_DECKS,
    baseUrl: 'http://localhost:3000',
    keepPng: false,
    headed: false,
    failFast: false,
  };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--sessions') {
      const v = args[++i];
      if (v === 'all') opts.sessions = ALL_SESSIONS;
      else opts.sessions = v.split(',').map((s) => s.trim()).filter(Boolean);
    } else if (a === '--decks') {
      const v = args[++i];
      if (v === 'both') opts.decks = ALL_DECKS;
      else opts.decks = v.split(',').map((s) => s.trim()).filter(Boolean);
    } else if (a === '--base-url') {
      opts.baseUrl = args[++i];
    } else if (a === '--keep-png') {
      opts.keepPng = true;
    } else if (a === '--headed') {
      opts.headed = true;
    } else if (a === '--fail-fast') {
      opts.failFast = true;
    } else {
      console.warn(`[export-all] unknown arg: ${a}`);
    }
  }
  // 검증
  const invalidSessions = opts.sessions.filter((s) => !ALL_SESSIONS.includes(s));
  if (invalidSessions.length) {
    throw new Error(`unknown sessions: ${invalidSessions.join(',')}. allowed: ${ALL_SESSIONS.join(',')}`);
  }
  const invalidDecks = opts.decks.filter((d) => !ALL_DECKS.includes(d));
  if (invalidDecks.length) {
    throw new Error(`unknown decks: ${invalidDecks.join(',')}. allowed: ${ALL_DECKS.join(',')}`);
  }
  return opts;
}
