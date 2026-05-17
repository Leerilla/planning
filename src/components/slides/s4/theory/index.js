// S4 Theory Slides Index — 41장 (Phase 2 완료, 2026-05-12)
// 구조: # 세션 표지 → 이론 목차 → ## §1~§3 챕터 표지 + #### 콘텐츠 (표준 형식)

import Slide01 from './01-session-cover';
import Slide02 from './02-toc';
import Slide03 from './03-c1-cover';
import Slide04 from './04-c1-context-over-command';
import Slide05 from './05-c1-first-assertion';
import Slide06 from './06-c1-statelessness';
import Slide07 from './07-c1-ops-effect';
import Slide08 from './08-c1-anchoring';
import Slide09 from './09-c1-antipattern';
import Slide10 from './10-c1-terms';
import Slide11 from './11-c2-cover';
import Slide12 from './12-c2-overview';
import Slide13 from './13-c2-area1';
import Slide14 from './14-c2-area1-seed';
import Slide15 from './15-c2-area2-seed';
import Slide16 from './16-c2-area3-seed';
import Slide17 from './17-c2-area4-seed';
import Slide18 from './18-c2-second-assertion';
import Slide19 from './19-c2-prd-vs-claude';
import Slide20 from './20-c2-pitfalls';
import Slide21 from './21-c2-ai-verify-intro';
import Slide22 from './22-c2-ai-verify-5steps';
import Slide23 from './23-c2-human-vs-ai';
import Slide24 from './24-c2-seed-verify';
import Slide25 from './25-c2-antipattern';
import Slide26 from './26-c2-terms';
import Slide27 from './27-c3-cover';
import Slide28 from './28-c3-ooda-intro';
import Slide29 from './29-c3-ooda-4steps';
import Slide30 from './30-c3-claude-ooda';
import Slide31 from './31-c3-third-assertion';
import Slide32 from './32-c3-permissions-3';
import Slide33 from './33-c3-auto-allow';
import Slide34 from './34-c3-ask-before';
import Slide35 from './35-c3-deny';
import Slide36 from './36-c3-ooda-permissions';
import Slide37 from './37-c3-responsibility';
import Slide38 from './38-c3-extremes';
import Slide39 from './39-c3-recommended-settings';
import Slide40 from './40-c3-antipattern';
import Slide41 from './41-c3-terms';

export const S4_THEORY_SLIDES = [
  { id: 1, title: 'PRD를 에이전트에게 전달하기', component: Slide01 },
  { id: 2, title: '목차', component: Slide02 },
  { id: 3, title: 'AI 에이전트와 대화하는 법 — 섹션 표지', component: Slide03 },
  { id: 4, title: '컨텍스트는 명령보다 중요하다', component: Slide04 },
  { id: 5, title: '첫 단정 — CLAUDE.md는 프로젝트의 헌법', component: Slide05 },
  { id: 6, title: '무상태성의 의미', component: Slide06 },
  { id: 7, title: 'CLAUDE.md 운영의 효과 (2행 표)', component: Slide07 },
  { id: 8, title: '컨텍스트 앵커링', component: Slide08 },
  { id: 9, title: '안티패턴 vs 컨텍스트 앵커링', component: Slide09 },
  { id: 10, title: '챕터 용어 해설 — AI 에이전트와 대화', component: Slide10 },
  { id: 11, title: 'CLAUDE.md 4영역 — 섹션 표지', component: Slide11 },
  { id: 12, title: '4영역 한눈에 보기 (4행 표)', component: Slide12 },
  { id: 13, title: '1영역: 프로젝트 개요', component: Slide13 },
  { id: 14, title: '1영역 시드 6번 예시', component: Slide14 },
  { id: 15, title: '2영역 시드 6번 예시', component: Slide15 },
  { id: 16, title: '3영역 시드 6번 예시', component: Slide16 },
  { id: 17, title: '4영역 시드 6번 예시', component: Slide17 },
  { id: 18, title: '두 번째 단정 — PRD vs CLAUDE.md', component: Slide18 },
  { id: 19, title: 'PRD vs CLAUDE.md (5행 표)', component: Slide19 },
  { id: 20, title: '흔히 놓치는 3가지 함정', component: Slide20 },
  { id: 21, title: 'AI 검증 루프란', component: Slide21 },
  { id: 22, title: 'AI 검증 루프 5단계', component: Slide22 },
  { id: 23, title: '사람 검증 vs AI 검증 (4행 표)', component: Slide23 },
  { id: 24, title: '시드 6번 AI 검증 예시', component: Slide24 },
  { id: 25, title: '안티패턴 vs 올바른 검증', component: Slide25 },
  { id: 26, title: '챕터 용어 해설 — CLAUDE.md 4영역', component: Slide26 },
  { id: 27, title: 'OODA 루프와 Permissions — 섹션 표지', component: Slide27 },
  { id: 28, title: 'OODA 루프란', component: Slide28 },
  { id: 29, title: 'OODA 4단계 (순환)', component: Slide29 },
  { id: 30, title: 'Claude Code의 OODA 루프', component: Slide30 },
  { id: 31, title: '세 번째 단정 — Decide↔Act 사이가 Permissions', component: Slide31 },
  { id: 32, title: 'Permissions 3단계 (3행 표)', component: Slide32 },
  { id: 33, title: '자동 허용 도구 (auto_allow)', component: Slide33 },
  { id: 34, title: '매번 확인 도구 (ask_before)', component: Slide34 },
  { id: 35, title: '절대 금지 도구 (deny)', component: Slide35 },
  { id: 36, title: 'Permissions와 OODA의 연결', component: Slide36 },
  { id: 37, title: '책임 분배의 의미', component: Slide37 },
  { id: 38, title: '두 극단의 위험', component: Slide38 },
  { id: 39, title: '권장 settings.json (JSON 템플릿)', component: Slide39 },
  { id: 40, title: '안티패턴 vs 권장 운영', component: Slide40 },
  { id: 41, title: '챕터 용어 해설 — OODA·Permissions', component: Slide41 },
];

export default S4_THEORY_SLIDES;
