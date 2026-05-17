// S2 Activity Slides Index
// 구조: 실습 목차 → ### 활동 묶음 표지 + 활동 슬라이드
// 2026-05-12 — T3.2 재기획 (s10 셋업 / s11 신규 자연어 흐름 / s12~s14 시프트)

import Slide01 from './01-activity-toc';
import Slide02 from './02-bundle1-cover';
import Slide03 from './03-act-1-1-channel';
import Slide04 from './04-act-1-2-meta-copy';
import Slide05 from './05-act-1-3-tone';
import Slide06 from './06-act-1-4-review';
import Slide07 from './07-bundle1-validation';
import Slide08 from './08-bundle2-cover';
import Slide09 from './09-act-2-1-community';
import Slide10 from './10-act-2-2-playwright';
import Slide11 from './11-act-2-2b-research-flow';
import Slide12 from './12-act-2-3-signal-memo';
import Slide13 from './13-act-2-4-seed5-example';
import Slide14 from './14-bundle2-validation';
import Slide15 from './15-bundle3-cover';
import Slide16 from './16-act-3-1-channel-decision';
import Slide17 from './17-act-3-2-retrospective';
import Slide18 from './18-act-3-3-next-assets';
import Slide19 from './19-act-3-4-data-accumulation';
import Slide20 from './20-bundle3-validation';
import Slide21 from './21-assignment';
import Slide22 from './22-tips';

export const S2_ACTIVITY_SLIDES = [
  { id: 1, title: '실습 목차', component: Slide01 },
  { id: 2, title: '활동 묶음 1 — 능동 검증 카피 섹션 표지', component: Slide02 },
  { id: 3, title: '활동 1-1 채널 선택', component: Slide03 },
  { id: 4, title: '활동 1-2 메타 프롬프팅 카피 작성', component: Slide04 },
  { id: 5, title: '활동 1-3 본인 톤으로 다듬기', component: Slide05 },
  { id: 6, title: '활동 1-4 메타 결과 검토 4 기준', component: Slide06 },
  { id: 7, title: '활동 묶음 1 검증/성공 기준', component: Slide07 },
  { id: 8, title: '활동 묶음 2 — 수동 검증 Playwright 섹션 표지', component: Slide08 },
  { id: 9, title: '활동 2-1 페르소나 커뮤니티 결정', component: Slide09 },
  { id: 10, title: '활동 2-2 Playwright MCP 셋업 (3 STEP)', component: Slide10 },
  { id: 11, title: '활동 2-2 자연어 리서치 흐름', component: Slide11 },
  { id: 12, title: '활동 2-3 페인포인트 신호 메모', component: Slide12 },
  { id: 13, title: '활동 2-4 시드 5 적용 예시', component: Slide13 },
  { id: 14, title: '활동 묶음 2 검증/성공 기준', component: Slide14 },
  { id: 15, title: '활동 묶음 3 — 발송 채널 결정과 회고 섹션 표지', component: Slide15 },
  { id: 16, title: '활동 3-1 발송 채널 결정', component: Slide16 },
  { id: 17, title: '활동 3-2 회고 3 질문', component: Slide17 },
  { id: 18, title: '활동 3-3 다음 단계 자산 3개', component: Slide18 },
  { id: 19, title: '활동 3-4 데이터 누적 운영', component: Slide19 },
  { id: 20, title: '활동 묶음 3 검증/성공 기준', component: Slide20 },
  { id: 21, title: '과제 안내', component: Slide21 },
  { id: 22, title: 'Tips · 함정과 처방', component: Slide22 },
];

export default S2_ACTIVITY_SLIDES;
