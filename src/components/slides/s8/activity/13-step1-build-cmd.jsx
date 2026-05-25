// Source: lectures/S8/captures/lecture.md L1098-1117
// Type: Process step 1-4 (빌드/시작 명령)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 4-step → 한 줄 grid)

export default function S8ActivityStep1BuildCmd() {
  const steps = [
    { label: 'Build 섹션', detail: 'Settings → "Build" 섹션' },
    {
      label: 'Build Command',
      detail: (
        <>
          Nixpacks 자동 — <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">npm install</code>
        </>
      ),
    },
    {
      label: 'Start Command',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">npm start</code>
        </>
      ),
    },
    {
      label: 'package.json 점검',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">server/package.json</code>의 "start" 스크립트 — {'{ "scripts": { "start": "node index.js" } }'}
        </>
      ),
    },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 1-4 · 빌드/시작 명령
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        1-4. 빌드 명령과 시작 명령 확인
      </h1>
      <p className="text-sm text-text-sub mb-2 max-w-4xl">
        Railway가 자동 감지하지만 점검:
      </p>

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

      <aside className="mt-2 border-l-4 border-warning bg-warning-soft rounded-r-xl px-4 py-2 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          <code className="text-accent font-semibold">"start"</code> 스크립트가 없으면 Railway 빌드는 성공해도 시작 실패. <code className="text-accent font-semibold">package.json</code>에 scripts 추가 필요.
        </p>
      </aside>
    </>
  );
}
