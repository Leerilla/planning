// Source: lectures/S5/lecture.md lines 506-522 (1-2 PRD 핵심 기능 재확인 + 시드 6번)
// Type: activity (inline 2-area)

export default function S5Activity_1_2_CoreFeatures() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-2 · 산출물: 핵심 기능 3개 한 줄 요약
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        PRD 핵심 기능 재확인 — 명령 + 시드 6 결과
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        화면 도출 전 PRD의 핵심 기능 3개를 다시 정리.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Claude Code 명령
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-line">{`"docs/prd.md를 읽고 핵심 기능 3개를
 한 줄씩 요약해줘"`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            시드 6번 핵심 기능 요약
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-line">{`기능 1 (입력): 상품 사진 업로드
              + 핵심 키워드 5개 입력

기능 2 (핵심 처리): 카테고리별
              차별화 카피 3개 후보 생성

기능 3 (출력): 스마트스토어 형식으로
              복사 가능한 텍스트 출력`}</pre>
        </div>
      </div>
    </>
  );
}
