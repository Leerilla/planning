// Source: lectures/S5/lecture.md lines 676-713 (2-1 Issue 등록 명령 + 시드 6번)
// Type: activity (inline 2-area)

export default function S5Activity_2_1_IssueCmd() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-1 · 산출물: GitHub Issue 10개
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        Issue 등록 명령 — 명령 + 시드 6 결과
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        각 Task를 Issue로 등록하고 화면 라벨(screen-1, screen-2) 부여.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Claude Code 명령
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`"docs/tasks.md의 모든 Task를
 GitHub Issue로 등록해줘.

 각 Issue 제목: 'Task {ID}: {제목}'

 본문 포함:
 - 소속 화면 (화면 1 또는 화면 2)
 - 수정 파일 목록
 - 예상 작업 시간
 - 의존성
 - 작업 완료 기준

 라벨:
 - 화면 1 Task → screen-1 + task
 - 화면 2 Task → screen-2 + task"`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            시드 6번 Issue 등록 결과 (10개)
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`#1: Task 1.1: 입력 폼 UI (screen-1)
#2: Task 1.2: 이미지 업로드 (screen-1)
#3: Task 1.3: 키워드 검증 (screen-1)
#4: Task 1.4: 입력 화면 라우팅 (screen-1)
#5: Task 2.1: OpenAI 클라이언트 (screen-2)
#6: Task 2.2: 프롬프트 템플릿 (screen-2)
#7: Task 2.3: 카피 생성 API (screen-2)
#8: Task 2.4: 결과 컴포넌트 (screen-2)
#9: Task 2.5: 복사 버튼 (screen-2)
#10: Task 2.6: 결과 라우팅 (screen-2)`}</pre>
        </div>
      </div>
    </>
  );
}
