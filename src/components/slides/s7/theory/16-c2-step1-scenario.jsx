// Source: lectures/S7/lecture.md lines 156-166 (#### 1단계: 시나리오 선택)
// Type: example (시나리오 + 코드)
// Phase 6 fix (2026-05-16): 타이틀-콘텐츠 정렬 일관 + text-3xl 타이틀 + 좌측 정렬

export default function S7TheoryC2Step1Scenario() {
  return (
    <>
      {/* Header marker + label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          MCP 사용 흐름 · 1단계
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        1단계: 시나리오 선택
      </h2>

      {/* Subtitle */}
      <p className="text-text-sub text-lg mb-6 max-w-4xl leading-relaxed">
        사용자가 처음부터 끝까지 거치는 흐름 1개.
      </p>

      {/* Example label + code block */}
      <div className="max-w-4xl">
        <p className="text-sm font-bold text-accent uppercase tracking-wider mb-3">
          시드 6번 예시
        </p>
        <div className="bg-bg-soft border-l-4 border-accent rounded-r-xl px-6 py-5">
          <pre className="text-sm text-text leading-relaxed whitespace-pre-wrap break-words">
{`"셀러가 카피 입력 화면에 상품 사진과 키워드 5개를 입력
 → '카피 생성' 버튼 클릭
 → 결과 화면에서 차별화 카피 3개 확인
 → 복사 버튼으로 카피 1개 클립보드에 복사"`}
          </pre>
        </div>
      </div>
    </>
  );
}
