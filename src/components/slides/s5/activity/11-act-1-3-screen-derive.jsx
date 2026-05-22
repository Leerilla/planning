// Source: lectures/S5/lecture.md lines 524-550 (1-3 화면 도출 명령 + 시드 6번 결과)
// Type: activity (inline 2-area)

export default function S5Activity_1_3_ScreenDerive() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-3 · 산출물: 화면 2~5개 도출
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        화면 도출 명령 — 명령 + 시드 6 결과
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        핵심 2개 화면으로 압축. 우선순위 낮은 화면은 다음 사이클로.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Claude Code 명령
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`"docs/prd.md의 핵심 기능과 docs/workflow.md를 확인해서
 사용자 흐름 순서로 화면 단위로 나눠줘.

 각 화면에 어떤 기능이 매핑되는지 명시.
 화면 개수는 3-5개를 넘기지 마."`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            시드 6번 화면 도출 결과
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`화면 1: 카피 입력 화면
  - 기능 1 (입력): 사진 업로드 + 키워드 5
  - "카피 생성" 버튼

화면 2: 카피 결과 화면
  - 기능 2 (핵심 처리): 카피 3 후보 표시
  - 기능 3 (출력): 카피별 복사 버튼

화면 3: 작업 이력 화면 (선택, 제외)`}</pre>
        </div>
      </div>
    </>
  );
}
