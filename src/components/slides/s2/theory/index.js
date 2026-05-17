// S2 Theory Slides Index
// 구조: # 세션 표지 → 이론 목차 → ## 챕터 표지 + ### 콘텐츠
// 2026-05-12 — §3-B 영역 NextUnicorn 인용 재기획 후 (이론 35 → 37장)

import Slide01 from './01-session-cover';
import Slide02 from './02-toc';
import Slide03 from './03-c1-cover';
import Slide04 from './04-c1-definition';
import Slide05 from './05-c1-first-assertion';
import Slide06 from './06-c1-validation-vs-opinion';
import Slide07 from './07-c1-two-conditions';
import Slide08 from './08-c1-antipattern';
import Slide09 from './09-c1-verifiable-form';
import Slide10 from './10-c1-seed-examples';
import Slide11 from './11-c1-concrete-case';
import Slide12 from './12-c1-terms';
import Slide13 from './13-c2-cover';
import Slide14 from './14-c2-active-validation';
import Slide15 from './15-c2-active-limit';
import Slide16 from './16-c2-passive-validation';
import Slide17 from './17-c2-passive-limit';
import Slide18 from './18-c2-two-axes-table';
import Slide19 from './19-c2-integration-seed';
import Slide20 from './20-c2-second-assertion';
import Slide21 from './21-c2-single-axis-antipattern';
import Slide22 from './22-c2-cross-validation';
import Slide23 from './23-c2-terms';
import Slide24 from './24-c3-cover';
import Slide25 from './25-c3-meta-definition';
import Slide26 from './26-c3-general-vs-meta';
import Slide27 from './27-c3-third-assertion';
import Slide28 from './28-c3-meta-formula';
import Slide29 from './29-c3-meta-antipattern';
import Slide30 from './30-c3-response-rate';
import Slide31 from './31-c3-avg-vs-personalized';
import Slide32 from './32-c3-channel-rates';
import Slide33 from './33-c3-cold-mail-keymessage';
import Slide34 from './34-c3-ai-four-steps';
import Slide35 from './35-c3-operation-factors';
import Slide36 from './36-c3-safety-net';
import Slide37 from './37-c3-terms';

export const S2_THEORY_SLIDES = [
  { id: 1, title: '고객 검증의 두 축', component: Slide01 },
  { id: 2, title: '목차', component: Slide02 },
  { id: 3, title: '고객 검증이란 무엇인가 — 섹션 표지', component: Slide03 },
  { id: 4, title: '검증의 정의', component: Slide04 },
  { id: 5, title: '첫 단정 — KeyMessage', component: Slide05 },
  { id: 6, title: '의견 수집과 검증의 갈림길', component: Slide06 },
  { id: 7, title: '검증의 두 조건', component: Slide07 },
  { id: 8, title: '안티패턴 vs 올바른 검증', component: Slide08 },
  { id: 9, title: '검증 가능한 형태', component: Slide09 },
  { id: 10, title: '시드 1/5 가설 형식 변환', component: Slide10 },
  { id: 11, title: '의견 vs 검증 구체 사례 (시드 1)', component: Slide11 },
  { id: 12, title: '챕터 용어 해설 — 고객 검증이란 무엇인가', component: Slide12 },
  { id: 13, title: '검증의 두 축: 능동과 수동 — 섹션 표지', component: Slide13 },
  { id: 14, title: '능동 검증 정의 + 깊이 장점', component: Slide14 },
  { id: 15, title: '능동의 단점 — 응답률 + 편향', component: Slide15 },
  { id: 16, title: '수동 검증 정의 + 폭 장점', component: Slide16 },
  { id: 17, title: '수동의 단점 — 후속 질문 불가', component: Slide17 },
  { id: 18, title: '능동 vs 수동 비교 (4행 표)', component: Slide18 },
  { id: 19, title: '두 축 통합 — 시드 1 운영 사례', component: Slide19 },
  { id: 20, title: '두 번째 단정 — 두 축은 함께', component: Slide20 },
  { id: 21, title: '한 축 의존 안티패턴', component: Slide21 },
  { id: 22, title: '두 축 신뢰도 효과 — 일치/불일치', component: Slide22 },
  { id: 23, title: '챕터 용어 해설 — 검증의 두 축', component: Slide23 },
  { id: 24, title: '메타 프롬프팅과 응답률의 현실 — 섹션 표지', component: Slide24 },
  { id: 25, title: '메타 프롬프팅 정의 + 원리', component: Slide25 },
  { id: 26, title: '일반 vs 메타 프롬프팅', component: Slide26 },
  { id: 27, title: '세 번째 단정 — 좋은 프롬프트', component: Slide27 },
  { id: 28, title: '메타 한 줄 공식 + 3영역 적용', component: Slide28 },
  { id: 29, title: '메타 안티패턴 — 그대로 발송 vs 메타', component: Slide29 },
  { id: 30, title: '응답률 5-15% 현실 + ROI', component: Slide30 },
  { id: 31, title: '평균 5% vs 개인화 18% — 3배 차이', component: Slide31 },
  { id: 32, title: '채널별 응답률 4가지', component: Slide32 },
  { id: 33, title: 'AI 시대 콜드 메일 단정 — 1:1 아웃리치', component: Slide33 },
  { id: 34, title: 'AI 활용 4 단계 — 메타 프롬프팅의 실행', component: Slide34 },
  { id: 35, title: '응답률 운영 + 팔로우업 50%↑ + 3 요인', component: Slide35 },
  { id: 36, title: '한 축 의존 vs 두 축 안전망', component: Slide36 },
  { id: 37, title: '챕터 용어 해설 — 메타 프롬프팅과 응답률', component: Slide37 },
];

export default S2_THEORY_SLIDES;
