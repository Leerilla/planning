// Source: lectures/S1/lecture.md lines 482-491
// Type: title (### 섹션 표지 + ## 실습 도입)
// D-035: emoji "🌱" "🎯" 제거 → "Seeds" 텍스트
// D-037: Cover 패턴 eyebrow + title + subtitle 활용 + 실습 산출물 카드

import Cover from '@/components/slides/patterns/Cover';

export default function S1ActivitySeedsCover() {
  return (
    <>
      <Cover
        eyebrow="Seeds"
        title="시드 아이디어 6개"
        subtitle={
          <>
            본인 아이디어가 없거나 막연한 작업자를 위한 시드 6개.
            <br />
            본인 아이디어가 있으면 그것을, 없으면 시드 1개를 선택한다.
          </>
        }
      />

      {/* 실습 산출물 안내 */}
      <div className="grid grid-cols-[120px_1fr] gap-4 items-start mt-10 max-w-4xl">
        <span className="text-accent bg-bg-soft border border-accent text-xs font-semibold tracking-wider uppercase rounded-xl px-3 py-2 text-center">
          실습 산출물
        </span>
        <p className="text-lg font-semibold text-text tracking-tight leading-relaxed pt-2">
          1차 가설 워크시트 — <span className="highlight-mark">문제 정의 + 가설 페르소나 6줄 + 핵심 가설 3개</span>
        </p>
      </div>
    </>
  );
}
