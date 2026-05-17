/**
 * capture-checker.js
 *
 * Capture 이미지 무결성 검증 utility 함수.
 * 이전 capture-validator sub-agent를 함수로 흡수.
 * render-validator가 Phase ε.2에서 호출.
 *
 * SSOT 참조:
 * - docs/capture-workflow.md § 7
 *
 * 검증 4축:
 * - 1. 참조 무결성 — <CaptureSlide src="X" /> 모든 참조 파일 존재
 * - 2. 파일명 규칙 — ^\d{2}-[a-z][a-z0-9-]*\.(png|jpg|jpeg)$
 * - 3. 사이즈 — 50KB ~ 5MB
 * - 4. 단계 번호 일관성 — 같은 폴더 내 번호 점프 검출
 */

const fs = require('fs');
const path = require('path');

// ═════════════════════════════════════════════════════
// 상수
// ═════════════════════════════════════════════════════

const FILENAME_REGEX = /^(\d{2})-([a-z][a-z0-9-]*[a-z0-9])\.(png|jpg|jpeg)$/;
const SIZE_MIN_BYTES = 50 * 1024;        // 50KB (이하 → 해상도 의심 WARN)
const SIZE_MAX_BYTES = 5 * 1024 * 1024;  // 5MB (초과 → FAIL)
const SIZE_RECOMMENDED_MAX = 2 * 1024 * 1024;  // 2MB (초과 → WARN)

// ═════════════════════════════════════════════════════
// 헬퍼
// ═════════════════════════════════════════════════════

/**
 * src/components/slides/s{N}/ 안의 모든 jsx에서 CaptureSlide 참조 추출
 */
function extractCaptureRefs(slidesDir) {
  const refs = []; // [{file, line, src}]
  
  if (!fs.existsSync(slidesDir)) return refs;
  
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.jsx')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        // <CaptureSlide ... src="..." ... /> 또는 src={"..."} 패턴
        const regex = /<CaptureSlide[^/>]*\bsrc=\{?["']([^"']+)["']\}?/g;
        const matches = [...content.matchAll(regex)];
        for (const match of matches) {
          const lineNum = content.substring(0, match.index).split('\n').length;
          refs.push({
            file: fullPath,
            line: lineNum,
            src: match[1]
          });
        }
      }
    }
  }
  
  walk(slidesDir);
  return refs;
}

/**
 * lectures/S{N}/captures/ 안의 모든 이미지 파일 목록
 */
function listCaptureFiles(captureDir) {
  if (!fs.existsSync(captureDir)) return [];
  
  return fs.readdirSync(captureDir)
    .filter(f => /\.(png|jpg|jpeg)$/i.test(f))
    .map(f => ({
      name: f,
      path: path.join(captureDir, f),
      size: fs.statSync(path.join(captureDir, f)).size
    }));
}

// ═════════════════════════════════════════════════════
// 4축 검증
// ═════════════════════════════════════════════════════

/**
 * 1. 참조 무결성 — 모든 src가 captures/에 존재
 */
function checkReferentialIntegrity(refs, captureFiles) {
  const violations = [];
  const fileNames = new Set(captureFiles.map(f => f.name));
  
  // 1.1 참조 → 파일 (누락 검출)
  for (const ref of refs) {
    if (!fileNames.has(ref.src)) {
      violations.push({
        type: 'missing',
        file: ref.file,
        line: ref.line,
        src: ref.src,
        issue: `참조된 캡처 파일 없음: ${ref.src}`,
        auto_fixable: false,
        fix_method: '강사가 captures/ 폴더에 파일 추가'
      });
    }
  }
  
  // 1.2 파일 → 참조 (미사용 검출)
  const referencedFiles = new Set(refs.map(r => r.src));
  for (const file of captureFiles) {
    if (!referencedFiles.has(file.name)) {
      violations.push({
        type: 'unused',
        file: file.path,
        issue: `참조되지 않는 캡처 파일: ${file.name}`,
        severity: 'warn',
        auto_fixable: true,
        fix_method: '_unused/ 폴더로 격리 (삭제 X)'
      });
    }
  }
  
  return violations;
}

/**
 * 2. 파일명 규칙 — ^\d{2}-[a-z]...$ 형식
 */
function checkNamingConvention(captureFiles) {
  const violations = [];
  
  for (const file of captureFiles) {
    if (!FILENAME_REGEX.test(file.name)) {
      // 어떤 부분이 문제인지 진단
      const issues = [];
      if (!/^\d{2}/.test(file.name)) {
        issues.push('단계 번호 2자리 누락');
      }
      if (/[가-힣]/.test(file.name)) {
        issues.push('한글 포함');
      }
      if (/\s/.test(file.name)) {
        issues.push('공백 포함');
      }
      if (/[A-Z]/.test(file.name)) {
        issues.push('대문자 포함');
      }
      if (/[_]/.test(file.name)) {
        issues.push('언더스코어 (하이픈 사용)');
      }
      
      violations.push({
        type: 'naming',
        file: file.path,
        name: file.name,
        issue: `파일명 규칙 위반: ${issues.join(', ')}`,
        auto_fixable: !issues.includes('단계 번호 2자리 누락'),
        fix_method: suggestNormalizedName(file.name)
      });
    }
  }
  
  return violations;
}

/**
 * 정규화된 파일명 제안
 */
function suggestNormalizedName(filename) {
  let normalized = filename
    .toLowerCase()                          // 대문자 → 소문자
    .replace(/[가-힣]+/g, 'unknown')          // 한글 → 'unknown'
    .replace(/\s+/g, '-')                    // 공백 → 하이픈
    .replace(/_/g, '-')                      // 언더스코어 → 하이픈
    .replace(/[^a-z0-9.-]/g, '');             // 기타 특수문자 제거
  
  // 단계 번호 없으면 99 prefix
  if (!/^\d{2}/.test(normalized)) {
    normalized = '99-' + normalized;
  }
  
  return normalized;
}

/**
 * 3. 사이즈 검증
 */
function checkFileSize(captureFiles) {
  const violations = [];
  
  for (const file of captureFiles) {
    if (file.size > SIZE_MAX_BYTES) {
      violations.push({
        type: 'size_too_large',
        file: file.path,
        size_kb: Math.round(file.size / 1024),
        issue: `사이즈 ${(file.size / 1024 / 1024).toFixed(1)}MB > 5MB 한계`,
        severity: 'fail',
        auto_fixable: false,
        fix_method: '강사가 이미지 압축 (1280px 권장)'
      });
    } else if (file.size > SIZE_RECOMMENDED_MAX) {
      violations.push({
        type: 'size_warning',
        file: file.path,
        size_kb: Math.round(file.size / 1024),
        issue: `사이즈 ${(file.size / 1024 / 1024).toFixed(1)}MB > 2MB 권장`,
        severity: 'warn',
        auto_fixable: false,
        fix_method: '압축 권고 (선택)'
      });
    } else if (file.size < SIZE_MIN_BYTES) {
      violations.push({
        type: 'size_too_small',
        file: file.path,
        size_kb: Math.round(file.size / 1024),
        issue: `사이즈 ${(file.size / 1024).toFixed(1)}KB < 50KB (해상도 의심)`,
        severity: 'warn',
        auto_fixable: false,
        fix_method: '해상도 확인 (1280px+ 권장)'
      });
    }
  }
  
  return violations;
}

/**
 * 4. 단계 번호 일관성 — 같은 폴더 내 번호 점프 검출
 */
function checkStepNumberConsistency(captureFiles) {
  const violations = [];
  
  // 단계 번호 추출
  const stepNumbers = captureFiles
    .map(f => {
      const match = f.name.match(FILENAME_REGEX);
      return match ? { num: parseInt(match[1]), file: f } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.num - b.num);
  
  // 연속성 검증 (1, 2, 4 → 3 누락)
  for (let i = 0; i < stepNumbers.length - 1; i++) {
    const diff = stepNumbers[i + 1].num - stepNumbers[i].num;
    if (diff > 1) {
      // 연속이 아닌데 점프가 큰 경우
      const missing = [];
      for (let n = stepNumbers[i].num + 1; n < stepNumbers[i + 1].num; n++) {
        missing.push(String(n).padStart(2, '0'));
      }
      
      violations.push({
        type: 'step_jump',
        prev_file: stepNumbers[i].file.name,
        next_file: stepNumbers[i + 1].file.name,
        missing_steps: missing,
        issue: `단계 번호 점프: ${stepNumbers[i].num} → ${stepNumbers[i + 1].num}, 누락 [${missing.join(', ')}]`,
        severity: 'warn',  // 의도된 누락일 수 있음 → warn만
        auto_fixable: false,
        fix_method: '의도된 누락이면 무시. 실수면 강사가 확인'
      });
    }
  }
  
  return violations;
}

// ═════════════════════════════════════════════════════
// 자동 수정
// ═════════════════════════════════════════════════════

/**
 * 자동 수정 가능한 violations 처리
 */
function autoFix(violations, captureDir) {
  let fixed = 0;
  const remaining = [];
  
  // _unused/ 폴더 생성 (필요 시)
  const unusedDir = path.join(captureDir, '_unused');
  
  for (const v of violations) {
    if (!v.auto_fixable) {
      remaining.push(v);
      continue;
    }
    
    try {
      switch (v.type) {
        case 'unused': {
          // _unused/로 이동
          if (!fs.existsSync(unusedDir)) {
            fs.mkdirSync(unusedDir, { recursive: true });
          }
          const fileName = path.basename(v.file);
          const newPath = path.join(unusedDir, fileName);
          fs.renameSync(v.file, newPath);
          fixed++;
          break;
        }
        
        case 'naming': {
          // 정규화된 이름으로 rename
          const dir = path.dirname(v.file);
          const newPath = path.join(dir, v.fix_method);
          
          // 충돌 확인
          if (fs.existsSync(newPath)) {
            remaining.push({ ...v, fix_error: '정규화된 이름이 이미 존재' });
            break;
          }
          
          fs.renameSync(v.file, newPath);
          fixed++;
          break;
        }
        
        default:
          remaining.push(v);
      }
    } catch (err) {
      remaining.push({ ...v, fix_error: err.message });
    }
  }
  
  return { fixed, remaining };
}

// ═════════════════════════════════════════════════════
// 메인 export
// ═════════════════════════════════════════════════════

/**
 * 메인 검증 함수
 *
 * @param {object} options
 * @param {string} options.session - 세션 ID (예: 'S1')
 * @param {string} options.captureDir - 캡처 폴더 (예: 'lectures/S1/captures/')
 * @param {string} options.slidesDir - 슬라이드 wrapper 폴더 (예: 'src/components/slides/s1/')
 * @param {boolean} options.autoFix - 자동 수정 적용 여부 (default: true)
 *
 * @returns {object} {
 *   passed: bool,
 *   violations: [...],
 *   auto_fixed: int,
 *   stats: { total_refs, total_files, missing, unused, naming_violations, size_violations }
 * }
 */
function check(options) {
  const {
    session,
    captureDir,
    slidesDir,
    autoFix: shouldAutoFix = true
  } = options;
  
  // 입력 검증
  if (!captureDir) {
    return { passed: false, error: 'captureDir 필수' };
  }
  if (!slidesDir || !fs.existsSync(slidesDir)) {
    return { passed: false, error: `slidesDir 존재 X: ${slidesDir}` };
  }
  
  // 자료 로드
  const refs = extractCaptureRefs(slidesDir);
  const captureFiles = listCaptureFiles(captureDir);
  
  // 4축 검증
  let allViolations = [
    ...checkReferentialIntegrity(refs, captureFiles),
    ...checkNamingConvention(captureFiles),
    ...checkFileSize(captureFiles),
    ...checkStepNumberConsistency(captureFiles)
  ];
  
  // 자동 수정
  let auto_fixed = 0;
  if (shouldAutoFix && fs.existsSync(captureDir)) {
    const result = autoFix(allViolations, captureDir);
    auto_fixed = result.fixed;
    allViolations = result.remaining;
  }
  
  // 통계
  const stats = {
    total_refs: refs.length,
    total_files: captureFiles.length,
    missing: allViolations.filter(v => v.type === 'missing').length,
    unused: allViolations.filter(v => v.type === 'unused').length,
    naming_violations: allViolations.filter(v => v.type === 'naming').length,
    size_violations: allViolations.filter(v => v.type.startsWith('size_')).length
  };
  
  // FAIL 판단 (warn은 통과)
  const failViolations = allViolations.filter(v => 
    v.type === 'missing' || 
    v.type === 'size_too_large' ||
    (v.severity !== 'warn' && v.type === 'naming')
  );
  
  return {
    passed: failViolations.length === 0,
    violations: allViolations,
    auto_fixed,
    stats,
    session
  };
}

module.exports = { check };

// ═════════════════════════════════════════════════════
// CLI 사용 예시
// ═════════════════════════════════════════════════════

if (require.main === module) {
  // node capture-checker.js S1
  const session = process.argv[2] || 'S1';
  const captureDir = process.argv[3] || `lectures/${session}/captures/`;
  const slidesDir = process.argv[4] || `src/components/slides/${session.toLowerCase()}/`;
  
  const result = check({ session, captureDir, slidesDir, autoFix: true });
  
  console.log(`\n📷 capture-checker 결과 (${session})`);
  console.log(`총 참조: ${result.stats.total_refs}`);
  console.log(`총 파일: ${result.stats.total_files}`);
  console.log(`자동 수정: ${result.auto_fixed}건`);
  console.log(`\n남은 위반: ${result.violations.length}건`);
  console.log(`  누락: ${result.stats.missing}`);
  console.log(`  미사용: ${result.stats.unused}`);
  console.log(`  명명 규칙: ${result.stats.naming_violations}`);
  console.log(`  사이즈: ${result.stats.size_violations}`);
  
  if (result.violations.length > 0) {
    console.log(`\n상세 (처음 10건):`);
    for (const v of result.violations.slice(0, 10)) {
      const file = v.file ? path.basename(v.file) : 'N/A';
      console.log(`  [${v.type}] ${file} — ${v.issue}`);
      if (v.fix_method) console.log(`    fix: ${v.fix_method}`);
    }
  }
  
  process.exit(result.passed ? 0 : 1);
}
