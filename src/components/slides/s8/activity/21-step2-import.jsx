// Source: lectures/S8/captures/lecture.md L1230-1250
// Type: Activity (Step 2-2: Import + Framework Preset)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 5-step → 한 줄 grid)

export default function S8ActivityStep2Import() {
  const steps = [
    { label: '새 프로젝트', detail: '대시보드 → "Add New..." → "Project"' },
    {
      label: '리포 찾기',
      detail: (
        <>
          GitHub 리포 목록에서 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">planning_project</code>
        </>
      ),
    },
    { label: '가져오기', detail: '"Import" 클릭' },
    {
      label: 'Framework 자동 감지',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">Next.js</code> → Vercel 자동 인식
        </>
      ),
    },
    {
      label: 'Root Directory (monorepo)',
      detail: '"Edit" 클릭 → FE 코드 위치 명시 (예: 빈 칸 또는 client/)',
    },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 2-2 · Import + Framework
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        2-2. Import 화면과 Framework Preset
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
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">Vercel</code>은 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">Next.js</code>를 최고 수준으로 통합. Framework Preset이 자동 감지되면 빌드/시작 명령 모두 자동 설정. 직접 건드릴 필요 없음.
        </p>
      </aside>
    </>
  );
}
