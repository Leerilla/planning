// Source: lectures/S8/captures/lecture.md L1319-1337
// Type: Example (3-1: CORS 에러 풀 메시지 수집)
// D-054: F12 / Console inline code + accent
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 (vertical 5-step → 한 줄 grid)
//                       D-035/D11/D21 emoji ⚠ 제거 → 번호 + danger tone

export default function S8ActivityStep3ErrorCollect() {
  const steps = [
    {
      label: '시나리오 실행',
      detail: '발급된 Vercel URL에서 시드 6번 시나리오 실행 (상품 사진 + 키워드 + "카피 생성" 클릭)',
      tone: 'normal',
    },
    {
      label: '개발자 도구',
      detail: (
        <>
          <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded">F12</code> (또는 우클릭 → "검사")
        </>
      ),
      tone: 'normal',
    },
    { label: 'Console 탭', detail: '"Console" 탭 클릭', tone: 'normal' },
    {
      label: 'CORS 에러 찾기',
      detail: '빨간 "blocked by CORS policy..." 메시지 찾기',
      tone: 'danger',
    },
    { label: '메시지 복사', detail: '메시지 전체 우클릭 → "Copy message"', tone: 'normal' },
  ];

  const toneClass = (tone) =>
    tone === 'danger' ? 'border-danger bg-danger-soft' : 'border-accent bg-bg-soft';
  const numColor = (tone) => (tone === 'danger' ? 'text-danger' : 'text-accent');

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 3-1 · 에러 수집
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        3-1. CORS 에러 풀 메시지 수집
      </h1>
      <p className="text-sm text-text-sub mb-2 max-w-4xl">메뉴 조작:</p>

      <ul className="flex flex-col gap-1 max-w-5xl">
        {steps.map((s, idx) => (
          <li
            key={idx}
            className={`border-l-4 rounded-r grid grid-cols-[28px_180px_1fr] gap-3 items-center px-4 py-1.5 ${toneClass(s.tone)}`}
          >
            <span className={`text-sm font-bold tabular-nums text-center ${numColor(s.tone)}`}>
              {idx + 1}
            </span>
            <span className="text-sm font-bold text-text leading-snug">{s.label}</span>
            <span className="text-xs text-text-sub leading-snug">{s.detail}</span>
          </li>
        ))}
      </ul>

      <aside className="mt-2 border-l-4 border-divider bg-bg-soft rounded-r-xl px-4 py-2 max-w-4xl">
        <p className="text-xs text-text leading-snug">
          "Copy message"는 메시지 1개의 전체 텍스트 복사. 여러 줄 스택 트레이스가 함께 복사됨.
        </p>
      </aside>
    </>
  );
}
