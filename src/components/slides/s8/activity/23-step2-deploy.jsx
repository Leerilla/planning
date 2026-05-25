// Source: lectures/S8/captures/lecture.md L1271-1289
// Type: Activity (Step 2-4: 빌드 + URL)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 5-step → 한 줄 grid)

export default function S8ActivityStep2Deploy() {
  const steps = [
    { label: '배포 시작', detail: '환경 변수 등록 후 "Deploy" 클릭' },
    { label: '빌드 로그', detail: '빌드 로그 화면으로 자동 이동' },
    { label: '진행 상태', detail: '"Building" → "Deploying" → "Ready" 순서로 진행 (2-3분)' },
    {
      label: 'URL 발급',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">https://planning-project.vercel.app</code>
        </>
      ),
    },
    { label: 'URL 접속', detail: '"Visit" 또는 "Open" 버튼으로 URL 접속' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 2-4 · 빌드 + URL
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        2-4. 빌드와 URL 발급
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
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">Vercel</code>은 매 git push마다 새 URL 자동 발급(preview). main 브랜치 push만 production URL(메인 도메인)로 배포.
        </p>
      </aside>
    </>
  );
}
