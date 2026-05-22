// Source: lectures/S5/lecture.md lines 588-611 (1-5 시드 6번 화면 1 Task 결과 - 4 Task)
// Type: activity (code)

export default function S5Activity_1_5_Screen1Tasks() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-5 · 시드 6번 화면 1 Task 결과
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        화면 1: 카피 입력 화면 — Task 4개
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        우선순위 1. 각 Task <span className="highlight-mark">1-3개 파일 수정</span> 단위.
      </p>

      <pre className="bg-bg-soft border border-divider rounded p-5 text-sm text-text leading-relaxed max-w-5xl whitespace-pre-wrap">
{`Task 1.1: 입력 폼 UI
- 파일: src/components/InputForm.tsx (1)
- 의존성: 없음

Task 1.2: 이미지 업로드 처리
- 파일: src/lib/upload.ts,
       src/components/ImageUploader.tsx (2)
- 의존성: Task 1.1

Task 1.3: 키워드 입력 검증
- 파일: src/lib/validate.ts (1)
- 의존성: Task 1.1

Task 1.4: 입력 화면 라우팅
- 파일: src/app/page.tsx (1)
- 의존성: Task 1.1, 1.2, 1.3`}
      </pre>
    </>
  );
}
