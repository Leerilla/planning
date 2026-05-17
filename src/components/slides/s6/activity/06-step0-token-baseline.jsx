// Source: lectures/S6/lecture.md L721 (#### 0-4. 토큰 베이스라인)
// Type: example (bash command - /cost)
// Profile: hierarchical logic / example visual / balanced tone

import CodeBlock from '@/components/slides/patterns/CodeBlock';

export default function S6Activity_0_4_TokenBaseline() {
  const code = `/cost`;

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-4 · 토큰 베이스라인
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        현재 토큰 상태 확인
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        Step 1~5 완료 후 최종 비용을 비교하기 위해 지금 기준값을 메모해두기.
      </p>

      <CodeBlock
        language="bash"
        code={code}
        caption="Claude CLI 명령으로 현재 토큰 사용량 확인"
      />
    </>
  );
}
