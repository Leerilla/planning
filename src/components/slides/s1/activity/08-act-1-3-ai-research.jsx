// Source: lectures/S1/lecture.md lines 612-654
// Type: example (활동 1-3 — AI 1차 리서치)
// D-035: emoji ✅/❌ → "있음/없음" 텍스트
// D-040: 활동 콘텐츠 = inline custom (프롬프트 양식 + 출처 점검 분기)

export default function S1Activity_1_3_AIResearch() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-3 · 20분 · 산출물: AI 답변 + 출처 URL
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        AI 1차 리서치
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        5 Whys로 도달한 문제 진술을 ChatGPT 또는 Gemini에 입력한다.
      </p>

      {/* STEP 1 — 빈 양식 + 시드 6 적용 */}
      <div className="grid grid-cols-2 gap-4 mb-5 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            STEP 1 · 빈 프롬프트
          </div>
          <p className="text-sm font-medium text-text-sub leading-relaxed tracking-tight whitespace-pre-line">
{`{페르소나 후보}들이 {5 Whys로 좁힌 문제}에 대해
어떻게 느끼는지, 출처와 함께 알려줘.
한국 사용자 기준으로 답해줘.`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5">
          <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
            시드 6 적용
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`1인 스마트스토어 셀러들이 상세페이지 카피의
키워드 자연화와 ROAS 압박에 대해 어떻게 느끼는지,
출처와 함께 알려줘. 한국 사용자 기준으로 답해줘.`}
          </p>
        </div>
      </div>

      {/* STEP 2 — 출처 점검 분기 */}
      <div className="max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          STEP 2 · 출처 점검 (답변 도착 즉시)
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* 통과 */}
          <div className="rounded-2xl border-l-4 border-success bg-success-soft p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-success" />
              <span className="text-success text-xs font-semibold tracking-wider uppercase">
                출처 URL 있음
              </span>
            </div>
            <p className="text-base font-bold text-text leading-relaxed tracking-tight">
              STEP 3로 진행 (출처 검증)
            </p>
          </div>

          {/* 재요청 */}
          <div className="rounded-2xl border-l-4 border-warning bg-warning-soft p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-warning" />
              <span className="text-warning text-xs font-semibold tracking-wider uppercase">
                출처 URL 없음
              </span>
            </div>
            <p className="text-base font-bold text-text leading-relaxed tracking-tight mb-2">
              STEP 2-1 재요청
            </p>
            <p className="text-sm font-medium text-text-sub leading-relaxed tracking-tight bg-bg-soft p-3 rounded-xl whitespace-pre-line">
{`방금 답변에서 통계 또는 인용
1개 이상에 대해 1차 출처 URL을 첨부해줘.`}
            </p>
          </div>
        </div>

        {/* 폐기 조건 */}
        <div className="grid grid-cols-[80px_1fr] gap-3 items-start mt-4">
          <span className="text-danger bg-danger-soft border border-danger text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
            폐기
          </span>
          <p className="text-base font-medium text-text tracking-tight leading-relaxed pt-1">
            그래도 출처가 안 들어가면 <span className="highlight-mark">AI가 출처를 모른다는 신호</span> — 그 답변은 사용하지 않는다.
          </p>
        </div>
      </div>
    </>
  );
}
