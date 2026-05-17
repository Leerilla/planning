// S1 이론 덱 — 37장 슬라이드 배열 (Phase L2: 신규 예시 슬라이드 3장 추가)
// Source: lectures/S1/curation-spec.md § 1.1.1 + 강사 Phase L2 콘텐츠 추가

import S01 from './01-cover';
import S02 from './02-session-meta';
import S03 from './03-key-message';
import S04 from './04-section-divider';
import S05 from './05-definition';
import S06 from './06-three-cards';
import S06b from './06b-extraction-example';
import S07 from './07-key-message';
import S08 from './08-comparison';
import S09 from './09-comparison';
import S10 from './10-definition';
import S11 from './11-key-message';
import S12 from './12-three-cards';
import S13 from './13-three-cards';
import S14 from './14-key-message';
import S15 from './15-definition';
import S15b from './15b-hypothesis-example';
import S16 from './16-key-message';
import S17 from './17-step-guide';
import S18 from './18-warning';
import S18b from './18b-weakness-example';
import S19 from './19-definition';
import S20 from './20-section-divider';
import S21 from './21-key-message';
import S22 from './22-comparison';
import S23 from './23-comparison';
import S24 from './24-comparison';
import S25 from './25-key-message';
import S26 from './26-key-message';
import S27 from './27-three-cards';
import S28 from './28-section-divider';
import S29 from './29-warning-breakdown';
import S30 from './30-false-pattern-validator';
import S31 from './31-step-guide';
import S32 from './32-key-message';
import S33 from './33-recap';
import S34 from './34-outro';

export const S1_THEORY_SLIDES = [
  { id: 1, title: 'Cover', component: S01 },
  { id: 2, title: 'SessionMeta', component: S02 },
  { id: 3, title: 'KeyMessage — 첫 단정', component: S03 },
  { id: 4, title: 'SectionDivider — § 1', component: S04 },
  { id: 5, title: 'Definition — 기획', component: S05 },
  { id: 6, title: 'ThreeCards — 3질문', component: S06 },
  { id: 7, title: 'ThreeCards — 데이터→특징→정의 예시', component: S06b },
  { id: 8, title: 'KeyMessage — 정의 강화', component: S07 },
  { id: 9, title: 'Comparison — 욕망 vs 기획 (Interactive 1)', component: S08 },
  { id: 10, title: 'Comparison — 검증가능성', component: S09 },
  { id: 11, title: 'Definition — 페르소나', component: S10 },
  { id: 12, title: 'KeyMessage — 페르소나 필요성', component: S11 },
  { id: 13, title: 'ThreeCards — 페르소나 5축 1/2', component: S12 },
  { id: 14, title: 'ThreeCards — 페르소나 5축 2/2', component: S13 },
  { id: 15, title: 'KeyMessage — 5축 결정성', component: S14 },
  { id: 16, title: 'Definition — 가설', component: S15 },
  { id: 17, title: 'ThreeCards — 가설 도출 예시', component: S15b },
  { id: 18, title: 'KeyMessage — 5단계 도입', component: S16 },
  { id: 19, title: 'StepGuide — 5단계 (Interactive 2)', component: S17 },
  { id: 20, title: 'Warning — 약한 고리', component: S18 },
  { id: 21, title: 'Comparison — 사슬 모호 vs 명확 예시', component: S18b },
  { id: 22, title: 'Definition — 1차 가설', component: S19 },
  { id: 23, title: 'SectionDivider — § 2', component: S20 },
  { id: 24, title: 'KeyMessage — AI 가속', component: S21 },
  { id: 25, title: 'Comparison — 리서치 속도', component: S22 },
  { id: 26, title: 'Comparison — 검증 사이클 속도', component: S23 },
  { id: 27, title: 'Comparison — 페인포인트 분석', component: S24 },
  { id: 28, title: 'KeyMessage — 속도 vs 깊이', component: S25 },
  { id: 29, title: 'KeyMessage — 두 번째 단정', component: S26 },
  { id: 30, title: 'ThreeCards — AI 자세 (Interactive 3)', component: S27 },
  { id: 31, title: 'SectionDivider — § 3', component: S28 },
  { id: 32, title: 'WarningBreakdown — 거짓 패턴', component: S29 },
  { id: 33, title: 'FalsePatternValidator — 검증 게임 (Interactive 4)', component: S30 },
  { id: 34, title: 'StepGuide — 검증 3단계 (Interactive 5)', component: S31 },
  { id: 35, title: 'KeyMessage — 세 번째 단정', component: S32 },
  { id: 36, title: 'Recap — 3가지 단정', component: S33 },
  { id: 37, title: 'Outro — 활동으로 이어짐', component: S34 },
];

export default S1_THEORY_SLIDES;
