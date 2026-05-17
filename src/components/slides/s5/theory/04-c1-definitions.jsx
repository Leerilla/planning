// Source: lectures/S5/lecture.md lines 24-38 (#### 수직 슬라이스의 정의 + #### 수평 슬라이스의 정의)
// Type: comparison (정의 통합 2-card)

export default function S5TheoryC1Definitions() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          수직 vs 수평 슬라이스 정의
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        같은 빌드를 자르는 두 가지 방향
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        케이크에 비유하면 통째로 한 조각 vs 한 층씩 자르기.
      </p>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="border border-line rounded p-6">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            수직 슬라이스
          </div>
          <div className="text-xl font-bold text-text leading-snug mb-3">
            한 기능을 UI부터 데이터까지 한 번에
          </div>
          <p className="text-base text-text-sub leading-relaxed mb-3">
            작은 한 조각을 통째로 자른다. 위에서 아래로 모든 층을 한 번에. 한 조각만으로도 모든 맛.
          </p>
          <div className="text-sm text-text-sub italic">
            첫 화면이 동작하면 그 자체로 검증 가능한 산출물
          </div>
        </div>

        <div className="border border-line rounded p-6">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            수평 슬라이스
          </div>
          <div className="text-xl font-bold text-text leading-snug mb-3">
            모든 화면 UI → 로직 → 데이터 순서로
          </div>
          <p className="text-base text-text-sub leading-relaxed mb-3">
            케이크 한 층씩 자른다. UI 층이 끝날 때까지 동작하는 게 없고, 로직 층이 끝날 때까지 검증 불가.
          </p>
          <div className="text-sm text-text-sub italic">
            층이 끝나기 전까지 손에 잡히는 결과가 없다
          </div>
        </div>
      </div>
    </>
  );
}
