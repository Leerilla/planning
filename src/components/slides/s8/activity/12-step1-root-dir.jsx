// Source: lectures/S8/captures/lecture.md L1078-1096
// Type: Process step 1-3 (Root Directory 설정 — 핵심)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 5-step → 한 줄 grid)

export default function S8ActivityStep1RootDir() {
  const steps = [
    { label: '서비스 선택', detail: '프로젝트 화면 → 빌드 중인 Service 클릭' },
    { label: 'Settings 탭', detail: '"Settings" 탭 선택' },
    { label: 'Build 섹션', detail: '"Build" 섹션의 "Root Directory" 필드 찾기' },
    {
      label: '값 입력',
      detail: (
        <>
          값 입력: <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">server</code>
        </>
      ),
    },
    { label: '저장', detail: '저장 → 자동 재빌드 트리거' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 1-3 · Root Directory (핵심)
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        1-3. Root Directory 설정
      </h1>
      <p className="text-sm text-text-sub mb-2 max-w-4xl">
        <span className="text-accent font-semibold">반드시</span> 필요한 설정
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
          이 설정이 없으면 Railway가 리포의 root(<code className="text-accent font-semibold">planning_project/</code>)를 빌드하려 함 → FE 코드까지 포함되어 실패. <code className="text-accent font-semibold">server/</code>만 명시해야 BE만 빌드.
        </p>
      </aside>
    </>
  );
}
