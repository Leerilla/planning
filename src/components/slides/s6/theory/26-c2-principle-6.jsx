// Source: lectures/S6/lecture.md lines 248-258 (#### 원칙 6: 입출력 계약)
// Type: example (code block contract)
// Profile: hierarchical / comparison / medium-high / balanced
// Interactive: static

export default function S6TheoryC2Principle6() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          원칙 6 · 입출력 계약
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-5">
        명확한 계약으로 신뢰성 확보
      </h2>

      <pre className="text-sm text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-divider max-w-4xl">{`**입력**: 방금 수정된 파일 경로

**출력**: 일치/불일치/검토 외 3카테고리 보고서

hook이 호출할 때 무엇을 넘길지 명확.
작업자가 결과를 어디서 받을지 알 수 있음.`}</pre>
    </>
  );
}
