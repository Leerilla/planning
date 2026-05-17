// S8 Activity Slides Index (Phase 3 진행, 2026-05-17)
// T3.0: 실습 목차 (a1, 자동)
// T3.1: Step 0 환경 진단 + 리포 구조 (a2-a8)
// T3.2: Step 1 Railway BE 배포 (a9-a18)
// T3.3: Step 2 Vercel FE 배포 (a19-a25)
// T3.4: Step 3 CORS 해결 (a26-a33)
// T3.5: Step 4 분석 도구 3종 셋업 (a34-a42)
// T3.6: Step N 정리·회고 (a43-a47)
// T3.7: 과제 (a48)
// T3.8: Tips 7 카테고리 (a49-a62)

import Slide01 from './01-activity-toc';
import Slide02 from './02-step0-cover';
import Slide03 from './03-step0-env-check';
import Slide04 from './04-step0-data7-check';
import Slide05 from './05-step0-repo-structure';
import Slide06 from './06-step0-be-port';
import Slide07 from './07-step0-gitignore';
import Slide08 from './08-step0-validation';
import Slide09 from './09-step1-cover';
import Slide10 from './10-step1-signup';
import Slide11 from './11-step1-new-project';
import Slide12 from './12-step1-root-dir';
import Slide13 from './13-step1-build-cmd';
import Slide14 from './14-step1-env-vars';
import Slide15 from './15-step1-generate-domain';
import Slide16 from './16-step1-health';
import Slide17 from './17-step1-build-failure';
import Slide18 from './18-step1-validation';
import Slide19 from './19-step2-cover';
import Slide20 from './20-step2-signup';
import Slide21 from './21-step2-import';
import Slide22 from './22-step2-env-vars';
import Slide23 from './23-step2-deploy';
import Slide24 from './24-step2-cors-expected';
import Slide25 from './25-step2-validation';
import Slide26 from './26-step3-cover';
import Slide27 from './27-step3-error-collect';
import Slide28 from './28-step3-error-structure';
import Slide29 from './29-step3-debug-command';
import Slide30 from './30-step3-principles';
import Slide31 from './31-step3-auto-redeploy';
import Slide32 from './32-step3-verify';
import Slide33 from './33-step3-validation';
import Slide34 from './34-step4-cover';
import Slide35 from './35-step4-clarity-signup';
import Slide36 from './36-step4-clarity-insert';
import Slide37 from './37-step4-sentry-signup';
import Slide38 from './38-step4-sentry-sdk';
import Slide39 from './39-step4-events-decide';
import Slide40 from './40-step4-events-insert';
import Slide41 from './41-step4-scenario-run';
import Slide42 from './42-step4-validation';
import Slide43 from './43-stepn-cover';
import Slide44 from './44-stepn-outputs';
import Slide45 from './45-stepn-cost';
import Slide46 from './46-stepn-retro';
import Slide47 from './47-stepn-validation';
import Slide48 from './48-assignment';
import Slide49 from './49-tips-1-cover';
import Slide50 from './50-tips-1-content';
import Slide51 from './51-tips-2-cover';
import Slide52 from './52-tips-2-content';
import Slide53 from './53-tips-3-cover';
import Slide54 from './54-tips-3-content';
import Slide55 from './55-tips-4-cover';
import Slide56 from './56-tips-4-content';
import Slide57 from './57-tips-5-cover';
import Slide58 from './58-tips-5-content';
import Slide59 from './59-tips-6-cover';
import Slide60 from './60-tips-6-content';
import Slide61 from './61-tips-7-cover';
import Slide62 from './62-tips-7-content';

export const S8_ACTIVITY_SLIDES = [
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
  { id: 'a53', component: Slide53 },
  { id: 'a54', component: Slide54 },
  { id: 'a55', component: Slide55 },
  { id: 'a56', component: Slide56 },
  { id: 'a57', component: Slide57 },
  { id: 'a58', component: Slide58 },
  { id: 'a59', component: Slide59 },
  { id: 'a60', component: Slide60 },
  { id: 'a61', component: Slide61 },
  { id: 'a62', component: Slide62 },
];
