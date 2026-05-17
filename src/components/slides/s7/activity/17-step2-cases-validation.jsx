// Source: lectures/S7/lecture.md L680-704 (2-4. 시드 6번 사례 + Step 2 검증)
// Type: activity (2-section: 3 cases + 4 checklist)

export default function S7Activity_2_4_CasesValidation() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-4 + 검증 · 시드6 사례와 통과 기준
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-6">
        시드 6번 흔한 디버깅 사례 + Step 2 검증
      </h2>

      <div className="flex flex-col gap-5">
        {/* Section 1: 시드6 3 Cases */}
        <div>
          <h3 className="text-base font-semibold text-text-sub mb-3">
            시드 6번 흔한 실패 3건
          </h3>

          <div className="flex flex-col gap-3 max-w-5xl">
            {/* Case 1 */}
            <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-3">
              <div className="text-warning font-bold text-sm mb-1">
                [실패 1] 결과 화면에 카피 0개 표시
              </div>
              <div className="text-sm text-text leading-relaxed">
                원인: OpenAI API 호출 실패 또는 응답 파싱 오류
              </div>
              <div className="text-sm text-text leading-relaxed">
                수정: API 키 환경변수 확인 + 응답 구조 점검
              </div>
            </div>

            {/* Case 2 */}
            <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-3">
              <div className="text-warning font-bold text-sm mb-1">
                [실패 2] 라우팅 후 빈 화면
              </div>
              <div className="text-sm text-text leading-relaxed">
                원인: 입력값이 query 파라미터로 안 넘어감
              </div>
              <div className="text-sm text-text leading-relaxed">
                수정: router.push에 query 추가
              </div>
            </div>

            {/* Case 3 */}
            <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-3">
              <div className="text-warning font-bold text-sm mb-1">
                [실패 3] 키워드 5개 검증 통과 안 됨
              </div>
              <div className="text-sm text-text leading-relaxed">
                원인: 빈 문자열도 5개로 카운트
              </div>
              <div className="text-sm text-text leading-relaxed">
                수정: filter로 빈 문자열 제외 후 length 체크
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-divider max-w-5xl" />

        {/* Section 2: 검증 4 Checklist */}
        <div>
          <h3 className="text-base font-semibold text-text-sub mb-3">
            Step 2 검증 기준 (4항목 모두 통과 시 Step 3 진입)
          </h3>

          <div className="flex flex-col gap-2 max-w-5xl">
            {/* Checklist Item 1 */}
            <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
              <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-full shrink-0" />
              <div className="text-sm text-text leading-relaxed">
                자율 디버깅 3원칙 명령을 사용했는가
              </div>
            </div>

            {/* Checklist Item 2 */}
            <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
              <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-full shrink-0" />
              <div className="text-sm text-text leading-relaxed">
                에이전트가 분석·수정·재실행 흐름을 따랐는가
              </div>
            </div>

            {/* Checklist Item 3 */}
            <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
              <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-full shrink-0" />
              <div className="text-sm text-text leading-relaxed">
                테스트가 통과했는가 (또는 막힘 메모가 있는가)
              </div>
            </div>

            {/* Checklist Item 4 */}
            <div className="flex items-start gap-3 p-3 border border-divider bg-bg-soft rounded-xl">
              <div className="w-5 h-5 mt-0.5 border-2 border-divider rounded-full shrink-0" />
              <div className="text-sm text-text leading-relaxed">
                무한 루프에 빠진 경우 정리 명령을 사용했는가
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
