// S1 Theory Slides Index
// 구조: # 세션 표지 → 목차 → ### 섹션 표지 → #### 세부 콘텐츠

import Slide01 from './01-session-cover';
import Slide02 from './02-toc';
import Slide03 from './03-c1-cover';
import Slide04 from './04-c1-definition-main';
import Slide05 from './05-c1-three-questions';
import Slide06 from './06-c1-good-vs-bad';
import Slide07 from './07-c1-first-assertion';
import Slide08 from './08-c1-antipattern-example';
import Slide09 from './09-c2b-cover';
import Slide10 from './10-c2b-symptom-vs-problem';
import Slide11 from './11-c2b-five-whys-example';
import Slide12 from './12-c2b-5stage-framework';
import Slide13 from './13-c2b-hypothesis-keymessage';
import Slide14 from './14-c2b-persona-evolution';
import Slide15 from './15-c2b-proto-persona-scope';
import Slide16 from './16-c1-terms';
import Slide17 from './17-c2-cover';
import Slide18 from './18-c2-research';
import Slide19 from './19-c2-documentation';
import Slide20 from './20-c2-validation-cycle';
import Slide21 from './21-c2-scraping-analysis';
import Slide22 from './22-c2-5areas-summary';
import Slide23 from './23-c2-2nd-assertion';
import Slide24 from './24-c2-judgment-domain';
import Slide25 from './25-c2-ai-persona-limit';
import Slide26 from './26-c2-tool-separation';
import Slide27 from './27-c2-terms';
import Slide28 from './28-c3-cover';
import Slide29 from './29-c3-fake-statistics';
import Slide30 from './30-c3-fake-quote';
import Slide31 from './31-c3-fake-source';
import Slide32 from './32-c3-3rd-assertion';
import Slide33 from './33-c3-fake-patterns-summary';
import Slide34 from './34-c3-step1-click';
import Slide35 from './35-c3-step2-original';
import Slide36 from './36-c3-step3-trust';
import Slide37 from './37-c3-flow-summary';
import Slide38 from './38-c3-terms';

export const S1_THEORY_SLIDES = [
  { id: 1, title: '기획의 본질과 문제 발견', component: Slide01 },
  { id: 2, title: '목차', component: Slide02 },
  { id: 3, title: '기획이란 무엇인가', component: Slide03 },
  { id: 4, title: '기획의 정의 — 정의 본체', component: Slide04 },
  { id: 5, title: '기획의 정의 — 3 핵심 질문', component: Slide05 },
  { id: 6, title: '좋은 기획 vs 나쁜 기획', component: Slide06 },
  { id: 7, title: '첫 단정 — KeyMessage', component: Slide07 },
  { id: 8, title: '첫 단정 — 안티패턴 vs 올바른 출발', component: Slide08 },
  { id: 9, title: '문제는 한 번에 정의되지 않는다', component: Slide09 },
  { id: 10, title: '증상 vs 진짜 문제', component: Slide10 },
  { id: 11, title: '5 Whys로 회의록 문제 파기', component: Slide11 },
  { id: 12, title: '기획 5단계 프레임', component: Slide12 },
  { id: 13, title: '1차 가설은 검증 대상', component: Slide13 },
  { id: 14, title: '페르소나의 3단계 진화', component: Slide14 },
  { id: 15, title: '본 자료의 1단계 가설 페르소나', component: Slide15 },
  { id: 16, title: '챕터 용어 해설 — 기획이란 무엇인가', component: Slide16 },
  { id: 17, title: 'AI 시대 기획의 변화 — 섹션 표지', component: Slide17 },
  { id: 18, title: '빨라진 것: 리서치', component: Slide18 },
  { id: 19, title: '빨라진 것: 문서화', component: Slide19 },
  { id: 20, title: '빨라진 것: 검증 사이클', component: Slide20 },
  { id: 21, title: '빨라진 것: 데이터 스크래핑과 분석', component: Slide21 },
  { id: 22, title: '5개 영역의 가속 정리', component: Slide22 },
  { id: 23, title: '두 번째 단정 — AI는 기획을 대신하지 않는다', component: Slide23 },
  { id: 24, title: '변하지 않은 것 — 판단의 영역', component: Slide24 },
  { id: 25, title: 'AI는 평균을 만든다 — 페르소나 위임의 한계', component: Slide25 },
  { id: 26, title: 'AI 도구의 영역별 분리', component: Slide26 },
  { id: 27, title: '챕터 용어 해설 — AI 시대 기획의 변화', component: Slide27 },
  { id: 28, title: '출처 검증의 실전 — 섹션 표지', component: Slide28 },
  { id: 29, title: '거짓 패턴 1 — 그럴듯한 통계', component: Slide29 },
  { id: 30, title: '거짓 패턴 2 — 가짜 인용', component: Slide30 },
  { id: 31, title: '거짓 패턴 3 — 출처 조작', component: Slide31 },
  { id: 32, title: '세 번째 단정 — AI 답은 검증 없으면 사용 불가', component: Slide32 },
  { id: 33, title: '거짓 패턴 정리 — 위험도 표', component: Slide33 },
  { id: 34, title: '출처 검증 3단계 — 1단계: 클릭', component: Slide34 },
  { id: 35, title: '출처 검증 3단계 — 2단계: 원문 확인', component: Slide35 },
  { id: 36, title: '출처 검증 3단계 — 3단계: 신뢰성 판단', component: Slide36 },
  { id: 37, title: '검증 흐름 정리', component: Slide37 },
  { id: 38, title: '챕터 용어 해설 — 출처 검증의 실전', component: Slide38 },
];

export default S1_THEORY_SLIDES;
