// Source: lectures/S8/captures/lecture.md L1062-1076
// Type: Process step 1-2 (새 프로젝트 생성)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 5-step → 한 줄 grid)

export default function S8ActivityStep1NewProject() {
  const steps = [
    { label: '새 프로젝트', detail: '대시보드 → "New Project" 클릭 (우측 상단)' },
    { label: '리포 배포 선택', detail: '"Deploy from GitHub repo" 선택' },
    {
      label: 'GitHub 권한 (첫 회)',
      detail: '"Configure GitHub App" → 리포 선택 → "Save"',
    },
    {
      label: '리포 선택',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">planning_project</code> 리포 클릭
        </>
      ),
    },
    { label: '배포 시작', detail: '"Deploy Now" 클릭 — 자동 빌드 시작' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 1-2 · 새 프로젝트
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        1-2. 새 프로젝트 생성
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
