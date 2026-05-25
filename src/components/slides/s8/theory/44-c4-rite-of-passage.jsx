// Source: lectures/S8/captures/lecture.md line 567-583 (#### 통과 의례인 이유)
// Type: process
// Pattern: ProcessSlide with 4-step reveal
// Profile: logic=hierarchical / visual=comparison / tone=strong
// S8 T19d (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화 (vertical → 한 줄 grid)

export default function S8TheoryC4RiteOfPassage() {
  const steps = [
    {
      label: '로컬 — 같은 도메인',
      detail: (
        <>
          FE/BE 모두 <span className="font-semibold">localhost</span>{' '}
          → CORS 안 막힘
        </>
      ),
    },
    {
      label: '배포 — 다른 도메인',
      detail: (
        <>
          FE는 <span className="font-semibold">vercel.app</span>, BE는 <span className="font-semibold">railway.app</span>{' '}
          → CORS 차단 시작
        </>
      ),
    },
    {
      label: 'CORS 설정 시점',
      detail: '첫 배포 직후 = CORS 설정이 필요해지는 시점',
    },
    {
      label: '공통 패턴',
      detail: '모든 풀스택 빌드자가 한 번은 만나는 패턴',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          이론 4 · 통과 의례
        </span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-text leading-snug mb-1">
        통과 의례인 이유
      </h2>

      <p className="text-sm text-text-sub mb-3 max-w-4xl leading-snug">
        로컬에서 동작 → 배포 후 차단 → 모든 풀스택 빌드자가 만나는 패턴
      </p>

      <ul className="flex flex-col gap-1.5 max-w-5xl">
        {steps.map((s, idx) => (
          <li
            key={idx}
            className="border-l-4 border-accent bg-bg-soft rounded-r grid grid-cols-[28px_200px_1fr] gap-3 items-center px-4 py-2"
          >
            <span className="text-sm font-bold tabular-nums text-accent text-center">{idx + 1}</span>
            <span className="text-sm font-bold text-text leading-snug">{s.label}</span>
            <span className="text-xs text-text-sub leading-snug">{s.detail}</span>
          </li>
        ))}
      </ul>

      <aside className="mt-3 border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2.5 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          로컬에서 동작하던 게 배포 후 <em>안 됨</em>. 좌절 포인트지만 정상 흐름. CORS 에러를 만나면 <em>"배포가 잘됐다는 신호"</em>로 받아들일 것.
        </p>
      </aside>
    </>
  );
}
