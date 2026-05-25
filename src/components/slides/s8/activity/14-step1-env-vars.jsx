// Source: lectures/S8/captures/lecture.md L1119-1138
// Type: Process step 1-5 (환경 변수)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 5-step → 한 줄 grid)

export default function S8ActivityStep1EnvVars() {
  const steps = [
    { label: 'Variables 탭', detail: 'Service 화면 → "Variables" 탭' },
    { label: '신규 변수', detail: '"+ New Variable" 클릭 (또는 "Raw Editor")' },
    {
      label: '키·값 등록',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">Name: OPENAI_API_KEY</code> /{' '}
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">Value: sk-abc123...</code> (본인 키)
        </>
      ),
    },
    { label: '추가', detail: '"Add" 클릭' },
    { label: '자동 재배포', detail: '자동 재배포 트리거됨 (1-2분 소요)' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 1-5 · 환경 변수
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        1-5. 환경 변수 등록 (OPENAI_API_KEY)
      </h1>
      <p className="text-sm text-text-sub mb-2 max-w-4xl">메뉴 조작:</p>

      <ul className="flex flex-col gap-1 max-w-5xl">
        {steps.map((s, idx) => (
          <li
            key={idx}
            className="border-l-4 border-accent bg-bg-soft rounded-r grid grid-cols-[28px_200px_1fr] gap-3 items-center px-4 py-1.5"
          >
            <span className="text-sm font-bold tabular-nums text-accent text-center">{idx + 1}</span>
            <span className="text-sm font-bold text-text leading-snug">{s.label}</span>
            <span className="text-xs text-text-sub leading-snug">{s.detail}</span>
          </li>
        ))}
      </ul>

      <aside className="mt-2 border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          환경 변수 추가 시 Railway가 자동 재배포. 코드 push 없이 변수만 갱신해도 적용.
        </p>
      </aside>
    </>
  );
}
