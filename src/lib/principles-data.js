// Source: reference/index.html L1351-1374 (5대 운영 원칙)

export const PRINCIPLES = [
  {
    num: '01',
    title: '출처 검증 우선',
    desc: 'AI 답변은 학생이 직접 검증. 그럴듯한 통계를 의심합니다.',
  },
  {
    num: '02',
    title: '토큰 절약',
    desc: 'Claude Code는 코드 변경 시점에만. /cost 일관 측정.',
  },
  {
    num: '03',
    title: '세션은 트리거',
    desc: '자료가 세션 시간을 넘어서는 것은 정상. 매뉴얼로 활용합니다.',
  },
  {
    num: '04',
    title: 'MVP 자율 조절',
    desc: '핵심 기능은 1~3개로. 욕심 부리면 완주가 안 됩니다.',
  },
  {
    num: '05',
    title: '자가 해결',
    desc: '막히면 AI로. 자율 디버깅 3원칙으로 풀어냅니다.',
  },
];

export const JOURNEY_STAGES = [
  {
    num: '01',
    sessions: 'S1 · S2',
    title: '기획 + 검증',
    desc: '누구의 어떤 문제? 능동·수동 두 축으로 시장에서 시험합니다.',
  },
  {
    num: '02',
    sessions: 'S3 · S4',
    title: 'PRD + 컨텍스트',
    desc: '흩어진 데이터를 PRD로. CLAUDE.md로 에이전트와 계약합니다.',
  },
  {
    num: '03',
    sessions: 'S5 · S6 · S7',
    title: '개발 + 테스트',
    desc: '수직 슬라이스 → 확장 → E2E. PRD대로 동작한다는 증거를 만듭니다.',
  },
  {
    num: '04',
    sessions: 'S8 · S9',
    title: '배포 + 실유저',
    desc: 'Vercel·Railway 배포. 실제 사람이 쓰고 답을 받아 개선합니다.',
  },
];

export const HERO_META = [
  { num: '9', label: '세션' },
  { num: '21h', label: '풀사이클' },
  { num: '12', label: 'AI 도구' },
  { num: '1', label: '실제 배포' },
];
