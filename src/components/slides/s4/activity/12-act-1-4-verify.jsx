// Source: lectures/S4/lecture.md lines 664-689 (1-4 AI 검증 루프 명령 + 시드 6 통과)
// Type: activity (inline 2-area)
// D-035: lecture.md ✓ → "OK"

export default function S4Activity_1_4_Verify() {
  const checks = ['페르소나 일치', '핵심 기능 일치', '성공 지표 반영', '제약사항 반영'];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-4 · 산출물: AI 검증 통과
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        AI 검증 루프 — 명령 + 시드 6 통과
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        의도와 일치할 때까지 반복. 불일치 → 모호 영역 보강 → 재검증.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            검증 명령
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-4 leading-relaxed whitespace-pre-wrap border border-divider mb-3">{`"이 /project/claude.md만 보고
 우리 프로젝트가 무엇인지
 한 문장으로 요약해줘"`}</pre>

          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 mt-3">
            AI 답변 (시드 6)
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-4 leading-relaxed whitespace-pre-wrap border border-divider">{`"1인 스마트스토어 셀러를 위한
 차별화 카피 자동 생성 도구.
 상품 사진과 키워드를 입력하면
 5초 이내에 카피 3개를 출력.
 모바일은 지원 않고 한국어 웹 전용."`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            점검 결과
          </div>
          <ul className="space-y-2">
            {checks.map((c, i) => (
              <li key={i} className="flex items-start gap-3 border-l-2 border-accent pl-4 py-2">
                <span className="text-accent font-bold text-base shrink-0">OK</span>
                <span className="text-base text-text">{c}</span>
              </li>
            ))}
            <li className="text-base text-accent font-semibold mt-3 pl-4">
              → 검증 통과
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
