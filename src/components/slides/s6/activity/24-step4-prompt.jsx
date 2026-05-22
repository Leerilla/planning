// Source: lectures/S6/lecture.md lines 1003-1020 (#### 4-2. Issue #2 빌드 명령)
// Type: example (markdown prompt code)
// Profile: hierarchical / comparison / medium-high / balanced

export default function S6ActivityStep4Prompt() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-2 · Issue #2 빌드 명령
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        4-2. Issue #2 빌드 명령
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        자료 5 메모 구조를 유지하되, 화면 목적을 현재 Task로 변경합니다.
      </p>

      <div className="rounded-xl border border-divider bg-bg-soft p-5 max-w-4xl">
        <p className="text-xs text-text bg-transparent leading-relaxed whitespace-pre-wrap font-medium">{`"Issue #2를 진행해줘.
 CLAUDE.md와 rules/architecture.md,
 rules/coding-style.md를 참조해.

 PRD의 카피 입력 화면 안의
 이미지 업로드 처리를 Next.js + Tailwind로 만들어줘.

 기능은 다음 두 가지:
 1. 드래그앤드롭과 클릭 두 방식으로 상품 사진 업로드
 2. 업로드된 파일을 콘솔에 출력 (실제 처리는 다음 Task에서)

 이 PR은 src/lib/upload.ts와
 src/components/ImageUploader.tsx 두 파일만 수정해."`}</p>
      </div>

      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed max-w-4xl mt-4">
        <strong>프롬프트 패턴:</strong> (1) 참조 파일 명시 (2) 화면 목적 (3) 기능 2가지 (4) 수정 범위 한정.
      </p>
    </>
  );
}
