// Source: lectures/S5/lecture.md lines 111-119 (#### AI 협업의 본질)
// Type: concept (definition)

export default function S5TheoryC2Essence() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          AI 협업의 본질
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        직접 치는 것이 아니라 에이전트에게 위임한다
      </h2>

      <div className="max-w-4xl space-y-5">
        <p className="text-lg text-text leading-relaxed">
          AI 에이전트와 코드를 짜는 일의 본질은 작업자가 <strong className="text-accent">직접 코드를 치는 것이 아니라</strong> 에이전트에게 일을 <strong className="text-accent">위임</strong>하는 것.
        </p>

        <div className="border-l-2 border-accent pl-5 py-3 bg-bg-soft">
          <p className="text-2xl font-bold text-text leading-snug">
            위임의 품질이 결과의 품질을 결정한다.
          </p>
        </div>

        <p className="text-base text-text-sub leading-relaxed italic">
          같은 화면 명령이라도 위임이 잘 된 명령은 한 번에 동작. 위임이 부족하면 매번 다른 결과.
        </p>
      </div>
    </>
  );
}
