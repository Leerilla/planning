// S1 Theory Deck — Phase δ 추가 강화 (2026-05-11 보강)
// 기존 38개 wrapper는 _archive/s1-old-2026-05-11/theory/ 보관
// 신규 시퀀스: lectures/S1/spec.md § 2.1 + 4개 보강 슬라이드
// 총 26장 (§1: 1-10, §2: 11-15, §3: 16-20, 활동소개: 21-22, 종료: 23-26)

import S1TheorySlide01 from './01-cover';
import S1TheorySlide02 from './02-session-meta';
import S1TheorySlide03 from './03-objectives';
import S1TheorySlide04 from './04-section-divider-1';
import S1TheorySlide05 from './05-definition-planning';
import S1TheorySlide06 from './06-key-message-1';
import S1TheorySlide07 from './07-warning-antipattern';
import S1TheorySlide08 from './08-step-guide-framework';
import S1TheorySlide08b from './08b-step-guide-persona-evolution';
import S1TheorySlide08c from './08c-code-block-five-whys';
import S1TheorySlide09 from './09-section-divider-2';
import S1TheorySlide10 from './10-comparison-past-present';
import S1TheorySlide11 from './11-key-message-2';
import S1TheorySlide12 from './12-warning-judgment';
import S1TheorySlide13 from './13-three-cards-false-patterns';
import S1TheorySlide14 from './14-section-divider-3';
import S1TheorySlide15 from './15-key-message-3';
import S1TheorySlide16 from './16-definition-false-intuition';
import S1TheorySlide17 from './17-step-guide-verification';
import S1TheorySlide17b from './17b-three-cards-source-checklist';
import S1TheorySlide18 from './18-comparison-risk';
import S1TheorySlide19 from './19-three-cards-seeds';
import S1TheorySlide20 from './20-three-cards-seeds-additional';
import S1TheorySlide21 from './21-definition-activity-intro';
import S1TheorySlide21b from './21b-three-cards-tips';
import S1TheorySlide22 from './22-recap';

export const S1_THEORY_SLIDES = [
  { id: 1, title: 'Cover — 기획의 본질', component: S1TheorySlide01 },
  { id: 2, title: 'SessionMeta — 시간/산출물', component: S1TheorySlide02 },
  { id: 3, title: 'Objectives — 5개 학습 목표', component: S1TheorySlide03 },
  { id: 4, title: 'SectionDivider — §1 기획이란', component: S1TheorySlide04 },
  { id: 5, title: 'Definition — 기획의 정의', component: S1TheorySlide05 },
  { id: 6, title: 'KeyMessage — 첫 단정', component: S1TheorySlide06 },
  { id: 7, title: 'Warning — 기능부터 정하는 안티패턴', component: S1TheorySlide07 },
  { id: 8, title: 'StepGuide — 5단계 프레임', component: S1TheorySlide08 },
  { id: 9, title: 'StepGuide — 페르소나의 진화', component: S1TheorySlide08b },
  { id: 10, title: 'CodeBlock — 5 Whys 회의록 사례', component: S1TheorySlide08c },
  { id: 11, title: 'SectionDivider — §2 AI 시대 변화', component: S1TheorySlide09 },
  { id: 12, title: 'Comparison — 과거 vs 현재', component: S1TheorySlide10 },
  { id: 13, title: 'KeyMessage — 두 번째 단정', component: S1TheorySlide11 },
  { id: 14, title: 'Warning — 판단 주체는 사람', component: S1TheorySlide12 },
  { id: 15, title: 'ThreeCards — 거짓 패턴 3가지', component: S1TheorySlide13 },
  { id: 16, title: 'SectionDivider — §3 출처 검증', component: S1TheorySlide14 },
  { id: 17, title: 'KeyMessage — 세 번째 단정', component: S1TheorySlide15 },
  { id: 18, title: 'Definition — 거짓 정보의 직관', component: S1TheorySlide16 },
  { id: 19, title: 'StepGuide — 검증 3단계', component: S1TheorySlide17 },
  { id: 20, title: 'ThreeCards — 출처 검증 체크리스트', component: S1TheorySlide17b },
  { id: 21, title: 'Comparison — 위험도 비교', component: S1TheorySlide18 },
  { id: 22, title: 'ThreeCards — 시드 카드 (1)', component: S1TheorySlide19 },
  { id: 23, title: 'ThreeCards — 시드 카드 (2)', component: S1TheorySlide20 },
  { id: 24, title: 'Definition — 1차 가설을 손에 쥐기', component: S1TheorySlide21 },
  { id: 25, title: 'ThreeCards — Tips 실전 지혜', component: S1TheorySlide21b },
  { id: 26, title: 'Recap/Outro — 3개 단정 정리', component: S1TheorySlide22 },
];

export default S1_THEORY_SLIDES;
