// S4 Activity Slides Index — 40장 (T6a 재정리, 2026-05-22)
// Step 0~3 + Step N + 과제 + Tips 6
// D-043 planning_project (폴더 + GitHub repo 이름 일치) / D-044 5+ docs SSOT 확장
// 변경 누적:
//   T1b: #19 (CLAUDE.md 참조 지침) 이동, #28 (git remote) 제거
//   T2:  #9 /init 명령어 흐름으로 전면 교체
//   T3:  19a (기술스택 AI 추천), 19b (컨벤션 AI 추천) 신규 추가
//   T4:  30 github mcp 등록·로그인, 30a (커밋 메시지) 신규 추가
//   T6a: #12 (Slide19 CLAUDE.md 참조 지침) 제거 + #18~#22 (Slide15/16/17/18/20 구 Step 2 PRD 참조 영역) 제거
//        Step 3 (settings.json) → Step 2, Step 4 (GitHub) → Step 3 자동 한 칸 당김

import Slide01 from './01-activity-toc';
import Slide02 from './02-step0-cover';
import Slide03 from './03-act-0-1-env-check';
import Slide04 from './04-act-0-2-folder-git';
import Slide05 from './05-act-0-3-baseline';
import Slide06 from './06-step0-validation';
import Slide07 from './07-step1-cover';
import Slide08 from './08-act-1-1-touch';
import Slide09 from './09-act-1-1-draft';
import Slide19a from './19a-act-1-1b-tech-stack';
import Slide19b from './19b-act-1-1c-convention';
import Slide10 from './10-act-1-2-ai-improve';
import Slide11 from './11-act-1-3-revise';
import Slide12 from './12-act-1-4-verify';
import Slide13 from './13-act-1-5-length';
import Slide14 from './14-step1-validation';
import Slide21 from './21-step3-cover';
import Slide22 from './22-act-3-1-create-settings';
import Slide23 from './23-act-3-2-template';
import Slide24 from './24-act-3-3-deny-demo';
import Slide25 from './25-step3-validation';
import Slide26 from './26-step4-cover';
import Slide27 from './27-act-4-1-github-create';
import Slide29 from './29-act-4-3-gitignore';
import Slide30 from './30-act-4-4-commit';
import Slide30a from './30a-act-4-4b-commit-message';
import Slide31 from './31-act-4-5-check';
import Slide32 from './32-step4-validation';
import Slide33 from './33-stepN-cover';
import Slide34 from './34-act-N-1-summary';
import Slide35 from './35-act-N-2-cost';
import Slide36 from './36-act-N-3-retrospect';
import Slide37 from './37-stepN-validation';
import Slide38 from './38-assignment';
import Slide39 from './39-tip-1-folder';
import Slide40 from './40-tip-2-claudemd';
import Slide41 from './41-tip-3-verify';
import Slide42 from './42-tip-4-ooda';
import Slide43 from './43-tip-5-github';
import Slide44 from './44-tip-6-system';

export const S4_ACTIVITY_SLIDES = [
  { id: 1, title: '실습 목차', component: Slide01 },
  { id: 2, title: 'Step 0 환경 진단 — 섹션 표지', component: Slide02 },
  { id: 3, title: '0-1 환경 확인 (node·claude·git·gh)', component: Slide03 },
  { id: 4, title: '0-2 작업 폴더 + git 초기화 (planning_project)', component: Slide04 },
  { id: 5, title: '0-3 토큰 베이스라인 + PRD 복사', component: Slide05 },
  { id: 6, title: 'Step 0 검증 기준', component: Slide06 },
  { id: 7, title: 'Step 1 /project/claude.md 협업 작성 — 섹션 표지', component: Slide07 },
  { id: 8, title: '1-1 빈 /project/claude.md 생성', component: Slide08 },
  { id: 9, title: '1-1 /init 명령어로 초안 생성', component: Slide09 },
  { id: 10, title: '1-1b 기술 스택 AI 추천 → /project/claude.md', component: Slide19a },
  { id: 11, title: '1-1c 코드 컨벤션 AI 추천 → /project/claude.md', component: Slide19b },
  { id: 12, title: '1-2 AI 개선 요청 + 시드 6 답변', component: Slide10 },
  { id: 13, title: '1-3 작업자 수정 원칙 + 시드 6 정제', component: Slide11 },
  { id: 14, title: '1-4 AI 검증 루프 + 시드 6 통과', component: Slide12 },
  { id: 15, title: '1-5 분량 점검 (200줄 미만)', component: Slide13 },
  { id: 16, title: 'Step 1 검증 기준', component: Slide14 },
  { id: 17, title: 'Step 2 settings.json + Permissions — 섹션 표지', component: Slide21 },
  { id: 18, title: '2-1 .claude/settings.json 생성', component: Slide22 },
  { id: 19, title: '2-2 권장 템플릿 입력 (JSON)', component: Slide23 },
  { id: 20, title: '2-3 의도된 차단 시연', component: Slide24 },
  { id: 21, title: 'Step 2 검증 기준', component: Slide25 },
  { id: 22, title: 'Step 3 GitHub 셋업 — 섹션 표지', component: Slide26 },
  { id: 23, title: '3-1 GitHub 저장소 생성 (6 STEP)', component: Slide27 },
  { id: 24, title: '3-2 .gitignore 생성 (자연어)', component: Slide29 },
  { id: 25, title: '3-3 github mcp 등록·로그인 (4 Step)', component: Slide30 },
  { id: 26, title: '3-3b 초기 셋업 커밋 + 시드 6 메시지', component: Slide30a },
  { id: 27, title: '3-4 커밋 확인 점검 (GitHub 웹)', component: Slide31 },
  { id: 28, title: 'Step 3 검증 기준', component: Slide32 },
  { id: 29, title: 'Step N 정리·회고 — 섹션 표지', component: Slide33 },
  { id: 30, title: 'N-1 결과 정리 (산출물 6개)', component: Slide34 },
  { id: 31, title: 'N-2 /cost 비교', component: Slide35 },
  { id: 32, title: 'N-3 회고 좋은 답 vs 나쁜 답', component: Slide36 },
  { id: 33, title: 'Step N 검증 기준', component: Slide37 },
  { id: 34, title: '과제 — 환경 안정화 + 다음 단계 진입', component: Slide38 },
  { id: 35, title: 'Tips 1 — 폴더와 저장소 일관성', component: Slide39 },
  { id: 36, title: 'Tips 2 — /project/claude.md 작성 팁', component: Slide40 },
  { id: 37, title: 'Tips 3 — AI 검증 루프 팁', component: Slide41 },
  { id: 38, title: 'Tips 4 — OODA·Permissions 팁', component: Slide42 },
  { id: 39, title: 'Tips 5 — GitHub 셋업 팁', component: Slide43 },
  { id: 40, title: 'Tips 6 — 시스템 환경 팁', component: Slide44 },
];

export default S4_ACTIVITY_SLIDES;
