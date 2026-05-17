#!/usr/bin/env node
/**
 * S1 lecture.md v2 Parser
 * 호환 모드: ### 혼용 처리 + ### "챕터 용어 해설" 예외
 *
 * 출력:
 *  - header_tree (YAML 형식)
 *  - auto_mapping (8타입 분포)
 *  - coverage_map
 *  - profile 자동 도출
 */

const fs = require('fs');
const path = require('path');

const LECTURE_PATH = 'E:\\claude-curriculum-platform_copy\\lectures\\S1\\lecture.md';

// 파일 읽기
const content = fs.readFileSync(LECTURE_PATH, 'utf-8');
const lines = content.split('\n');

console.log(`Total lines: ${lines.length}\n`);

// === HEADER TREE PARSING ===

class HeaderNode {
  constructor(level, text, lineNum) {
    this.level = level;
    this.text = text;
    this.lineNum = lineNum;
    this.children = [];
    this.kind = null; // 'title' | 'section' | 'chapter' | 'group'
    this.slides = []; // 자식 슬라이드 블록들
  }
}

function getHeaderLevel(line) {
  const match = line.match(/^#+/);
  if (!match) return 0;
  return match[0].length;
}

// S1 호환 모드: ### 판정
function classifyThreeHashHeader(text) {
  // ### 1️⃣ ..., ### 2️⃣ ..., ### 🌱 ...
  if (/^1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|7️⃣|8️⃣|9️⃣|🌱/.test(text)) {
    return 'chapter';
  }
  // ### 활동 묶음 N:
  if (/^활동 묶음 \d+:/.test(text)) {
    return 'chapter';
  }
  // ### {N}-{N}. 또는 ### {anything else}
  return 'slide_group';
}

// ### "1️⃣ 챕터 용어 해설" 예외 감지
function isTermsGlossaryException(text) {
  return /챕터 용어 해설$/.test(text);
}

// 파싱
const tree = {
  title: '',
  sections: []
};

let currentSection = null;
let currentChapter = null;
let currentGroup = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const level = getHeaderLevel(line);
  const text = line.substring(level).trim();

  if (level === 1) {
    tree.title = text;
  } else if (level === 2) {
    currentSection = {
      kind: text === '이론' ? 'theory' : text === '실습' ? 'activity' : 'unknown',
      title: text,
      chapters: [],
      start_line: i + 1
    };
    tree.sections.push(currentSection);
    currentChapter = null;
    currentGroup = null;
  } else if (level === 3) {
    // S1 호환 모드 판정
    const classification = classifyThreeHashHeader(text);
    const isTermsException = isTermsGlossaryException(text);

    if (classification === 'chapter' || (classification === 'slide_group' && isTermsException)) {
      // 새로운 챕터
      currentChapter = {
        title: text,
        start_line: i + 1,
        has_intro_body: false,
        groups: []
      };
      if (currentSection) {
        currentSection.chapters.push(currentChapter);
      }
      currentGroup = null;
    } else {
      // 슬라이드 그룹으로 취급
      currentGroup = {
        title: text,
        start_line: i + 1,
        slides: []
      };
      if (!currentChapter) {
        // 챕터가 없으면 암시적 챕터 생성
        currentChapter = {
          title: '[implicit]',
          start_line: i,
          groups: [currentGroup]
        };
        if (currentSection) {
          currentSection.chapters.push(currentChapter);
        }
      } else {
        currentChapter.groups.push(currentGroup);
      }
    }
  } else if (level === 4) {
    // 슬라이드 묶음 시작
    if (!currentGroup) {
      currentGroup = {
        title: '[auto-group]',
        start_line: i + 1,
        slides: []
      };
      if (currentChapter) {
        currentChapter.groups.push(currentGroup);
      }
    }
    // 슬라이드 블록
    const slideBlock = {
      title: text,
      line_num: i + 1,
      content_start: i + 2,
      slide_index: currentGroup.slides.length + 1
    };
    currentGroup.slides.push(slideBlock);
  }
}

// === AUTO MAPPING ===

// 각 슬라이드에 대해 콘텐츠 분석 및 8타입 자동 매핑
function analyzeSlideContent(group, slideIndex, lectureLines) {
  const slide = group.slides[slideIndex];
  if (!slide) return null;

  const startLine = slide.content_start - 1;

  // 다음 슬라이드 또는 다음 섹션까지의 끝 찾기
  let endLine = startLine;
  for (let i = startLine; i < lectureLines.length; i++) {
    const l = lectureLines[i];
    if (i > startLine && (l.startsWith('####') || l.startsWith('###') || l.startsWith('##') || l.startsWith('#'))) {
      endLine = i - 1;
      break;
    }
    if (i === lectureLines.length - 1) {
      endLine = i;
    }
  }

  const blockContent = lectureLines.slice(startLine, endLine + 1).join('\n');

  // 자동 매핑 로직 (docs/slide-types.md § 2)
  let slideType = 'concept'; // 기본값
  let emphasis = 'default';

  // 1. ## 실습 하위
  const inActivitySection = group.slides[0]?.section === 'activity';

  // 2. ### 직후 본문 없이 시작 → title (auto)
  const isPossibleChapterFirst = slideIndex === 0 && !blockContent.trim();

  // 3. "사례:" / "예시:" / "시나리오:"
  if (/^(사례:|예시:|시나리오:)/.test(blockContent)) {
    slideType = 'example';
  }
  // 4. > 블록 첫 콘텐츠
  else if (blockContent.trim().startsWith('>')) {
    slideType = 'quote';
  }
  // 5. 표 2열
  else if (/\|.*\|.*\|.*\n\|[\s\-|]+\n\|[^|]+\|[^|]+\|/.test(blockContent)) {
    const tableMatch = blockContent.match(/\|([^|]+)\|([^|]+)\|\s*\n\s*\|[\s\-|]+\n((?:\|[^|]+\|[^|]+\|\s*\n?)+)/);
    if (tableMatch) {
      const rowCount = (tableMatch[3].match(/\|/g) || []).length / 2;
      if (rowCount <= 10) { // 용어 테이블 기준
        slideType = 'terms';
      }
    }
  }
  // 6. 표 3열 이상
  else if (/\|.*\|.*\|.*\|/.test(blockContent)) {
    slideType = 'comparison';
  }
  // 7. 번호 리스트 ≥ 3
  else if ((blockContent.match(/^[\s]*\d+\./gm) || []).length >= 3) {
    slideType = 'process';
  }

  // concept emphasis 결정
  if (slideType === 'concept') {
    if (!blockContent.includes('>') && /단정|원칙|절대|필수|반드시/.test(blockContent)) {
      emphasis = 'key-message';
    } else if (/정의|이란|은|이다/.test(slide.title)) {
      emphasis = 'definition';
    } else if (slideIndex === (group.slides.length - 1)) {
      emphasis = 'outro';
    }
  }

  return {
    title: slide.title,
    line: slide.line_num,
    content_range: [startLine + 1, endLine + 1],
    type: slideType,
    emphasis: slideType === 'concept' ? emphasis : null
  };
}

// === MAIN OUTPUT ===

console.log('=== S1 HEADER TREE ===\n');
console.log(JSON.stringify(tree, null, 2));

// 슬라이드 카운트
let totalAutoSlides = 0;
let typeDistribution = {};

tree.sections.forEach(section => {
  section.chapters.forEach(chapter => {
    if (chapter.groups) {
      chapter.groups.forEach(group => {
        group.slides.forEach((slide, idx) => {
          const analyzed = analyzeSlideContent(group, idx, lines);
          if (analyzed) {
            const t = analyzed.type;
            typeDistribution[t] = (typeDistribution[t] || 0) + 1;
            totalAutoSlides++;
          }
        });
      });
    }
  });
});

console.log('\n=== AUTO-MAPPING DISTRIBUTION ===\n');
console.log(typeDistribution);
console.log(`\nTotal slides (before --- split): ${totalAutoSlides}`);

// --- 분할 감지
const separatorCount = content.match(/^---\s*$/gm)?.length || 0;
const estimatedTotal = totalAutoSlides + separatorCount;
console.log(`Separators found: ${separatorCount}`);
console.log(`Estimated total after --- split: ${estimatedTotal}`);
