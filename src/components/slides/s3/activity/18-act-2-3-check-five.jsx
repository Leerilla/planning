// Source: lectures/S3/lecture.md lines 953-968 (2-3 5요소 확인 3 STEP)
// Type: activity (3 STEP + 5요소 체크박스)

export default function S3Activity_2_3_CheckFive() {
  const sections = ['문제 정의', '페르소나', '핵심 기능', '성공 지표', '사용자 스토리'];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-3 · 산출물: 5요소 모두 채워진 PRD
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        5요소 확인 — 메뉴 조작 3 STEP
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        비어 있는 섹션은 <span className="highlight-mark">"AI 생성" 재요청</span>으로 보강한다.
      </p>

      <div className="grid grid-cols-[2fr_1.4fr] gap-8 max-w-6xl">
        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            메뉴 조작
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-4 border-l-2 border-accent pl-5 py-2">
              <span className="text-xl font-bold text-accent leading-none mt-0.5 w-6 shrink-0">1</span>
              <span className="text-base text-text leading-relaxed">PRD 화면을 위에서 아래로 스크롤</span>
            </div>
            <div className="flex items-start gap-4 border-l-2 border-accent pl-5 py-2">
              <span className="text-xl font-bold text-accent leading-none mt-0.5 w-6 shrink-0">2</span>
              <span className="text-base text-text leading-relaxed">5개 섹션이 모두 존재하는지 확인</span>
            </div>
            <div className="flex items-start gap-4 border-l-2 border-accent pl-5 py-2">
              <span className="text-xl font-bold text-accent leading-none mt-0.5 w-6 shrink-0">3</span>
              <span className="text-base text-text leading-relaxed">비어 있는 섹션은 "AI 생성" 재요청</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            확인할 5 섹션
          </div>
          <ul className="space-y-2">
            {sections.map((s, i) => (
              <li key={i} className="flex items-center gap-3 px-4 py-3 border border-divider rounded">
                <span className="w-4 h-4 rounded border-2 border-accent shrink-0"></span>
                <span className="text-base text-text">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
