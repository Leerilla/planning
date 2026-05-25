// Source: lectures/S8/captures/lecture.md L1043-1060
// Type: Process step 1-1 (Railway 가입)
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 5-step → 한 줄 grid)

export default function S8ActivityStep1Signup() {
  const steps = [
    {
      label: '사이트 접속',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">https://railway.app</code> 접속
        </>
      ),
    },
    { label: '로그인 클릭', detail: '우측 상단 "Login" 클릭' },
    {
      label: 'GitHub 인증 선택',
      detail: (
        <>
          "Login with <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">GitHub</code>" 선택
        </>
      ),
    },
    { label: '권한 승인', detail: 'GitHub 권한 승인' },
    { label: '대시보드 진입', detail: 'Railway 대시보드 진입' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 1-1 · Railway 가입
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        1-1. Railway 가입과 첫 접속
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
          처음이라면 무료 크레딧 5달러가 자동 부여. 결제 카드 등록 없이 본 학습 진행 가능.
        </p>
      </aside>
    </>
  );
}
