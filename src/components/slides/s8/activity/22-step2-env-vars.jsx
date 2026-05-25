// Source: lectures/S8/captures/lecture.md L1252-1269
// Type: Activity (Step 2-3: 환경 변수 등록)
// D-054: NEXT_PUBLIC_API_URL inline code + accent
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 4-step → 한 줄 grid)

export default function S8ActivityStep2EnvVars() {
  const steps = [
    { label: '섹션 펼치기', detail: '"Environment Variables" 섹션 펼치기' },
    {
      label: 'Name 입력',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">NEXT_PUBLIC_API_URL</code>
        </>
      ),
    },
    {
      label: 'Value 입력 (Step 1-6 URL)',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">https://planning-project-production.up.railway.app</code>
        </>
      ),
    },
    { label: '추가', detail: '"Add" 클릭' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 2-3 · NEXT_PUBLIC_API_URL
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        2-3. 환경 변수 등록 (NEXT_PUBLIC_API_URL)
      </h1>
      <p className="text-sm text-text-sub mb-2 max-w-4xl">
        Import 화면 또는 배포 후 Settings에서:
      </p>

      <ul className="flex flex-col gap-1 max-w-5xl">
        {steps.map((s, idx) => (
          <li
            key={idx}
            className="border-l-4 border-accent bg-bg-soft rounded-r grid grid-cols-[28px_220px_1fr] gap-3 items-center px-4 py-1.5"
          >
            <span className="text-sm font-bold tabular-nums text-accent text-center">{idx + 1}</span>
            <span className="text-sm font-bold text-text leading-snug">{s.label}</span>
            <span className="text-xs text-text-sub leading-snug">{s.detail}</span>
          </li>
        ))}
      </ul>

      <aside className="mt-2 border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">NEXT_PUBLIC_</code> 접두사 필수. <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">Next.js</code>가 이 접두사 변수만 브라우저로 노출. 빠뜨리면 FE가 BE URL을 못 읽음.
        </p>
      </aside>
    </>
  );
}
