// Source: lectures/S4/lecture.md lines 166-180 (#### 4영역 시드 6번 예시)
// Type: example (code block)

export default function S4TheoryC2Area4Seed() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          시드 6번 사례 · 4영역 (제약사항)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        4영역 — 의도적으로 하지 않는 것
      </h2>

      <p className="text-base text-text-sub mb-5 max-w-3xl">
        제약사항이 명확하면 에이전트가 임의 기능을 추가하지 않는다.
      </p>

      <pre className="text-sm text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-line max-w-4xl">{`- 모바일 앱 미지원 (웹만)
- 이미지 자동 생성 미지원 (텍스트만)
- 다국어 미지원 (한국어만)
- 광고 자동 집행 미지원
- 결제 기능 미포함`}</pre>
    </>
  );
}
