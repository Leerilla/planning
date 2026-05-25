// Source: lectures/S8/captures/lecture.md L1377-1393
// Type: Process (3-3: 자동 재배포 흐름)
// D-054: git-committer inline code + accent
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 5-step → 한 줄 grid)
//                       A5 "자료 4-6" 메타 표기 → "직전 자료의"

export default function S8ActivityStep3AutoRedeploy() {
  const steps = [
    {
      label: '코드 수정',
      detail: (
        <>
          Claude Code가 <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">server/</code> 코드 수정 (cors 미들웨어 추가)
        </>
      ),
    },
    {
      label: '자동 커밋',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">git-committer</code>가 자동 커밋
        </>
      ),
    },
    { label: 'GitHub push 감지', detail: 'Railway 자동 재배포' },
    { label: '배포 완료', detail: '1-2분 소요' },
    { label: 'FE 새로고침', detail: 'FE 브라우저 새로고침' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 3-3 · 자동 재배포 흐름
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        3-3. 자동 재배포 흐름
      </h1>
      <p className="text-sm text-text-sub mb-2 max-w-4xl">
        직전 자료의 자동화 인프라가 본 단계에서 작동
      </p>

      <ul className="flex flex-col gap-1 max-w-5xl">
        {steps.map((s, idx) => (
          <li
            key={idx}
            className="border-l-4 border-accent bg-bg-soft rounded-r grid grid-cols-[28px_180px_1fr] gap-3 items-center px-4 py-1.5"
          >
            <span className="text-sm font-bold tabular-nums text-accent text-center">{idx + 1}</span>
            <span className="text-sm font-bold text-text leading-snug">{s.label}</span>
            <span className="text-xs text-text-sub leading-snug">{s.detail}</span>
          </li>
        ))}
      </ul>

      <aside className="mt-2 border-l-4 border-accent bg-accent-soft rounded-r-xl px-4 py-2 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          앞서 만든 자동화 인프라(<code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">git-committer</code>, hook)가 본 단계에서도 작동. 작업자가 수동 커밋 불필요.
        </p>
      </aside>
    </>
  );
}
