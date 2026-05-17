// Source: lectures/S4/lecture.md lines 871-886 (4-1 GitHub 저장소 생성 6 STEP)
// Type: activity (6 STEP 메뉴)
// D-043: repo 이름도 planning_project로 통일

export default function S4Activity_4_1_GithubCreate() {
  const steps = [
    'github.com 접속',
    '우측 상단 "+" → "New repository"',
    'Repository name: planning_project',
    'Privacy: Private (또는 Public)',
    '"Create repository" 클릭',
    'URL 복사 — 다음 단계에서 git remote add origin에 사용',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-1 · 산출물: GitHub planning_project 저장소
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        GitHub 저장소 생성 — 메뉴 조작 6 STEP
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        repo 이름도 <span className="highlight-mark">planning_project</span> 일치 — 폴더와 저장소가 같은 이름.
      </p>

      <div className="space-y-2 max-w-5xl">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-accent pl-5 py-1.5">
            <span className="text-xl font-bold text-accent leading-none mt-0.5 w-7 shrink-0">
              {i + 1}
            </span>
            <span className="text-base text-text leading-relaxed">{s}</span>
          </div>
        ))}
      </div>
    </>
  );
}
