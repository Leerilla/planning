// S1 Activity Slides Index
// 구조: 실습 목차 → ### 섹션 표지 → #### 세부 활동 콘텐츠

import Slide01 from './01-activity-toc';
import Slide02 from './02-seeds-cover';
import Slide03 from './03-seeds-list';
import Slide04 from './04-seeds-guide';
import Slide05 from './05-bundle1-cover';
import Slide06 from './06-act-1-1-idea-selection';
import Slide07 from './07-act-1-2-five-whys';
import Slide08 from './08-act-1-3-ai-research';
import Slide09 from './09-act-1-4-source-verify';
import Slide10 from './10-bundle1-validation';
import Slide11 from './11-bundle2-cover';
import Slide12 from './12-act-2-1-problem-def';
import Slide13 from './13-act-2-2-persona';
import Slide14 from './14-act-2-3-hypotheses';
import Slide15 from './15-bundle2-validation';
import Slide16 from './16-bundle3-cover';
import Slide17 from './17-act-3-1-declaration';
import Slide18 from './18-act-3-2-retrospective';
import Slide19 from './19-act-3-3-next-entry';
import Slide20 from './20-bundle3-validation';
import Slide21 from './21-assignment';
import Slide22 from './22-tips';

export const S1_ACTIVITY_SLIDES = [
  { id: 1, title: '실습 목차', component: Slide01 },
  { id: 2, title: '시드 아이디어 6개 — 섹션 표지', component: Slide02 },
  { id: 3, title: '시드 목록 (6개)', component: Slide03 },
  { id: 4, title: '시드 활용 가이드', component: Slide04 },
  { id: 5, title: '활동 묶음 1 — 섹션 표지', component: Slide05 },
  { id: 6, title: '활동 1-1 아이디어 선택', component: Slide06 },
  { id: 7, title: '활동 1-2 5 Whys', component: Slide07 },
  { id: 8, title: '활동 1-3 AI 1차 리서치', component: Slide08 },
  { id: 9, title: '활동 1-4 출처 검증과 거짓 메모', component: Slide09 },
  { id: 10, title: '활동 묶음 1 검증 기준', component: Slide10 },
  { id: 11, title: '활동 묶음 2 — 섹션 표지', component: Slide11 },
  { id: 12, title: '활동 2-1 문제 정의', component: Slide12 },
  { id: 13, title: '활동 2-2 가설 페르소나', component: Slide13 },
  { id: 14, title: '활동 2-3 핵심 가설 3개', component: Slide14 },
  { id: 15, title: '활동 묶음 2 검증 기준', component: Slide15 },
  { id: 16, title: '활동 묶음 3 — 섹션 표지', component: Slide16 },
  { id: 17, title: '활동 3-1 옆 작업자에게 선언', component: Slide17 },
  { id: 18, title: '활동 3-2 회고 3개 질문', component: Slide18 },
  { id: 19, title: '활동 3-3 다음 단계 진입 점검', component: Slide19 },
  { id: 20, title: '활동 묶음 3 검증 기준', component: Slide20 },
  { id: 21, title: '과제 안내', component: Slide21 },
  { id: 22, title: 'Tips · 함정과 처방', component: Slide22 },
];

export default S1_ACTIVITY_SLIDES;
