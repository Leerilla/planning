// 풀사이클 메타포 — 9세션 산출물 사슬
// 각 세션 출력이 다음 세션 입력. 21시간 → 1배포의 동적 시각화

export const FLOW_STAGES = [
  { id: 'plan', num: '01', sessions: 'S1 · S2', title: '기획 + 검증' },
  { id: 'spec', num: '02', sessions: 'S3 · S4', title: 'PRD + 컨텍스트' },
  { id: 'build', num: '03', sessions: 'S5 · S6 · S7', title: '개발 + 테스트' },
  { id: 'ship', num: '04', sessions: 'S8 · S9', title: '배포 + 실유저' },
];

export const FLOW_NODES = [
  { num: 1, session: 'S1', stage: 'plan', title: '1차 가설', desc: '문제 한 줄 + 페르소나 5축 + 검증 가능 가설' },
  { num: 2, session: 'S2', stage: 'plan', title: '검증된 페인', desc: '능동·수동 두 축으로 시장 응답을 받은 가설' },
  { num: 3, session: 'S3', stage: 'spec', title: 'PRD', desc: '흩어진 데이터를 NotebookLM·Manyfast로 정제' },
  { num: 4, session: 'S4', stage: 'spec', title: 'CLAUDE.md', desc: '프로젝트 헌법 — 에이전트와의 계약서' },
  { num: 5, session: 'S5', stage: 'build', title: '수직 슬라이스', desc: '한 화면이 끝까지 동작하는 첫 증거' },
  { num: 6, session: 'S6', stage: 'build', title: 'sub-agent + hooks', desc: '반복을 도구가 대신 — 자동화된 검증' },
  { num: 7, session: 'S7', stage: 'build', title: 'E2E 통과', desc: 'PRD대로 동작한다는 테스트의 증명' },
  { num: 8, session: 'S8', stage: 'ship', title: '배포된 사이트', desc: 'Vercel + Sentry + Microsoft Clarity' },
  { num: 9, session: 'S9', stage: 'ship', title: '실유저 피드백', desc: '실제 사람이 쓰고 답을 받아 노션 소개서까지' },
];
