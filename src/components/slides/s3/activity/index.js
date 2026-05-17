// S3 Activity Slides Index — 41장 (Phase 3 완료, 2026-05-12)
// Step 0~4 + Step N / HIGH-1 폐기 (2-1~2-5 5단계 확정)
// D-043 planning_project / D-044 student-project-reference.md SSOT 적용

import Slide01 from './01-activity-toc';
import Slide02 from './02-step0-cover';
import Slide03 from './03-act-0-1-env-check';
import Slide04 from './04-act-0-2-folder';
import Slide05 from './05-act-0-3-token-baseline';
import Slide06 from './06-act-0-4-accounts';
import Slide07 from './07-step0-validation';
import Slide08 from './08-step1-cover';
import Slide09 from './09-act-1-1-notebook-create';
import Slide10 from './10-act-1-2-upload';
import Slide11 from './11-act-1-3-painpoints';
import Slide12 from './12-act-1-4-cite-verify';
import Slide13 from './13-act-1-5-current-alt';
import Slide14 from './14-step1-validation';
import Slide15 from './15-step2-cover';
import Slide16 from './16-act-2-1-project-create';
import Slide17 from './17-act-2-2-prd-gen';
import Slide18 from './18-act-2-3-check-five';
import Slide19 from './19-act-2-4-fix-vague';
import Slide20 from './20-act-2-5-narrow';
import Slide21 from './21-step2-validation';
import Slide22 from './22-step3-cover';
import Slide23 from './23-act-3-1-export';
import Slide24 from './24-act-3-2-move-folder';
import Slide25 from './25-act-3-3-cat';
import Slide26 from './26-act-3-4-five-checks';
import Slide27 from './27-step3-validation';
import Slide28 from './28-step4-cover';
import Slide29 from './29-act-4-1-folder';
import Slide30 from './30-act-4-2-organize';
import Slide31 from './31-act-4-2-persona-md';
import Slide32 from './32-act-4-2-painpoints-md';
import Slide33 from './33-act-4-3-readme';
import Slide34 from './34-act-4-4-claude-md';
import Slide35 from './35-act-4-5-final-check';
import Slide36 from './36-step4-validation';
import Slide37 from './37-stepN-cover';
import Slide38 from './38-act-N-1-summary';
import Slide39 from './39-act-N-2-cost';
import Slide40 from './40-act-N-3-retrospect';
import Slide41 from './41-stepN-validation';

export const S3_ACTIVITY_SLIDES = [
  { id: 1, title: '실습 목차', component: Slide01 },
  { id: 2, title: 'Step 0 환경 진단 — 섹션 표지', component: Slide02 },
  { id: 3, title: '0-1 환경 확인 명령 (node·claude)', component: Slide03 },
  { id: 4, title: '0-2 작업 폴더 생성 (planning_project)', component: Slide04 },
  { id: 5, title: '0-3 토큰 베이스라인 (/cost)', component: Slide05 },
  { id: 6, title: '0-4 도구 계정 점검 (NotebookLM/Manyfast)', component: Slide06 },
  { id: 7, title: 'Step 0 검증 기준', component: Slide07 },
  { id: 8, title: 'Step 1 NotebookLM — 섹션 표지', component: Slide08 },
  { id: 9, title: '1-1 노트북 생성 (4 STEP)', component: Slide09 },
  { id: 10, title: '1-2 데이터 업로드 + 시드 6 파일', component: Slide10 },
  { id: 11, title: '1-3 페인포인트 추출 + 시드 6 결과', component: Slide11 },
  { id: 12, title: '1-4 인용 검증 (4 STEP)', component: Slide12 },
  { id: 13, title: '1-5 현재 대안 + 시드 6 3개', component: Slide13 },
  { id: 14, title: 'Step 1 검증 기준', component: Slide14 },
  { id: 15, title: 'Step 2 Manyfast — 섹션 표지', component: Slide15 },
  { id: 16, title: '2-1 프로젝트 생성 (6 STEP)', component: Slide16 },
  { id: 17, title: '2-2 PRD 자동 생성 + 시드 6 입력', component: Slide17 },
  { id: 18, title: '2-3 5요소 확인', component: Slide18 },
  { id: 19, title: '2-4 모호한 표현 수정 + 시드 6 Before/After', component: Slide19 },
  { id: 20, title: '2-5 핵심 기능 좁히기 + 시드 6 3개', component: Slide20 },
  { id: 21, title: 'Step 2 검증 기준', component: Slide21 },
  { id: 22, title: 'Step 3 prd.md export — 섹션 표지', component: Slide22 },
  { id: 23, title: '3-1 Export 메뉴 (5 STEP)', component: Slide23 },
  { id: 24, title: '3-2 작업 폴더로 이동', component: Slide24 },
  { id: 25, title: '3-3 파일 내용 확인', component: Slide25 },
  { id: 26, title: '3-4 PRD 검토 5개 점검', component: Slide26 },
  { id: 27, title: 'Step 3 검증 기준', component: Slide27 },
  { id: 28, title: 'Step 4 빌드 환경 — 섹션 표지', component: Slide28 },
  { id: 29, title: '4-1 표준 폴더 + 생성 명령', component: Slide29 },
  { id: 30, title: '4-2 페르소나·페인포인트 정리 (3 STEP)', component: Slide30 },
  { id: 31, title: '4-2 시드 6 persona.md', component: Slide31 },
  { id: 32, title: '4-2 시드 6 painpoints.md', component: Slide32 },
  { id: 33, title: '4-3 README.md 양식 + 시드 6', component: Slide33 },
  { id: 34, title: '4-4 .claude/CLAUDE.md 양식', component: Slide34 },
  { id: 35, title: '4-5 폴더 구조 최종 점검', component: Slide35 },
  { id: 36, title: 'Step 4 검증 기준', component: Slide36 },
  { id: 37, title: 'Step N 정리·회고 — 섹션 표지', component: Slide37 },
  { id: 38, title: 'N-1 결과 정리 (산출물 4개)', component: Slide38 },
  { id: 39, title: 'N-2 /cost 비교', component: Slide39 },
  { id: 40, title: 'N-3 회고 좋은 답 vs 나쁜 답', component: Slide40 },
  { id: 41, title: 'Step N 검증 기준', component: Slide41 },
];

export default S3_ACTIVITY_SLIDES;
