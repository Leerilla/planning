// Source: lectures/S7/lecture.md L667-678 (2-3. 무한 루프 방지)
// Type: example (정리 명령 + aside)

export default function S7Activity_2_3_AntiLoop() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-3 · 무한 루프 방지
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        무한 루프 방지: 정리 명령
      </h2>
      <p className="text-base text-text-sub mb-4">
        같은 자리 3회 이상 맴돌면 정리 명령
      </p>

      <pre className="bg-bg border border-divider rounded-xl p-4 text-sm whitespace-pre-line max-w-4xl text-text leading-relaxed mb-4">
{`이 디버깅의 어디서 막혔는지 정리해줘.
지금까지 시도한 수정과 각 수정 후의 에러를
표로 보여줘.`}
      </pre>

      <div className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          정리된 표 보고 작업자가 직접 판단. 에이전트가 못 푸는 문제는 작업자가 직접 보기.
        </p>
      </div>
    </>
  );
}
