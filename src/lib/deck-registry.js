// S1 wrappers removed (T0.1) — rebuild via T1.1 ~ T3.32
import { S1_THEORY_SLIDES } from '@/components/slides/s1/theory';
import { S1_ACTIVITY_SLIDES } from '@/components/slides/s1/activity';
import { S2_THEORY_SLIDES } from '@/components/slides/s2/theory';
import { S2_ACTIVITY_SLIDES } from '@/components/slides/s2/activity';
import { S3_THEORY_SLIDES } from '@/components/slides/s3/theory';
import { S3_ACTIVITY_SLIDES } from '@/components/slides/s3/activity';
import { S4_THEORY_SLIDES } from '@/components/slides/s4/theory';
import { S4_ACTIVITY_SLIDES } from '@/components/slides/s4/activity';
import { S5_THEORY_SLIDES } from '@/components/slides/s5/theory';
import { S5_ACTIVITY_SLIDES } from '@/components/slides/s5/activity';
import { S6_THEORY_SLIDES } from '@/components/slides/s6/theory';
import { S6_ACTIVITY_SLIDES } from '@/components/slides/s6/activity';
import { S7_THEORY_SLIDES } from '@/components/slides/s7/theory';
import { S7_ACTIVITY_SLIDES } from '@/components/slides/s7/activity';
import { S8_THEORY_SLIDES } from '@/components/slides/s8/theory';
import { S8_ACTIVITY_SLIDES } from '@/components/slides/s8/activity';
import { S9_THEORY_SLIDES } from '@/components/slides/s9/theory';
import { S9_ACTIVITY_SLIDES } from '@/components/slides/s9/activity';

const decks = {
  s1: {
    id: 's1',
    title: '기획의 본질과 문제 발견',
    subtitle: '누구의 어떤 문제를 어떻게 풀 것인가',
    decks: {
      theory: { id: 'theory', title: '이론', slides: S1_THEORY_SLIDES },
      activity: { id: 'activity', title: '실습', slides: S1_ACTIVITY_SLIDES },
    },
  },
  s2: {
    id: 's2',
    title: '고객 검증의 두 축',
    subtitle: '능동과 수동으로 깊이와 폭 동시 확보',
    decks: {
      theory: { id: 'theory', title: '이론', slides: S2_THEORY_SLIDES },
      activity: { id: 'activity', title: '실습', slides: S2_ACTIVITY_SLIDES },
    },
  },
  s3: {
    id: 's3',
    title: '데이터를 PRD로 정제하기',
    subtitle: 'NotebookLM으로 분석하고 Manyfast로 정제한다',
    decks: {
      theory: { id: 'theory', title: '이론', slides: S3_THEORY_SLIDES },
      activity: { id: 'activity', title: '실습', slides: S3_ACTIVITY_SLIDES },
    },
  },
  s4: {
    id: 's4',
    title: 'PRD를 에이전트에게 전달하기',
    subtitle: 'CLAUDE.md는 프로젝트의 헌법 — OODA 루프와 Permissions',
    decks: {
      theory: { id: 'theory', title: '이론', slides: S4_THEORY_SLIDES },
      activity: { id: 'activity', title: '실습', slides: S4_ACTIVITY_SLIDES },
    },
  },
  s5: {
    id: 's5',
    title: '수직 슬라이스와 위임 3원칙',
    subtitle: '한 화면을 통째로 완성한다 — Stitch와 동작의 정의',
    decks: {
      theory: { id: 'theory', title: '이론', slides: S5_THEORY_SLIDES },
      activity: { id: 'activity', title: '실습', slides: S5_ACTIVITY_SLIDES },
    },
  },
  s6: {
    id: 's6',
    title: '확장과 자동화',
    subtitle: 'sub-agent와 hooks — 자동 검증과 자동 커밋',
    decks: {
      theory: { id: 'theory', title: '이론', slides: S6_THEORY_SLIDES },
      activity: { id: 'activity', title: '실습', slides: S6_ACTIVITY_SLIDES },
    },
  },
  s7: {
    id: 's7',
    title: '통합 디버깅과 E2E 테스트',
    subtitle: 'Playwright MCP와 자율 디버깅 3원칙 — 시나리오 검증 루프',
    decks: {
      theory: { id: 'theory', title: '이론', slides: S7_THEORY_SLIDES },
      activity: { id: 'activity', title: '실습', slides: S7_ACTIVITY_SLIDES },
    },
  },
  s8: {
    id: 's8',
    title: '풀스택 배포와 분석 셋업',
    subtitle: 'Vercel·Railway·CORS·분석 도구 3종 (Clarity / Sentry / 이벤트 추적)',
    decks: {
      theory: { id: 'theory', title: '이론', slides: S8_THEORY_SLIDES },
      activity: { id: 'activity', title: '실습', slides: S8_ACTIVITY_SLIDES },
    },
  },
  s9: {
    id: 's9',
    title: '노출과 재피드백',
    subtitle: '검증된 MVP를 노출하고 4종 데이터로 살아있는 페르소나로 진화 — Pivot · Persevere · Kill',
    decks: {
      theory: { id: 'theory', title: '이론', slides: S9_THEORY_SLIDES },
      activity: { id: 'activity', title: '실습', slides: S9_ACTIVITY_SLIDES },
    },
  },
};

export function getSession(sessionId) {
  return decks[sessionId] ?? null;
}

export function getDeck(sessionId, deckId) {
  return decks[sessionId]?.decks?.[deckId] ?? null;
}

export function listDecks(sessionId) {
  const session = decks[sessionId];
  if (!session) return [];
  return Object.values(session.decks);
}

export function listSessions() {
  return Object.values(decks);
}
