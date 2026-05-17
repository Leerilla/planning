// Source: lectures/S3/lecture.md lines 180-210 (요소 3 정의·양식·예시 통합)
// Type: concept (inline 2-area)

export default function S3TheoryC2E3Features() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          5요소 · 3 — 핵심 기능
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 기능 — 문제를 직접 푸는 작동의 단위 (3개 이하)
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-6xl">
        <div className="border border-line rounded p-6 bg-bg-soft">
          <div className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            정의와 목적
          </div>
          <p className="text-lg text-text font-semibold mb-5 leading-relaxed border-l-2 border-accent pl-4">
            MVP에서는 3개 이하로 좁힌다.
            <br />
            입력 1 + 핵심 처리 1 + 출력 1이 표준 골격.
          </p>
          <ul className="space-y-2 text-base text-text-sub leading-relaxed">
            <li>· 빌드 범위의 명시 (4개 이상은 시간 부족)</li>
            <li>· 검증 단위의 정의</li>
            <li>· 우선순위 명시</li>
          </ul>
        </div>

        <div className="border border-line rounded p-6">
          <div className="text-xs font-semibold tracking-wider uppercase text-text-sub mb-3">
            표준 3개 구성 + 시드 6 예시
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 mb-3 leading-relaxed whitespace-pre-wrap">{`- 기능 1 (입력): 사용자가 무엇을 입력하는가
- 기능 2 (핵심 처리): 가장 강한 페인포인트 해결
- 기능 3 (출력): 결과를 어떻게 출력하는가`}</pre>
          <pre className="text-sm text-text bg-bg-soft border-l-2 border-accent rounded p-3 leading-relaxed whitespace-pre-wrap">{`- 기능 1: 상품 사진 업로드 + 핵심 키워드 5개 입력
- 기능 2: 카테고리별 차별화 카피 3개 후보 생성
- 기능 3: 스마트스토어 형식 텍스트 출력`}</pre>
        </div>
      </div>
    </>
  );
}
