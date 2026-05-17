/**
 * design-checker.js
 *
 * Design 토큰 검증 utility 함수.
 * 이전 design-reviewer sub-agent를 함수로 흡수.
 * quality-judge가 Phase γ.5 Group E에서 호출.
 *
 * SSOT 참조:
 * - docs/design-system.md — 디자인 토큰 목록
 * - docs/slide-patterns.md § 3 — 패턴별 props 시그니처
 *
 * 검증 5축:
 * - E.1 D11 특수문자 (§ ⚠️ ✓ ✕ ❌ 💡 → 등)
 * - E.2 D2 인라인 hex
 * - E.3 D3 rounded-lg (8px) 금지
 * - E.4 D4 미정의 토큰
 * - E.5 패턴 prop name mismatch
 */

const fs = require('fs');
const path = require('path');

// ═════════════════════════════════════════════════════
// 상수
// ═════════════════════════════════════════════════════

// E.1: 학생 화면에 노출되면 안 되는 특수문자
// D-041 (2026-05-12): 화살표 '→' '←' '↑' '↓'는 정보 흐름 표현 예외 허용 — 제거
const FORBIDDEN_CHARS = ['§', '⚠️', '✓', '✕', '❌', '💡'];

// E.3: 금지 클래스
// D-045 (2026-05-13): bg-bg-elev (#0F172A) 사용 금지 — 학생 화면 가독성 저하
// D-046 (2026-05-13): font-mono 사용 금지 — 학생 화면 폰트 일관성
// D-049 (2026-05-15): 미정의 토큰 사용 금지 — 화이트리스트 SSOT (docs/design-system.md § 2)
const FORBIDDEN_CLASSES = [
  // 기존 (D-003, D-045, D-046)
  'rounded-lg', 'bg-bg-elev', 'font-mono',
  // D-049 미정의 토큰
  'border-line',
  'bg-bg-primary',
  'accent-strong',         // text-accent-strong / bg-accent-strong / border-accent-strong 모두 차단 (substring match)
  'bg-state-success-soft', 'border-state-success', 'text-state-success', 'bg-state-success',
  'bg-state-info-soft', 'border-state-info', 'text-state-info',
  'bg-state-warning-soft', 'border-state-warning', 'text-state-warning',
  'bg-state-error-soft', 'border-state-error', 'text-state-error',
  'bg-bg-elevated',
  'highlight-soft',
];

// D-051 (2026-05-15): pre 블록 폰트 최소 text-xs (12px)
// text-[11px] / text-[10px] / text-2xs 등 더 작은 값 금지
const FORBIDDEN_FONT_SIZES = [
  'text-[11px]',
  'text-[10px]',
  'text-[9px]',
  'text-[8px]',
  'text-2xs',
];

// E.5: 패턴별 expected props (docs/slide-patterns.md § 3 SSOT)
// D-042 (2026-05-12): Cover/Objectives/KeyMessage/Warning 확장 props 추가
const PATTERN_PROPS = {
  Cover: ['sessionNumber', 'number', 'eyebrow', 'title', 'subtitle', 'objectives', 'meta'],
  SessionMeta: ['duration', 'objectives', 'deliverables', 'tools'],
  Objectives: ['items', 'header', 'eyebrow'],
  KeyMessage: ['eyebrow', 'message', 'highlight', 'footer', 'subtext', 'examples', 'visual_polish'],
  SectionDivider: ['number', 'label', 'subtitle'], // '§' 특수문자 X
  Definition: ['term', 'definition', 'notes', 'highlights'], // 'title' X
  ThreeCards: ['title', 'cards'],
  Comparison: ['title', 'bad', 'good', 'toggleable'],
  Warning: ['title', 'level', 'tone', 'problem', 'reason', 'description', 'avoidance', 'personaContext'],
  ToolIntro: ['toolName', 'logo', 'oneLiner', 'strengths', 'pricing'],
  CaptureSlide: ['step', 'src', 'caption', 'highlight'],
  CodeBlock: ['language', 'code', 'caption', 'showLineNumbers'],
  StepGuide: ['title', 'steps'],
  StepTitle: ['stepNumber', 'title', 'estimatedTime'],
  StepDetail: ['stepNumber', 'title', 'description', 'hints', 'visualAid'],
  ActivityCover: ['activityNumber', 'title', 'goal', 'duration', 'deliverable', 'tools'],
  Checklist: ['title', 'items', 'showProgress'],
  Outro: ['message', 'summary', 'next', 'actionButtons']
};

// E.5: 자주 발생하는 mismatch (history.md 사례)
const KNOWN_MISMATCHES = {
  Definition: { wrong: 'title', correct: 'term' },
  Objectives: { wrong: 'objectives', correct: 'items' },
  ThreeCards: {
    card_wrong: 'marker',
    card_correct: 'num'
  },
  Warning: { wrong: 'detail', correct: 'description' }
};

// ═════════════════════════════════════════════════════
// 헬퍼
// ═════════════════════════════════════════════════════

/**
 * 디자인 토큰 SSOT 로드
 * docs/design-system.md에서 var(--xxx) 패턴 추출
 */
function loadDesignTokens(designSystemPath) {
  const content = fs.readFileSync(designSystemPath, 'utf-8');
  const tokens = new Set();
  
  // CSS 변수 정의 추출: --token-name:
  const matches = content.matchAll(/--([a-z][a-z0-9-]*)\s*:/g);
  for (const match of matches) {
    tokens.add(match[1]);
  }
  
  return tokens;
}

/**
 * 슬라이드 wrapper 파일 글로빙
 */
function findSlideFiles(sectionDir) {
  if (!fs.existsSync(sectionDir)) return [];
  
  const files = [];
  const entries = fs.readdirSync(sectionDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.jsx')) {
      files.push(path.join(sectionDir, entry.name));
    }
  }
  return files;
}

/**
 * 학생 화면 영역 추출 (주석 제외)
 * '//' 한 줄 주석, '/* ... *​/' 다중 줄 주석 제거
 */
function extractStudentVisibleContent(jsxContent) {
  let cleaned = jsxContent;
  // 다중 줄 주석 제거
  cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '');
  // 한 줄 주석 제거
  cleaned = cleaned.replace(/\/\/.*$/gm, '');
  return cleaned;
}

// ═════════════════════════════════════════════════════
// 5축 검증 함수
// ═════════════════════════════════════════════════════

/**
 * E.1 D11 특수문자/emoji 검출
 */
function checkForbiddenChars(jsxFiles) {
  const violations = [];
  
  for (const file of jsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const visible = extractStudentVisibleContent(content);
    
    for (const char of FORBIDDEN_CHARS) {
      const matches = [...visible.matchAll(new RegExp(escapeRegex(char), 'g'))];
      for (const match of matches) {
        const lineNum = visible.substring(0, match.index).split('\n').length;
        violations.push({
          axis: 'E.1',
          file,
          line: lineNum,
          char,
          issue: `D11 특수문자 학생 화면 노출: '${char}'`,
          auto_fixable: true,
          fix_method: 'remove' // 또는 자연어 표현으로 대체
        });
      }
    }
    
    // emoji 정규식 (기본 emoji 범위)
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
    const emojiMatches = [...visible.matchAll(emojiRegex)];
    for (const match of emojiMatches) {
      const lineNum = visible.substring(0, match.index).split('\n').length;
      violations.push({
        axis: 'E.1',
        file,
        line: lineNum,
        char: match[0],
        issue: `D1 emoji 학생 화면 노출: '${match[0]}'`,
        auto_fixable: true,
        fix_method: 'remove'
      });
    }
  }
  
  return violations;
}

/**
 * E.2 D2 인라인 hex 검출
 */
function checkInlineHex(jsxFiles) {
  const violations = [];
  
  for (const file of jsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    
    // bg-[#FFFFFF], text-[#0A0A0A] 등 Tailwind 임의 색상
    const tailwindHex = [...content.matchAll(/(?:bg|text|border|ring|fill|stroke)-\[#[0-9A-Fa-f]{3,8}\]/g)];
    
    // style={{ background: '#xxx' }} 등 인라인 스타일
    const inlineStyleHex = [...content.matchAll(/style=\{\{[^}]*['"]#[0-9A-Fa-f]{3,8}['"][^}]*\}\}/g)];
    
    for (const match of [...tailwindHex, ...inlineStyleHex]) {
      const lineNum = content.substring(0, match.index).split('\n').length;
      violations.push({
        axis: 'E.2',
        file,
        line: lineNum,
        snippet: match[0],
        issue: `D2 인라인 hex 사용`,
        auto_fixable: false,
        fix_method: 'token으로 교체 — docs/design-system.md 토큰 매칭 필요'
      });
    }
  }
  
  return violations;
}

/**
 * E.3 D3 rounded-lg 검출
 */
function checkForbiddenClasses(jsxFiles) {
  const violations = [];

  for (const file of jsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');

    for (const cls of FORBIDDEN_CLASSES) {
      // className 안의 정확한 매치 (rounded-lg 단어 경계)
      const regex = new RegExp(`\\b${cls}\\b`, 'g');
      const matches = [...content.matchAll(regex)];

      for (const match of matches) {
        const lineNum = content.substring(0, match.index).split('\n').length;
        violations.push({
          axis: 'E.3',
          file,
          line: lineNum,
          class: cls,
          issue: `D-049/D-045/D-046/D-003: 금지 클래스 '${cls}' 사용`,
          auto_fixable: false,
          fix_method: `docs/design-system.md § 2.2 대체 패턴 참조`
        });
      }
    }

    // D-051 (2026-05-15): pre 블록 폰트 최소 text-xs (12px)
    for (const fontSize of FORBIDDEN_FONT_SIZES) {
      const regex = new RegExp(fontSize.replace(/[[\]]/g, '\\$&'), 'g');
      const matches = [...content.matchAll(regex)];

      for (const match of matches) {
        const lineNum = content.substring(0, match.index).split('\n').length;
        violations.push({
          axis: 'E.6',
          file,
          line: lineNum,
          class: fontSize,
          issue: `D-051: pre 블록 폰트 ${fontSize} 금지 (text-xs 12px 최소)`,
          auto_fixable: true,
          fix_method: `${fontSize} → text-xs (12px) 또는 text-sm (14px)`
        });
      }
    }
  }

  return violations;
}

/**
 * E.4 D4 미정의 토큰 검출
 */
function checkUndefinedTokens(jsxFiles, designTokens) {
  const violations = [];
  
  for (const file of jsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    
    // var(--xxx) 또는 Tailwind 시멘틱 클래스 (bg-accent 등)
    const varMatches = [...content.matchAll(/var\(--([a-z][a-z0-9-]*)\)/g)];
    
    for (const match of varMatches) {
      const tokenName = match[1];
      if (!designTokens.has(tokenName)) {
        const lineNum = content.substring(0, match.index).split('\n').length;
        violations.push({
          axis: 'E.4',
          file,
          line: lineNum,
          token: tokenName,
          issue: `D4 미정의 토큰: --${tokenName}`,
          auto_fixable: false,
          fix_method: 'docs/design-system.md에 토큰 추가 또는 다른 토큰 사용 — 강사 결정'
        });
      }
    }
  }
  
  return violations;
}

/**
 * E.5 패턴 prop name mismatch 검출
 */
function checkPropMismatch(jsxFiles) {
  const violations = [];
  
  for (const file of jsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    
    // 패턴 사용 검출: <PatternName prop1=... prop2=...>
    const patternUsageRegex = /<([A-Z][A-Za-z]+)\s+([^/>]+)/g;
    const matches = [...content.matchAll(patternUsageRegex)];
    
    for (const match of matches) {
      const patternName = match[1];
      const propsString = match[2];
      
      if (!PATTERN_PROPS[patternName]) continue; // 알려진 패턴 X
      
      const expectedProps = PATTERN_PROPS[patternName];
      
      // 사용된 prop 이름 추출
      const usedProps = [...propsString.matchAll(/(\w+)=/g)].map(m => m[1]);
      
      for (const usedProp of usedProps) {
        if (!expectedProps.includes(usedProp)) {
          const lineNum = content.substring(0, match.index).split('\n').length;
          
          // history.md 사례 매칭
          const knownMismatch = KNOWN_MISMATCHES[patternName];
          let fix = `${usedProp}는 ${patternName}의 expected props가 아님. expected: ${expectedProps.join(', ')}`;
          let auto_fixable = false;
          
          if (knownMismatch && usedProp === knownMismatch.wrong) {
            fix = `${usedProp} → ${knownMismatch.correct}`;
            auto_fixable = true;
          }
          
          violations.push({
            axis: 'E.5',
            file,
            line: lineNum,
            pattern: patternName,
            prop: usedProp,
            issue: `패턴 prop mismatch`,
            auto_fixable,
            fix_method: fix
          });
        }
      }
    }
  }
  
  return violations;
}

// ═════════════════════════════════════════════════════
// 자동 수정
// ═════════════════════════════════════════════════════

/**
 * 자동 수정 가능한 violations 처리
 * @returns {fixed: int, remaining: violations[]}
 */
function autoFix(violations) {
  let fixed = 0;
  const remaining = [];
  
  for (const v of violations) {
    if (!v.auto_fixable) {
      remaining.push(v);
      continue;
    }
    
    try {
      const content = fs.readFileSync(v.file, 'utf-8');
      let newContent = content;
      
      switch (v.axis) {
        case 'E.1':
          // 특수문자/emoji 제거
          newContent = newContent.replace(new RegExp(escapeRegex(v.char), 'g'), '');
          break;
        
        case 'E.3':
          // rounded-lg → rounded-xl
          newContent = newContent.replace(/\brounded-lg\b/g, 'rounded-xl');
          break;
        
        case 'E.5':
          // 패턴 prop rename
          if (v.fix_method.includes(' → ')) {
            const [from, to] = v.fix_method.split(' → ');
            newContent = newContent.replace(
              new RegExp(`\\b${escapeRegex(from)}=`, 'g'),
              `${to}=`
            );
          }
          break;
        
        default:
          remaining.push(v);
          continue;
      }
      
      if (newContent !== content) {
        fs.writeFileSync(v.file, newContent);
        fixed++;
      } else {
        remaining.push(v);
      }
    } catch (err) {
      remaining.push({ ...v, auto_fix_error: err.message });
    }
  }
  
  return { fixed, remaining };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ═════════════════════════════════════════════════════
// 메인 export
// ═════════════════════════════════════════════════════

/**
 * 메인 검증 함수
 *
 * @param {object} options
 * @param {string} options.sectionDir - 섹션 슬라이드 폴더 (예: 'src/components/slides/s1/theory/')
 * @param {string} options.designSystemPath - 디자인 시스템 SSOT 경로 (docs/design-system.md)
 * @param {boolean} options.autoFix - 자동 수정 적용 여부 (default: true)
 *
 * @returns {object} {
 *   passed: bool,
 *   violations: [...],   // 수정 안 된 것
 *   auto_fixed: int,
 *   summary: { axis, count }
 * }
 */
function check(options) {
  const {
    sectionDir,
    designSystemPath,
    autoFix: shouldAutoFix = true
  } = options;
  
  // 입력 검증
  if (!sectionDir || !fs.existsSync(sectionDir)) {
    return { passed: false, error: `sectionDir 존재 X: ${sectionDir}` };
  }
  if (!designSystemPath || !fs.existsSync(designSystemPath)) {
    return { passed: false, error: `designSystemPath 존재 X: ${designSystemPath}` };
  }
  
  // 자료 로드
  const jsxFiles = findSlideFiles(sectionDir);
  const designTokens = loadDesignTokens(designSystemPath);
  
  // 5축 검증
  let allViolations = [
    ...checkForbiddenChars(jsxFiles),    // E.1
    ...checkInlineHex(jsxFiles),          // E.2
    ...checkForbiddenClasses(jsxFiles),   // E.3
    ...checkUndefinedTokens(jsxFiles, designTokens),  // E.4
    ...checkPropMismatch(jsxFiles)        // E.5
  ];
  
  // 자동 수정
  let auto_fixed = 0;
  if (shouldAutoFix) {
    const result = autoFix(allViolations);
    auto_fixed = result.fixed;
    allViolations = result.remaining;
  }
  
  // 통계
  const summary = {};
  for (const v of allViolations) {
    summary[v.axis] = (summary[v.axis] || 0) + 1;
  }
  
  return {
    passed: allViolations.length === 0,
    violations: allViolations,
    auto_fixed,
    summary,
    total_files: jsxFiles.length
  };
}

module.exports = { check };

// ═════════════════════════════════════════════════════
// CLI 사용 예시
// ═════════════════════════════════════════════════════

if (require.main === module) {
  // 직접 실행 시: node design-checker.js <sectionDir>
  const sectionDir = process.argv[2] || 'src/components/slides/s1/theory/';
  const designSystemPath = process.argv[3] || 'docs/design-system.md';
  
  const result = check({ sectionDir, designSystemPath, autoFix: true });
  
  console.log(`\n📊 design-checker 결과`);
  console.log(`총 파일: ${result.total_files}`);
  console.log(`자동 수정: ${result.auto_fixed}건`);
  console.log(`남은 위반: ${result.violations.length}건`);
  
  if (Object.keys(result.summary).length > 0) {
    console.log(`\n축별 통계:`);
    for (const [axis, count] of Object.entries(result.summary)) {
      console.log(`  ${axis}: ${count}건`);
    }
  }
  
  if (result.violations.length > 0) {
    console.log(`\n상세 (처음 10건):`);
    for (const v of result.violations.slice(0, 10)) {
      console.log(`  [${v.axis}] ${v.file}:${v.line} — ${v.issue}`);
      if (v.fix_method) console.log(`    fix: ${v.fix_method}`);
    }
  }
  
  process.exit(result.passed ? 0 : 1);
}
