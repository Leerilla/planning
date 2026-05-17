// S6 slides index — 모든 세션 슬라이드 export
// 형식: { id: 'sN' | 'aN', component: Component }

import S6ActivityStep3Cover from './17-step3-cover';
import S6ActivityStep3HooksJson from './18-step3-hooks-json';
import S6ActivityStep3PostTest from './19-step3-post-test';
import S6ActivityStep3StopTest from './20-step3-stop-test';
import S6ActivityStep3Validation from './21-step3-validation';

// 기존 theory 슬라이드들 (S6 theory 구성된 부분만 포함)
import S6TheoryC3Matcher from './43-c3-matcher';
import S6TheoryC3Antipattern from './45-c3-antipattern';
import S6TheoryC3Timeout from './44-c3-timeout';
import S6TheoryC3Terms from './46-c3-terms';

export const slides = [
  // Theory (s1-s57, 현재 미완) — 필요 시 추가
  // { id: 's1', component: S6SessionCover },
  // ... 이론 슬라이드는 T1.4 완료 후 추가

  // Activity (a1-a52)
  // a17-a21: Step 3
  { id: 'a17', component: S6ActivityStep3Cover },
  { id: 'a18', component: S6ActivityStep3HooksJson },
  { id: 'a19', component: S6ActivityStep3PostTest },
  { id: 'a20', component: S6ActivityStep3StopTest },
  { id: 'a21', component: S6ActivityStep3Validation },

  // Theory samples (C3 일부만)
  { id: 's43', component: S6TheoryC3Matcher },
  { id: 's44', component: S6TheoryC3Timeout },
  { id: 's45', component: S6TheoryC3Antipattern },
  { id: 's46', component: S6TheoryC3Terms },
];

export default slides;
