// Source: lectures/S4/lecture.md lines 1001-1009 (### 폴더와 저장소 일관성)
// Type: activity (2-card — 2 #### 통합)

export default function S4Tip1Folder() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 1 · 폴더와 저장소 일관성
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        학습 전체가 하나의 폴더에서 누적
      </h2>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div className="border border-line rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            planning_project로 고정
          </div>
          <p className="text-base text-text leading-relaxed">
            학습 단계가 진행되어도 같은 폴더에서 누적. 매 단계마다 새 폴더로 옮기면 이전 산출물 다시 복사해야 하고 흐름이 끊긴다.
          </p>
        </div>

        <div className="border border-line rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            저장소 이름도 폴더와 일치
          </div>
          <p className="text-base text-text leading-relaxed">
            GitHub 저장소 이름도 planning_project. 학습 전체가 하나의 저장소에서 진행.
          </p>
        </div>
      </div>
    </>
  );
}
