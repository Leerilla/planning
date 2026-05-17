// Source: lectures/S9/lecture.md L648-660 (#### 1-4 발송 메모, example pre + D-054 inline code)
// Type: ExampleSlide
// Phase 6: request.md #13 — 텍스트 문장별 줄바꿈 명시

export default function S9ActivityStep1DispatchMemo() {
  return (
    <>
      <div className="flex flex-col gap-8 h-full justify-center">
        {/* Header marker + label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-12 h-1 bg-accent rounded-full" />
          <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
            활동 1-4 · 발송 메모
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
          1-4. 발송 메모 작성
        </h2>

        {/* Subtitle with D-054 inline code */}
        <p className="text-base text-text-sub mb-6 max-w-5xl">
          산출물: <code className="text-accent font-semibold">docs/dispatch-memo.md</code> — 발송 직후 작성
        </p>

        {/* Memo block — 문장별 div 분리 (가독성) */}
        <div className="bg-bg-soft border border-divider rounded-xl p-6 max-w-4xl flex flex-col gap-3">
          <div className="text-accent font-bold text-sm uppercase tracking-widest mb-1">
            [발송 메모]
          </div>
          <div className="text-sm text-text leading-relaxed">
            발송 시각: <span className="text-text-sub">{'{날짜·시간}'}</span>
          </div>
          <div className="text-sm text-text leading-relaxed">
            발송 대상 수: <span className="text-text-sub">{'{N명}'}</span>
          </div>
          <div className="text-sm text-text leading-relaxed">
            채널별 발송: <span className="text-text-sub">{'{이메일 X명, 카카오톡 X명, ...}'}</span>
          </div>
          <div className="text-sm text-text leading-relaxed">
            응답 기대 수: <span className="text-text-sub">1-2명 (5-15% 응답률 기준)</span>
          </div>
          <div className="text-sm text-text leading-relaxed">
            응답 마감: <span className="text-text-sub">당일 내</span>
          </div>
        </div>

        {/* Aside note — request.md 양식 적용 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-5xl mt-5">
          <p className="text-sm text-text-muted leading-relaxed">
            5-15% 응답률 기준 — 10명 발송에 1-2명 응답 기대
          </p>
        </div>
      </div>
    </>
  );
}
