#!/usr/bin/env node
/**
 * 캡처 검증 스크립트
 *
 * 사용: npm run validate-captures
 *
 * 기능:
 * 1. 슬라이드 컴포넌트에서 <CaptureSlide src="..."/> 모든 참조 추출
 * 2. lectures/S{N}/captures/ 의 실제 파일 존재 여부 확인
 * 3. 파일명 규칙 검증
 * 4. 미사용 파일 검출
 * 5. 리포트 출력
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LECTURES_DIR = path.join(ROOT, 'lectures');
const SLIDES_DIR = path.join(ROOT, 'src/components/slides');
const FILENAME_REGEX = /^\d{2}-[a-z][a-z0-9-]*[a-z0-9]\.(png|jpg|jpeg)$/;

function findJsxFiles(dir) {
  const result = [];
  if (!fs.existsSync(dir)) return result;
  
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      result.push(...findJsxFiles(fullPath));
    } else if (entry.name.endsWith('.jsx')) {
      result.push(fullPath);
    }
  }
  return result;
}

function extractCaptureRefs(content) {
  const regex = /<CaptureSlide[^>]*src=["']([^"']+)["']/g;
  const refs = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    refs.push(match[1]);
  }
  return refs;
}

function detectSession(jsxPath) {
  // src/components/slides/s1/theory/01-cover.jsx → s1
  const match = jsxPath.match(/slides\/(s\d+)\//);
  return match ? match[1] : null;
}

function validateAll() {
  console.log('📷 캡처 검증 시작\n');
  
  // 1. 모든 슬라이드 컴포넌트에서 캡처 참조 수집
  const refsBySession = {};
  if (fs.existsSync(SLIDES_DIR)) {
    const jsxFiles = findJsxFiles(SLIDES_DIR);
    for (const jsxPath of jsxFiles) {
      const session = detectSession(jsxPath);
      if (!session) continue;
      
      const content = fs.readFileSync(jsxPath, 'utf-8');
      const refs = extractCaptureRefs(content);
      if (!refsBySession[session]) refsBySession[session] = new Set();
      refs.forEach(r => refsBySession[session].add(r));
    }
  }
  
  // 2. 각 세션의 실제 캡처 폴더 확인
  let totalRef = 0, totalMiss = 0, totalUnused = 0, totalInvalid = 0;
  
  const sessions = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
  
  for (const session of sessions) {
    const upperSession = session.toUpperCase();
    const capturesDir = path.join(LECTURES_DIR, upperSession, 'captures');
    
    const referenced = Array.from(refsBySession[session] || []);
    const existing = fs.existsSync(capturesDir)
      ? fs.readdirSync(capturesDir)
          .filter(f => /\.(png|jpg|jpeg)$/i.test(f))
          .filter(f => !f.startsWith('_'))
      : [];
    
    const missing = referenced.filter(r => !existing.includes(r));
    const unused = existing.filter(f => !referenced.includes(f));
    const invalid = existing.filter(f => !FILENAME_REGEX.test(f));
    
    const status = missing.length === 0 && invalid.length === 0
      ? '✅' : (missing.length > 0 ? '❌' : '⚠️');
    
    console.log(`${status} ${upperSession}: ${existing.length} 캡처, ${referenced.length} 참조`);
    
    if (missing.length > 0) {
      console.log(`   ❌ 누락: ${missing.length}개`);
      missing.forEach(f => console.log(`      - ${f}`));
    }
    if (invalid.length > 0) {
      console.log(`   ⚠️  명명 위반: ${invalid.length}개`);
      invalid.forEach(f => console.log(`      - ${f}`));
    }
    if (unused.length > 0) {
      console.log(`   ℹ️  미사용: ${unused.length}개`);
      unused.forEach(f => console.log(`      - ${f}`));
    }
    
    totalRef += referenced.length;
    totalMiss += missing.length;
    totalUnused += unused.length;
    totalInvalid += invalid.length;
    
    console.log('');
  }
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 전체 통계');
  console.log(`   총 참조: ${totalRef}`);
  console.log(`   누락: ${totalMiss}`);
  console.log(`   미사용: ${totalUnused}`);
  console.log(`   명명 위반: ${totalInvalid}`);
  
  if (totalMiss > 0 || totalInvalid > 0) {
    process.exit(1);
  }
}

validateAll();
