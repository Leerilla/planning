// Source: lectures/S4/lecture.md lines 888-894 (4-2 로컬-원격 연결)
// Type: activity (code block)

export default function S4Activity_4_2_Remote() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-2 · 산출물: 원격 origin 등록 완료
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        로컬과 원격 연결
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        {`{user}는 본인 GitHub 사용자 이름으로 치환.`}
      </p>

      <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 max-w-4xl">
        <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
          공통 명령 (macOS / Linux / Windows)
        </div>
        <p className="text-base font-medium text-text leading-relaxed tracking-tight whitespace-pre-wrap">
{`git remote add origin https://github.com/{user}/planning_project.git
git branch -M main`}
        </p>
      </div>
    </>
  );
}
