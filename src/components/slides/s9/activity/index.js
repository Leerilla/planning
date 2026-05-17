// S9 Activity Slides Index (Phase 3 T3.0 + T3.1 + T3.2 + T3.3 + T3.4 + T3.5 + T3.6 + T3.7 δ' 빌드 완료, 2026-05-17)
// T3.0: a1 실습 목차 (자동 D-032)
// T3.1: Step 0 환경 진단 (a2-a7, 6장)
//        a2 Step 0 Cover (자동 D-033) / a3 환경확인 / a4 산출물 7행 2-col / a5 NotebookLM재오픈 / a6 /cost / a7 검증
// T3.2: Step 1 노출 발송 (a8-a14, 7장)
//        a8 Step 1 Cover (자동 D-033) / a9 발송대상3단계 / a10 카피점검 / a11 응답질문 / a12 메일발송 / a13 발송메모 / a14 검증
// T3.3: Step 2 응답 대기 운영 (a15-a19, 5장)
//        a15 Step 2 Cover (자동 D-033) / a16 추가스크래핑 / a17 응답모니터링 / a18 Clarity모니터링 / a19 검증
// T3.4: Step 3 분석 도구 해석 (a20-a27, 8장)
//        a20 Step 3 Cover (자동 D-033) / a21 Clarity세션리플레이 / a22 Clarity히트맵 / a23 Sentry에러패턴 / a24 이벤트funnel / a25 PRD가설매칭 / a26 분석메모 / a27 검증
// T3.5: Step 4 NotebookLM 종합 (a28-a33, 6장)
//        a28 Step 4 Cover (자동 D-033) / a29 자료업로드 / a30 교차분석질문 / a31 인용검증 / a32 종합메모 / a33 검증
// T3.6: Step 5 페르소나·PRD 갱신 (a34-a39, 6장)
//        a34 Step 5 Cover (자동 D-033) / a35 persona명령 / a36 갱신검토표 / a37 prd명령 / a38 자동커밋 / a39 검증
// T3.7: Step 6 다음 사이클 결정 + 회고 (a40-a46, 7장)
//        a40 Step 6 Cover (자동 D-033) / a41 3갈래결정명령 / a42 본인판단quote+D-054 / a43 학습회고+D-054 / a44 좋은답vs나쁜답표 / a45 /cost최종+aside / a46 검증
// T3.8: Step N 산출물 정리·종료 + 과제 + Tips (a47-a55, 9장 — **S9 sprint 최종**)
//        a47 Step N Cover (자동 D-033) / a48 N-1 결과정리 2-col표 / a49 N-2 학습종착점 5체크 / a50 N-3 학습종료KeyMessage / a51 Step N검증 / a52 과제표 / a53 Tips Cover (자동 D-033) / a54 Tips 1/2 (5 bullets) / a55 Tips 2/2 (5 bullets + final aside — **마지막**)

import Slide01 from './01-toc';
import Slide02 from './02-step0-cover';
import Slide03 from './03-step0-env-check';
import Slide04 from './04-step0-data8-check';
import Slide05 from './05-step0-notebooklm-reopen';
import Slide06 from './06-step0-cost-baseline';
import Slide07 from './07-step0-validation';
import Slide08 from './08-step1-cover';
import Slide09 from './09-step1-target';
import Slide10 from './10-step1-copy-check';
import Slide11 from './11-step1-response-questions';
import Slide12 from './12-step1-send-mail';
import Slide13 from './13-step1-dispatch-memo';
import Slide14 from './14-step1-validation';
import Slide15 from './15-step2-cover';
import Slide16 from './16-step2-scraping';
import Slide17 from './17-step2-response-monitor';
import Slide18 from './18-step2-clarity-monitor';
import Slide19 from './19-step2-validation';
import Slide20 from './20-step3-cover';
import Slide21 from './21-step3-clarity-session';
import Slide22 from './22-step3-clarity-heatmap';
import Slide23 from './23-step3-sentry-pattern';
import Slide24 from './24-step3-event-funnel';
import Slide25 from './25-step3-prd-match';
import Slide26 from './26-step3-analysis-memo';
import Slide27 from './27-step3-validation';
import Slide28 from './28-step4-cover';
import Slide29 from './29-step4-upload';
import Slide30 from './30-step4-questions';
import Slide31 from './31-step4-citation';
import Slide32 from './32-step4-synthesis-memo';
import Slide33 from './33-step4-validation';
import Slide34 from './34-step5-cover';
import Slide35 from './35-step5-persona-update';
import Slide36 from './36-step5-update-review';
import Slide37 from './37-step5-prd-update';
import Slide38 from './38-step5-auto-commit';
import Slide39 from './39-step5-validation';
import Slide40 from './40-step6-cover';
import Slide41 from './41-step6-decision-command';
import Slide42 from './42-step6-own-judgment';
import Slide43 from './43-step6-retrospective';
import Slide44 from './44-step6-good-bad-answer';
import Slide45 from './45-step6-cost-final';
import Slide46 from './46-step6-validation';
import Slide47 from './47-stepN-cover';
import Slide48 from './48-stepN-results';
import Slide49 from './49-stepN-end-check';
import Slide50 from './50-stepN-end';
import Slide51 from './51-stepN-validation';
import Slide52 from './52-assignment';
import Slide53 from './53-tips-cover';
import Slide54 from './54-tips-content-1';
import Slide55 from './55-tips-content-2';

export const S9_ACTIVITY_SLIDES = [
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
];
