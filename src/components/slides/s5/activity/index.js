// S5 Activity Slides Index — 62장 (T17a 후: a27 rules/design.md 제거, 2026-05-24)
// T16a 전면 재기획 (화면 설계 → Task → GitHub) + T17a (강사 #21 제거)
// 새 흐름:
//   Step 0  (a2~a7)  : 환경 진단
//   Step 0.5(a7a~a7d): Stitch 사전 학습
//   Step 1  (a8~a17) : 화면 설계 완료 (도출 → prompt.md → Stitch 시안 → Export → docs 배치 → 지침 강화)
//                     [재배치] a12a(prompt.md), a24~a27(시안~design.md), a27a/a27b(docs/claude.md) 모두 Step 1에 통합
//   Step 2  (a18~a22): Task 설계 — a13(task-cmd), a16(매핑검토)만 잔존
//   Step 3  (a23~a28): GitHub 이슈 등록 — a19/a19a/a19b/a20/a21
//   Step 4  (a29~a36): 빌드 (현행 유지)
//   Step 5  (a37~a40): 검토 (현행 유지)
//   StepN   (a41~a45): 정리 (현행 유지)
//   Tips    (a47~a56): 5세트 (현행 유지)
// 슬라이드 id는 그대로 유지 (deck-registry 호환). 배열 순서만 재배치.

import Slide01 from './01-activity-toc';
import Slide02 from './02-step0-cover';
import Slide03 from './03-act-0-1-env-check';
import Slide04 from './04-act-0-2-folder';
import Slide05 from './05-act-0-3-outputs';
import Slide06 from './06-act-0-4-baseline';
import Slide07 from './07-step0-validation';
import Slide07a from './07a-stitch-cover';
import Slide07b from './07b-stitch-basics';
import Slide07c from './07c-stitch-prompt-tips';
import Slide07c1 from './07c1-stitch-prompt-md';
import Slide07d from './07d-stitch-export';
import Slide07e from './07e-stitch-docs-placement';
import Slide07f from './07f-claude-md-reinforce';
import Slide08 from './08-step1-cover';
import Slide09 from './09-act-1-1-why';
import Slide10 from './10-act-1-2-core-features';
import Slide11 from './11-act-1-3-screen-derive';
import Slide12 from './12-act-1-4-first-screen';
import Slide13 from './13-act-1-5-task-cmd';
import Slide16 from './16-act-1-6-mapping-check';
import Slide17 from './17-step1-validation';
import Slide18 from './18-step2-cover';
import Slide19 from './19-act-2-0-github-mcp';
import Slide19a from './19a-step2-gh-cli-install';
import Slide19b from './19b-step2-gh-token-scope';
import Slide20 from './20-act-2-1-issue-cmd';
import Slide21 from './21-act-2-2-label';
import Slide22 from './22-step2-validation';
import Slide23 from './23-step3-cover';
import Slide24 from './24-act-3-1-prompt';
import Slide25 from './25-act-3-2-review';
import Slide26 from './26-act-3-3-export';
import Slide28 from './28-step3-validation';
import Slide29 from './29-step4-cover';
import Slide30 from './30-act-4-1-branch';
import Slide31 from './31-act-4-2-build-cmd';
import Slide32 from './32-act-4-3-result';
import Slide33 from './33-act-4-4-elements';
import Slide34 from './34-act-4-5-pr-cmd';
import Slide35 from './35-act-4-6-review-merge';
import Slide36 from './36-step4-validation';
import Slide37 from './37-step5-cover';
import Slide38 from './38-act-5-1-self-review';
import Slide39 from './39-act-5-2-memo';
import Slide40 from './40-step5-validation';
import Slide41 from './41-stepN-cover';
import Slide42 from './42-act-n-1-outputs';
import Slide43 from './43-act-n-2-cost';
import Slide44 from './44-act-n-3-retrospective';
import Slide45 from './45-stepN-validation';
import Slide46 from './46-assignment';
import Slide47 from './47-tips-1-cover';
import Slide48 from './48-tips-1-content';
import Slide49 from './49-tips-2-cover';
import Slide50 from './50-tips-2-content';
import Slide51 from './51-tips-3-cover';
import Slide52 from './52-tips-3-content';
import Slide53 from './53-tips-4-cover';
import Slide54 from './54-tips-4-content';
import Slide55 from './55-tips-5-cover';
import Slide56 from './56-tips-5-content';

export const S5_ACTIVITY_SLIDES = [
  // 도입
  { id: 'a1', component: Slide01 },

  // Step 0 — 환경 진단
  { id: 'a2', component: Slide02 },
  { id: 'a3', component: Slide03 },
  { id: 'a4', component: Slide04 },
  { id: 'a5', component: Slide05 },
  { id: 'a6', component: Slide06 },
  { id: 'a7', component: Slide07 },

  // Step 0.5 — Stitch 사전 학습 (학습 전용)
  { id: 'a7a', component: Slide07a },
  { id: 'a7b', component: Slide07b },
  { id: 'a7c', component: Slide07c },
  { id: 'a7d', component: Slide07d },

  // Step 1 — 화면 설계 완료 (도출 → prompt.md → Stitch 시안 → Export → docs 배치 → 지침 강화)
  { id: 'a8', component: Slide08 },                 // cover (화면 설계)
  { id: 'a9', component: Slide09 },                 // 활동 1-1 why
  { id: 'a10', component: Slide10 },                // 활동 1-2 core features
  { id: 'a11', component: Slide11 },                // 활동 1-3 screen derive
  { id: 'a12', component: Slide12 },                // 활동 1-4 first screen
  { id: 'a12a', component: Slide07c1 },             // 활동 1-5 prompt.md 작성
  { id: 'a24', component: Slide24 },                // 활동 1-6 Stitch 자연어 프롬프트
  { id: 'a25', component: Slide25 },                // 활동 1-7 시안 검토·수정
  { id: 'a26', component: Slide26 },                // 활동 1-8 Export
  { id: 'a27a', component: Slide07e },              // 활동 1-9 docs 배치 (screen-*.png)
  { id: 'a27b', component: Slide07f },              // 활동 1-10 claude.md 강화
  { id: 'a17', component: Slide17 },                // Step 1 validation

  // Step 2 — Task 설계
  { id: 'a18', component: Slide18 },                // cover (Task 설계)
  { id: 'a13', component: Slide13 },                // 활동 2-1 Task 명령
  { id: 'a16', component: Slide16 },                // 활동 2-2 화면-Task 매핑 검토
  { id: 'a22', component: Slide22 },                // Step 2 validation

  // Step 3 — GitHub 이슈 등록
  { id: 'a23', component: Slide23 },                // cover (GitHub 이슈)
  { id: 'a19', component: Slide19 },                // 활동 3-1 GitHub MCP
  { id: 'a19a', component: Slide19a },              // 활동 3-2 gh CLI
  { id: 'a19b', component: Slide19b },              // 활동 3-3 token 권한
  { id: 'a20', component: Slide20 },                // 활동 3-4 이슈 등록 명령
  { id: 'a21', component: Slide21 },                // 활동 3-5 라벨
  { id: 'a28', component: Slide28 },                // Step 3 validation

  // Step 4 — 빌드
  { id: 'a29', component: Slide29 },
  { id: 'a30', component: Slide30 },
  { id: 'a31', component: Slide31 },
  { id: 'a32', component: Slide32 },
  { id: 'a33', component: Slide33 },
  { id: 'a34', component: Slide34 },
  { id: 'a35', component: Slide35 },
  { id: 'a36', component: Slide36 },

  // Step 5 — 검토
  { id: 'a37', component: Slide37 },
  { id: 'a38', component: Slide38 },
  { id: 'a39', component: Slide39 },
  { id: 'a40', component: Slide40 },

  // StepN — 정리
  { id: 'a41', component: Slide41 },
  { id: 'a42', component: Slide42 },
  { id: 'a43', component: Slide43 },
  { id: 'a44', component: Slide44 },
  { id: 'a45', component: Slide45 },

  // Assignment
  { id: 'a46', component: Slide46 },

  // Tips
  { id: 'a47', component: Slide47 },
  { id: 'a48', component: Slide48 },
  { id: 'a49', component: Slide49 },
  { id: 'a50', component: Slide50 },
  { id: 'a51', component: Slide51 },
  { id: 'a52', component: Slide52 },
  { id: 'a53', component: Slide53 },
  { id: 'a54', component: Slide54 },
  { id: 'a55', component: Slide55 },
  { id: 'a56', component: Slide56 },
];
