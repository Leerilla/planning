// Source: lectures/S1/lecture.md lines 871-899
// Type: example (활동 3-1 — 옆 작업자에게 선언)
// D-035: emoji ❌/✅ → BAD/GOOD 라벨

export default function S1Activity_3_1_Declaration() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-1 · 10분 · 산출물: 한 줄 가설 선언
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        옆 작업자에게 1차 가설을 선언한다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        다른 사람에게 한 번에 전달되는가가 <span className="highlight-mark">메일 카피의 응답률을 결정한다.</span>
      </p>

      {/* 2-col: 빈 양식 + 시드 6 적용 */}
      <div className="grid grid-cols-2 gap-4 mb-5 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            빈 양식
          </div>
          <p className="text-sm font-medium text-text-sub leading-relaxed tracking-tight whitespace-pre-line">
{`"풀려는 문제는 {문제}이고
페르소나는 {페르소나}이다.
핵심 가설 1개는 {가설}이다."`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5">
          <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
            시드 6 적용
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`"풀려는 문제는 1인 셀러의 키워드 자연화에 따른 ROAS 타격이고
페르소나는 월 50-100 SKU 등록하는 전업 1년차 셀러이다.
핵심 가설 1개는 키워드 자연화 도구에 월 2만원 이상 지불할 의향이 있다는 것이다."`}
          </p>
        </div>
      </div>

      {/* 검증 방법 BAD vs GOOD */}
      <div className="max-w-5xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          검증 방법
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border-l-4 border-danger bg-danger-soft p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-danger bg-bg-soft border border-danger text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1">
                BAD
              </span>
              <span className="text-xs font-semibold text-text-sub tracking-wider uppercase">
                거짓말하기 쉬운 질문
              </span>
            </div>
            <p className="text-base font-bold text-text leading-relaxed tracking-tight">
              "이해됐어?"
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-success bg-success-soft p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-success bg-bg-soft border border-success text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1">
                GOOD
              </span>
              <span className="text-xs font-semibold text-success tracking-wider uppercase">
                다시 말하게 시키기
              </span>
            </div>
            <p className="text-base font-bold text-text leading-relaxed tracking-tight">
              "네가 들은 것을 한 줄로 다시 말해봐"
            </p>
          </div>
        </div>
        <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mt-3">
          다시 말한 내용이 본인 의도와 일치하면 명확한 것. 일치하지 않으면 <span className="font-bold text-text">본인 표현이 모호한 것이지 듣는 사람의 문제가 아니다.</span>
        </p>
      </div>
    </>
  );
}
