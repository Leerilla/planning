// Source: lectures/S8/captures/lecture.md L1215-1228
// Type: Activity (Step 2-1: Vercel 가입)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 5-step → 한 줄 grid)

export default function S8ActivityStep2Signup() {
  const steps = [
    {
      label: '사이트 접속',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">https://vercel.com</code> 접속
        </>
      ),
    },
    { label: '가입 클릭', detail: '"Sign Up" 클릭 (우측 상단)' },
    {
      label: 'GitHub 인증',
      detail: (
        <>
          "Continue with <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">GitHub</code>" 선택
        </>
      ),
    },
    { label: '권한 승인', detail: 'GitHub 권한 승인' },
    { label: '대시보드 진입', detail: 'Vercel 대시보드 진입' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 2-1 · Vercel 가입
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        2-1. Vercel 가입과 첫 접속
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
