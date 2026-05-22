// Source: lectures/S3/lecture.md lines 254-289 (요소 5 — 사용자 스토리로 변경, 2026-05-12 강사 수정)
// Type: concept (inline 2-area — 좌 정의·목적 / 우 양식 + 시드 6 예시)

export default function S3TheoryC2E5UserStory() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          5요소 · 5 — 사용자 스토리
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        사용자 스토리 — 페르소나 관점의 가치 서술
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-6xl">
        <div className="border border-divider rounded p-6 bg-bg-soft">
          <div className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            정의와 목적
          </div>
          <p className="text-lg text-text font-semibold mb-5 leading-relaxed border-l-2 border-accent pl-4">
            "누가 / 무엇을 / 왜" 한 문장으로
            <br />
            기능을 사용자 관점에서 서술한 짧은 단위.
          </p>
          <ul className="space-y-2 text-base text-text-sub leading-relaxed">
            <li>· 페르소나가 받는 가치를 명시</li>
            <li>· 작업 단위로 검증 가능 (한 스토리 = 한 검증)</li>
            <li>· 기능과 페르소나 사이의 다리</li>
          </ul>
        </div>

        <div className="border border-divider rounded p-6">
          <div className="text-xs font-semibold tracking-wider uppercase text-text-sub mb-3">
            양식 + 시드 6 예시
          </div>
          <pre className="text-sm text-text-sub bg-bg-soft rounded p-3 mb-3 leading-relaxed whitespace-pre-wrap">{`[페르소나]로서
[목표]를
[이유]로 원한다`}</pre>
          <pre className="text-sm text-text bg-bg-soft border-l-2 border-accent rounded p-3 leading-relaxed whitespace-pre-wrap">{`1인 셀러로서
상품 사진과 키워드 5개로
5초 이내에 카피 3개를 받기를 원한다
— 작성 시간을 1-2시간에서 5분으로 줄이기 위해`}</pre>
        </div>
      </div>
    </>
  );
}
