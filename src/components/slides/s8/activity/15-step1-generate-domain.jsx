// Source: lectures/S8/captures/lecture.md L1140-1152
// Type: Process step 1-6 (Generate Domain)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 4-step → 한 줄 grid)

export default function S8ActivityStep1GenerateDomain() {
  const steps = [
    { label: 'Networking 섹션', detail: 'Settings → "Networking" 섹션' },
    { label: '도메인 생성', detail: '"Generate Domain" 클릭' },
    {
      label: 'URL 자동 생성',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">https://project-production.up.railway.app</code>
        </>
      ),
    },
    { label: 'URL 메모', detail: 'URL 복사하여 메모 (Step 2-2에서 사용)' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 1-6 · Generate Domain
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        1-6. Generate Domain (URL 발급)
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
    </>
  );
}
