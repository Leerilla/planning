// Source: lectures/S5/lecture.md lines 613-645 (1-5 시드 6번 화면 2 Task 결과 - 6 Task)
// Type: activity (code)

export default function S5Activity_1_5_Screen2Tasks() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-5 · 시드 6번 화면 2 Task 결과
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        화면 2: 카피 결과 화면 — Task 6개
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        우선순위 2. 화면 1 완성 후 진입.
      </p>

      <pre className="bg-bg-soft border border-line rounded p-5 text-xs text-text leading-relaxed max-w-5xl whitespace-pre-wrap">
{`Task 2.1: OpenAI API 클라이언트
- 파일: src/lib/openai-client.ts (1)

Task 2.2: 프롬프트 템플릿
- 파일: src/lib/prompts.ts (1)

Task 2.3: 카피 생성 API 라우트
- 파일: src/app/api/generate/route.ts,
       src/lib/copy-generator.ts (2)
- 의존성: Task 2.1, 2.2

Task 2.4: 결과 표시 컴포넌트
- 파일: src/components/CopyOutput.tsx,
       src/lib/format-copy.ts (2)
- 의존성: Task 2.3

Task 2.5: 복사 버튼
- 파일: src/components/CopyButton.tsx (1)
- 의존성: Task 2.4

Task 2.6: 결과 화면 라우팅
- 파일: src/app/result/page.tsx (1)
- 의존성: Task 2.4, 2.5`}
      </pre>
    </>
  );
}
