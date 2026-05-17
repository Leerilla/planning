import Cover from '../patterns/Cover';
import KeyMessage from '../patterns/KeyMessage';
import ThreeCards from '../patterns/ThreeCards';
import Comparison from '../patterns/Comparison';
import SectionDivider from '../patterns/SectionDivider';
import Definition from '../patterns/Definition';
import Warning from '../patterns/Warning';
import StepGuide from '../patterns/StepGuide';
import Outro from '../patterns/Outro';

const demoSlides = [
  {
    id: 1,
    title: 'Cover',
    component: Cover,
    props: {
      number: 'DEMO',
      title: '슬라이드 인프라 검증',
      subtitle: '엔진 + 프레임 + 11개 패턴이 정상 동작하는지 확인하는 더미 덱',
      meta: { date: '2026-05-07', duration: '~5min', deck: '데모' },
    },
  },
  {
    id: 2,
    title: 'KeyMessage',
    component: KeyMessage,
    props: {
      eyebrow: 'CORE BELIEF',
      message: 'AI는 기획을 대신하지 않는다.',
      highlight: '대신하지 않는다',
      footer: 'KeyMessage 패턴 — clamp(48px, 7vw, 96px) + 노란 하이라이트',
    },
  },
  {
    id: 3,
    title: 'SectionDivider',
    component: SectionDivider,
    props: {
      number: 1,
      title: '인프라 컴포넌트 카탈로그',
      subtitle: '다음 슬라이드부터 패턴을 차례로 보여줍니다.',
    },
  },
  {
    id: 4,
    title: 'Definition',
    component: Definition,
    props: {
      term: '슬라이드 인프라',
      definition: '9개 세션 모두 공통으로 재사용되는 엔진 + 프레임 + 패턴 컴포넌트의 묶음.',
      note: '세션별 콘텐츠와 무관하게 한 번 만들어 두면 모든 세션에서 동일하게 동작한다.',
    },
  },
  {
    id: 5,
    title: 'ThreeCards',
    component: ThreeCards,
    props: {
      title: '인프라의 3요소',
      cards: [
        { num: '01', title: '엔진', desc: '키보드/스와이프/URL hash/lazy loading' },
        { num: '02', title: '프레임', desc: '16:9 캔버스 + 카운터 + 메타' },
        { num: '03', title: '패턴', desc: '11개의 시각 템플릿 (Cover, KeyMessage, ...)' },
      ],
      emphasized: 2,
    },
  },
  {
    id: 6,
    title: 'Comparison',
    component: Comparison,
    props: {
      title: '인라인 컬러 vs CSS 변수',
      bad: {
        label: '인라인 16진값',
        statement: 'bg-[#2563EB] / style={{ color: "#FFD60A" }}',
        points: [
          '디자인 토큰 변경 시 일괄 반영 불가',
          '다크모드/테마 전환 어려움',
          'CLAUDE.md 원칙 4 위반',
        ],
      },
      good: {
        label: 'CSS 변수',
        statement: 'bg-accent / className="bg-[var(--highlight)]"',
        points: [
          'globals.css 한 곳만 수정하면 전체 반영',
          '디자인 시스템 단일 진실 원천',
          'design-reviewer 자동 검증 통과',
        ],
      },
    },
  },
  {
    id: 7,
    title: 'Warning',
    component: Warning,
    props: {
      level: '함정 01',
      title: 'lecture.md를 그대로 페이지에 렌더링하기',
      description:
        'D-003에서 명시적으로 폐기한 패턴. 학생은 lecture.md 원문을 직접 보지 않고, slide-curator가 큐레이션한 슬라이드만 봅니다.',
      avoidance: 'lecture.md → slide-curator 9단계 → 슬라이드 컴포넌트 JSX 생성',
    },
  },
  {
    id: 8,
    title: 'StepGuide',
    component: StepGuide,
    props: {
      title: 'Phase A 진행 흐름',
      steps: [
        { title: '엔진', desc: 'useSlideEngine hook' },
        { title: '프레임', desc: 'SlideFrame + Deck + Controls' },
        { title: '패턴', desc: '이론 11개' },
        { title: '라우팅', desc: '[slug]/[deck]/page.js' },
        { title: '검증', desc: 'npm run dev → /sessions/demo/theory' },
      ],
    },
  },
  {
    id: 9,
    title: 'Outro',
    component: Outro,
    props: {
      message: '인프라 검증 완료',
      summary: [
        '9개 슬라이드를 ←/→ 키보드 또는 스와이프로 탐색 가능',
        'URL hash로 슬라이드 직접 진입 가능 (/#5)',
        '디자인 토큰만 사용 — 인라인 16진값 0건',
      ],
      next: 'Phase B: S1 이론 큐레이션 시작 → slide-curator Phase 1~9',
    },
  },
];

export default demoSlides;
