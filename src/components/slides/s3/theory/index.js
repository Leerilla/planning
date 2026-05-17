// S3 Theory Slides Index — 46장 (Phase 2 완료, 2026-05-12)
// 구조: # 세션 표지 → 이론 목차 → ## §1~§5 챕터 표지 + ### 콘텐츠
// 옵션 B 통합 / MCP 5삭제+2보존 / HIGH-1 폐기

import Slide01 from './01-session-cover';
import Slide02 from './02-toc';
import Slide03 from './03-c1-cover';
import Slide04 from './04-c1-definition';
import Slide05 from './05-c1-first-assertion';
import Slide06 from './06-c1-essence-clarity';
import Slide07 from './07-c1-effects';
import Slide08 from './08-c1-antipattern';
import Slide09 from './09-c1-terms';
import Slide10 from './10-c2-cover';
import Slide11 from './11-c2-overview';
import Slide12 from './12-c2-e1-problem';
import Slide13 from './13-c2-e2-persona';
import Slide14 from './14-c2-e3-features';
import Slide15 from './15-c2-e4-metrics';
import Slide16 from './16-c2-e4-bad-example';
import Slide17 from './17-c2-e5-constraints';
import Slide18 from './18-c2-when-empty';
import Slide19 from './19-c2-terms';
import Slide20 from './20-c3-cover';
import Slide21 from './21-c3-three-eras';
import Slide22 from './22-c3-past';
import Slide23 from './23-c3-past-limit';
import Slide24 from './24-c3-transition';
import Slide25 from './25-c3-transition-issue';
import Slide26 from './26-c3-current';
import Slide27 from './27-c3-second-assertion';
import Slide28 from './28-c4-cover';
import Slide29 from './29-c4-tools-intro';
import Slide30 from './30-c4-notebooklm';
import Slide31 from './31-c4-manyfast';
import Slide32 from './32-c4-effects-grid';
import Slide33 from './33-c4-tools-split';
import Slide34 from './34-c4-antipattern';
import Slide35 from './35-c4-terms';
import Slide36 from './36-c5-cover';
import Slide37 from './37-c5-workflow-intro';
import Slide38 from './38-c5-workflow-sequence';
import Slide39 from './39-c5-ai-limit';
import Slide40 from './40-c5-third-assertion';
import Slide41 from './41-c5-five-checks';
import Slide42 from './42-c5-mvp';
import Slide43 from './43-c5-standard-three';
import Slide44 from './44-c5-seed-three';
import Slide45 from './45-c5-antipattern';
import Slide46 from './46-c5-terms';

export const S3_THEORY_SLIDES = [
  { id: 1, title: '데이터를 PRD로 정제하기', component: Slide01 },
  { id: 2, title: '목차', component: Slide02 },
  { id: 3, title: 'PRD란 무엇인가 — 섹션 표지', component: Slide03 },
  { id: 4, title: 'PRD의 정의 — 합의 문서', component: Slide04 },
  { id: 5, title: '첫 단정 — 명확해야 한다', component: Slide05 },
  { id: 6, title: 'PRD의 본질은 명확성', component: Slide06 },
  { id: 7, title: '모호한 PRD vs 명확한 PRD (4행 표)', component: Slide07 },
  { id: 8, title: '안티패턴 vs 명확한 PRD', component: Slide08 },
  { id: 9, title: '챕터 용어 해설 — PRD란 무엇인가', component: Slide09 },
  { id: 10, title: '좋은 PRD의 5요소 — 섹션 표지', component: Slide10 },
  { id: 11, title: '5요소 한눈에 보기 (5행 표)', component: Slide11 },
  { id: 12, title: '요소 1 문제 — 정의·양식·시드 6', component: Slide12 },
  { id: 13, title: '요소 2 페르소나 — 정의·6줄 양식', component: Slide13 },
  { id: 14, title: '요소 3 핵심 기능 — 표준 3개 구성', component: Slide14 },
  { id: 15, title: '요소 4 성공 지표 — Before/After', component: Slide15 },
  { id: 16, title: '요소 4 잘못된 지표 (3행 표)', component: Slide16 },
  { id: 17, title: '요소 5 제약사항 — 기술·기능·리소스', component: Slide17 },
  { id: 18, title: '5요소가 비면 일어나는 일 (5행 표)', component: Slide18 },
  { id: 19, title: '챕터 용어 해설 — 좋은 PRD의 5요소', component: Slide19 },
  { id: 20, title: 'PRD는 어떻게 만들어져 왔는가 — 섹션 표지', component: Slide20 },
  { id: 21, title: 'PRD 제작의 3시대 (3-card 타임라인)', component: Slide21 },
  { id: 22, title: '과거 — PM이 모든 것을 직접', component: Slide22 },
  { id: 23, title: '과거의 한계 (3행 표)', component: Slide23 },
  { id: 24, title: '과도기 — 일반 LLM의 등장', component: Slide24 },
  { id: 25, title: '과도기의 새로운 문제 (4행 표)', component: Slide25 },
  { id: 26, title: '현재 — 두 도구의 역할 분담', component: Slide26 },
  { id: 27, title: '두 번째 단정 — 섞지 않는다', component: Slide27 },
  { id: 28, title: 'NotebookLM과 Manyfast 활용 — 섹션 표지', component: Slide28 },
  { id: 29, title: '도구 소개 — NotebookLM / Manyfast', component: Slide29 },
  { id: 30, title: 'NotebookLM 특징 + 장점', component: Slide30 },
  { id: 31, title: 'Manyfast 특징 + 장점 (MCP 소개 보존)', component: Slide31 },
  { id: 32, title: '두 도구를 나누어 활용하는 효과 4 (4-card)', component: Slide32 },
  { id: 33, title: '두 도구 분담 정리 (5행 표)', component: Slide33 },
  { id: 34, title: '안티패턴 vs 올바른 활용', component: Slide34 },
  { id: 35, title: '챕터 용어 해설 — NotebookLM과 Manyfast', component: Slide35 },
  { id: 36, title: 'PRD 정제의 실전 — 섹션 표지', component: Slide36 },
  { id: 37, title: '4단계 정제 워크플로 도입', component: Slide37 },
  { id: 38, title: '4단계 sequential 통합', component: Slide38 },
  { id: 39, title: 'AI 자동 검토의 한계 (3행 표)', component: Slide39 },
  { id: 40, title: '세 번째 단정 — 작업자가 직접', component: Slide40 },
  { id: 41, title: 'PRD 검토 5개 점검 (checklist)', component: Slide41 },
  { id: 42, title: 'MVP의 핵심 기능 3개 (3행 표)', component: Slide42 },
  { id: 43, title: '표준 3개 구성 — 입력·처리·출력', component: Slide43 },
  { id: 44, title: '시드 6번 3개 구성', component: Slide44 },
  { id: 45, title: '안티패턴 vs 올바른 운영', component: Slide45 },
  { id: 46, title: '챕터 용어 해설 — PRD 정제의 실전', component: Slide46 },
];

export default S3_THEORY_SLIDES;
