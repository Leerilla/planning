// S6 Activity Slides Index (Phase 3 진행, 2026-05-14)
// T3.0: 실습 목차 (a1)
// T3.1a: Step 0 환경 진단 (a2-a4)
// T3.1b: Step 0 보강 (a5-a7)
// T3.2: Step 1 prd-reviewer 작성 (a8-a12)
// T3.3: Step 2 git-committer 작성 (a13-a16)
// T3.4: Step 3 hook 작성 (a17-a21)
// T3.5a: Step 4 빌드 명령 (a22-a25)
// T3.5b: Step 4 PR + 점검 (a26-a29)
// T3.6a: Step 5 패턴 복사 (a30-a33)
// T3.6b: Step 5 효과 측정 (a34-a36)
// T3.7: Step N 정리·회고 (a37-a41)
// T3.8: 과제 (a42)
// T3.9: Tips 5 카테고리 (a43-a52)

import Slide01 from './01-activity-toc';
import Slide02 from './02-step0-cover';
import Slide03 from './03-step0-env-check';
import Slide04 from './04-step0-artifact-check';
import Slide05 from './05-step0-check-cmd';
import Slide06 from './06-step0-token-baseline';
import Slide07 from './07-step0-validation';
import Slide08 from './08-step1-cover';
import Slide09 from './09-step1-mkdir';
import Slide10 from './10-step1-prd-reviewer-spec';
import Slide11 from './11-step1-call-test';
import Slide12 from './12-step1-validation';
import Slide13 from './13-step2-cover';
import Slide14 from './14-step2-git-committer-spec';
import Slide15 from './15-step2-call-test';
import Slide16 from './16-step2-validation';
import Slide17 from './17-step3-cover';
import Slide18 from './18-step3-hooks-json';
import Slide19 from './19-step3-post-test';
import Slide20 from './20-step3-stop-test';
import Slide21 from './21-step3-validation';
import Slide22 from './22-step4-cover';
import Slide23 from './23-step4-branch';
import Slide24 from './24-step4-prompt';
import Slide25 from './25-step4-automation-flow';
import Slide26 from './26-step4-pr';
import Slide27 from './27-step4-pattern-copy';
import Slide28 from './28-step4-screen1-check';
import Slide29 from './29-step4-validation';
import Slide30 from './30-step5-cover';
import Slide31 from './31-step5-branch';
import Slide32 from './32-step5-prompt';
import Slide33 from './33-step5-repeat-flow';
import Slide34 from './34-step5-screen2-check';
import Slide35 from './35-step5-automation-effect';
import Slide36 from './36-step5-validation';
import Slide37 from './37-step-n-cover';
import Slide38 from './38-step-n-outputs';
import Slide39 from './39-step-n-cost';
import Slide40 from './40-step-n-retro';
import Slide41 from './41-step-n-validation';
import Slide42 from './42-assignment';
import Slide43 from './43-tips-1-cover';
import Slide44 from './44-tips-1-content';
import Slide45 from './45-tips-2-cover';
import Slide46 from './46-tips-2-content';
import Slide47 from './47-tips-3-cover';
import Slide48 from './48-tips-3-content';
import Slide49 from './49-tips-4-cover';
import Slide50 from './50-tips-4-content';
import Slide51 from './51-tips-5-cover';
import Slide52 from './52-tips-5-content';

export const S6_ACTIVITY_SLIDES = [
  { id: 'a1', component: Slide01 },
  { id: 'a2', component: Slide02 },
  { id: 'a3', component: Slide03 },
  { id: 'a4', component: Slide04 },
  { id: 'a5', component: Slide05 },
  { id: 'a6', component: Slide06 },
  { id: 'a7', component: Slide07 },
  { id: 'a8', component: Slide08 },
  { id: 'a9', component: Slide09 },
  { id: 'a10', component: Slide10 },
  { id: 'a11', component: Slide11 },
  { id: 'a12', component: Slide12 },
  { id: 'a13', component: Slide13 },
  { id: 'a14', component: Slide14 },
  { id: 'a15', component: Slide15 },
  { id: 'a16', component: Slide16 },
  { id: 'a17', component: Slide17 },
  { id: 'a18', component: Slide18 },
  { id: 'a19', component: Slide19 },
  { id: 'a20', component: Slide20 },
  { id: 'a21', component: Slide21 },
  { id: 'a22', component: Slide22 },
  { id: 'a23', component: Slide23 },
  { id: 'a24', component: Slide24 },
  { id: 'a25', component: Slide25 },
  { id: 'a26', component: Slide26 },
  { id: 'a27', component: Slide27 },
  { id: 'a28', component: Slide28 },
  { id: 'a29', component: Slide29 },
  { id: 'a30', component: Slide30 },
  { id: 'a31', component: Slide31 },
  { id: 'a32', component: Slide32 },
  { id: 'a33', component: Slide33 },
  { id: 'a34', component: Slide34 },
  { id: 'a35', component: Slide35 },
  { id: 'a36', component: Slide36 },
  { id: 'a37', component: Slide37 },
  { id: 'a38', component: Slide38 },
  { id: 'a39', component: Slide39 },
  { id: 'a40', component: Slide40 },
  { id: 'a41', component: Slide41 },
  { id: 'a42', component: Slide42 },
  { id: 'a43', component: Slide43 },
  { id: 'a44', component: Slide44 },
  { id: 'a45', component: Slide45 },
  { id: 'a46', component: Slide46 },
  { id: 'a47', component: Slide47 },
  { id: 'a48', component: Slide48 },
  { id: 'a49', component: Slide49 },
  { id: 'a50', component: Slide50 },
  { id: 'a51', component: Slide51 },
  { id: 'a52', component: Slide52 },
];
