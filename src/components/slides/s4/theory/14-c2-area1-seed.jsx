// Source: lectures/S4/lecture.md lines 121-131 (#### 1영역 시드 6번 예시)
// Type: example (code block)

export default function S4TheoryC2Area1Seed() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          시드 6번 사례 · 1영역 (프로젝트 개요)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-5">
        1영역 — 한 단락 + 참조 한 줄
      </h2>

      <pre className="text-sm text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-line max-w-4xl">{`월 매출 100-500만원 1인 스마트스토어 셀러 대상.
상품 사진과 키워드 5개를 입력하면
차별화 카피 3개 후보를 5초 이내에 생성.
스마트스토어 형식 텍스트 출력 지원.
자세한 내용은 docs/prd.md 참조.`}</pre>
    </>
  );
}
