// Source: lectures/S4/lecture.md lines 238-256 (#### 시드 6번 AI 검증 예시)
// Type: example (code block — 프롬프트 + AI 답변 + 점검)
// D-035: lecture.md의 ✓ 체크 표시 제거 → "OK" 텍스트

export default function S4TheoryC2SeedVerify() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          시드 6번 사례 · AI 검증 통과
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-5">
        프롬프트 → AI 답변 → 점검
      </h2>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            프롬프트
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-4 leading-relaxed whitespace-pre-wrap border border-divider mb-3">{`"이 CLAUDE.md만 보고 우리 프로젝트가 무엇인지
 한 문장으로 요약해줘"`}</pre>

          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 mt-3">
            AI 답변
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-4 leading-relaxed whitespace-pre-wrap border border-divider">{`"1인 스마트스토어 셀러를 위한
 차별화 카피 자동 생성 도구.
 상품 사진과 키워드를 입력하면
 5초 이내에 카피 3개를 출력."`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            점검 결과
          </div>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-3 border-l-2 border-accent pl-4 py-2">
              <span className="text-accent font-bold text-base shrink-0">OK</span>
              <span className="text-base text-text">페르소나 일치</span>
            </li>
            <li className="flex items-start gap-3 border-l-2 border-accent pl-4 py-2">
              <span className="text-accent font-bold text-base shrink-0">OK</span>
              <span className="text-base text-text">핵심 기능 일치</span>
            </li>
            <li className="flex items-start gap-3 border-l-2 border-accent pl-4 py-2">
              <span className="text-accent font-bold text-base shrink-0">OK</span>
              <span className="text-base text-text">성공 지표 반영</span>
            </li>
            <li className="flex items-start gap-3 border-l-2 border-accent pl-4 py-2">
              <span className="text-accent font-bold text-base shrink-0">OK</span>
              <span className="text-base text-text">제약사항 반영</span>
            </li>
            <li className="text-base text-accent font-semibold mt-3 pl-4">
              → 검증 통과
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
