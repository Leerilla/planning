// Source: lectures/S3/lecture.md lines 837-855 (1-4 인용 검증 4 STEP)
// Type: activity (4 STEP 메뉴)

export default function S3Activity_1_4_CiteVerify() {
  const steps = [
    '답변 안의 [1] [2] 인용 번호 클릭',
    '우측 패널에 원문 표시',
    '원문이 답변과 일치하는지 확인 — 키워드 일치 / 맥락 일치',
    '일치하면 채택, 불일치하면 거짓 인용 메모',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-4 · 산출물: 검증된 페인포인트
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        인용 검증 — 메뉴 조작 4 STEP
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        거짓 인용이 있으면 즉시 메모. <span className="highlight-mark">검증 통과한 페인포인트만</span> 다음 단계로.
      </p>

      <div className="space-y-3 max-w-4xl">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-accent pl-5 py-2">
            <span className="text-2xl font-bold text-accent leading-none mt-0.5 w-7 shrink-0">
              {i + 1}
            </span>
            <span className="text-base text-text leading-relaxed">{s}</span>
          </div>
        ))}
      </div>
    </>
  );
}
