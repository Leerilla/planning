// Source: lectures/S5/lecture.md lines 552-571 (1-4 첫 화면 결정 기준 + 시드 6번)
// Type: activity (inline 2-area)

export default function S5Activity_1_4_FirstScreen() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-4 · 산출물: 첫 화면 결정 + 한 줄 목적
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        첫 화면 결정 기준 — 기준 + 시드 6번 선택
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        페르소나 진입점 + 핵심 가설 검증 — 2개 기준.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            결정 기준 (2개)
          </div>
          <div className="bg-bg-soft rounded p-4 border border-divider space-y-3">
            <div className="border-l-2 border-accent pl-3">
              <div className="text-sm font-bold text-text">페르소나 진입점</div>
              <div className="text-xs text-text-sub">가장 처음 만나는 화면</div>
            </div>
            <div className="border-l-2 border-accent pl-3">
              <div className="text-sm font-bold text-text">핵심 가설 검증</div>
              <div className="text-xs text-text-sub">PRD 가설을 가장 빨리 시험</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            시드 6번 첫 화면 = 카피 입력 화면
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`이유:
- 셀러가 가장 처음 진입
- 핵심 가설("작성 시간 1-2시간 → 5분")
  가장 빨리 검증

화면 목적 한 줄:
"1인 셀러가 신규 상품 등록 시
 상품 사진과 키워드 5개를 입력해
 카피 생성을 요청하는 화면"`}</pre>
        </div>
      </div>
    </>
  );
}
