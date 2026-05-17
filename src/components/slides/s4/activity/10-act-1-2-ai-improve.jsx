// Source: lectures/S4/lecture.md lines 605-642 (1-2 AI 개선 요청 + 시드 6 답변)
// Type: activity (inline 2-area)

export default function S4Activity_1_2_AiImprove() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-2 · 산출물: AI 개선 제안 텍스트
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        AI 개선 요청 — 명령 + 시드 6 답변
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        4영역 충분성 / 모호 표현 / PRD 핵심 누락 / 빠진 부분 — 4 기준 제시.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Claude Code 명령
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-line">{`"현재 작성된 CLAUDE.md를 읽고
 docs/prd.md를 참조해서 개선해줘.
 다음 기준으로 검토:
 - 4영역이 모두 충분히 채워졌는가
 - 모호한 표현이 있는가
 - PRD의 핵심 정보가 빠지지 않았는가
 - 빠진 부분이 있다면 어디인가
 개선안과 함께 이유를 설명해줘."`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            시드 6번 AI 개선 답변
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-line">{`1. 1영역 개선:
   - "빠르게" → "5초 이내에"
   - 페르소나 모호 → "월 매출 100-500만원 1인 셀러"

2. 2영역 보강:
   - BE 스택 누락
   - 권장: "Node.js + Express, OpenAI GPT-4o"

3. 3영역 보강:
   - 컴포넌트 네이밍 누락
   - 명확한 테스트 도구 권장

4. 4영역 추가 권장:
   - "이미지 자동 생성 미지원"
   - "광고 자동 집행 미지원"
   - "결제 기능 미포함"`}</pre>
        </div>
      </div>
    </>
  );
}
