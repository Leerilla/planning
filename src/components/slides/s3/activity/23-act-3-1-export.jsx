// Source: lectures/S3/lecture.md lines 1034-1051 (3-1 Export 5 STEP)
// Type: activity (5 STEP 메뉴)

export default function S3Activity_3_1_Export() {
  const steps = [
    'PRD 화면 우측 상단 "..." 더보기 버튼',
    '"Export" 또는 "내보내기" 클릭',
    '형식 선택 — Markdown (.md) / PDF / Word (.docx)',
    '"다운로드" 클릭',
    '브라우저 다운로드 폴더에 prd.md 확인',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-1 · 산출물: 다운로드 폴더에 prd.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        Export 메뉴 조작 — 5 STEP
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        형식은 <span className="highlight-mark">Markdown (.md)</span> 고정. PDF/Word는 빌드 단계에서 사용 X.
      </p>

      <div className="space-y-2 max-w-5xl">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-accent pl-5 py-1.5">
            <span className="text-xl font-bold text-accent leading-none mt-0.5 w-7 shrink-0">
              {i + 1}
            </span>
            <span className="text-base text-text leading-relaxed">{s}</span>
          </div>
        ))}
      </div>
    </>
  );
}
