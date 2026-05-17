// Source: lectures/S6/lecture.md L713 (#### 0-3. 점검 명령)
// Type: example (bash code - 3 commands)
// Profile: hierarchical logic / example visual / balanced tone

import CodeBlock from '@/components/slides/patterns/CodeBlock';

export default function S6Activity_0_3_CheckCmd() {
  const code = `cat docs/tasks.md | head -30
gh issue list --label task
ls src/components/`;

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 0-3 · 산출물 확인 명령
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        점검 명령 — 3가지
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        자료 5 Step으로 돌아가 보강 필요 여부 판단하기.
      </p>

      <CodeBlock
        language="bash"
        code={code}
        caption="planning_project 폴더에서 실행"
      />
    </>
  );
}
