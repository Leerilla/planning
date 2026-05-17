// Source: lectures/S9/lecture.md L637-646 (#### 1-3 메일 발송, example 2-card 시간대)
// Type: ExampleSlide

export default function S9ActivityStep1SendMail() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 1-3 · 메일 발송
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          1-3. 메일 발송
        </h2>

        {/* Subtitle */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          자료 2 채널 재사용 — 이메일, 링크드인 DM, 네이버 카페 쪽지 등
        </p>

        {/* 2-card time slots */}
        <div className="grid grid-cols-2 gap-4 max-w-5xl">
          {/* Card 1 - Morning */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              평일 오전
            </p>
            <p className="text-2xl font-bold text-text">
              9-11시
            </p>
          </div>

          {/* Card 2 - Evening */}
          <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">
              평일 저녁
            </p>
            <p className="text-2xl font-bold text-text">
              7-9시
            </p>
          </div>
        </div>

        {/* Aside note */}
        <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-5xl mt-5">
          <p className="text-sm text-text-muted leading-relaxed">
            → 응답률 좋은 시간대
          </p>
        </div>
      </div>
    </>
  );
}
