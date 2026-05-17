// Source: lectures/S6/lecture.md lines 420-427
// Type: concept (default, 2-area: definition + use cases, ACCENT visual)
// Profile: tone=balanced, strength=4 (핵심 패턴)
// Visual: border-l-4 border-accent-strong or bg-accent-soft

'use client';

import Definition from '@/components/slides/patterns/Definition';

export default function S6TheoryC3Stop() {
  return (
    <div className="flex flex-col gap-8 justify-center h-full max-w-5xl">
      <div className="flex items-baseline gap-4">
        <span className="text-accent text-sm font-semibold uppercase tracking-wider">
          DEFINITION
        </span>
        <span className="h-[1px] flex-1 bg-divider" />
      </div>

      <h2 className="text-5xl font-bold tracking-tight text-text leading-[1.05]">
        Stop
      </h2>

      <div className="flex gap-8">
        {/* 좌측 레이블 */}
        <div className="flex-shrink-0 w-40 pt-2">
          <div className="text-accent text-sm font-semibold uppercase tracking-wider">
            핵심 패턴 2
          </div>
        </div>

        {/* 우측 콘텐츠 — accent 강조 */}
        <div className="flex-1 border-l-4 border-accent-strong bg-accent-soft bg-opacity-30 pl-6 py-6 rounded-r-lg flex flex-col gap-6">
          {/* 정의 */}
          <div>
            <p className="text-2xl text-text tracking-tight leading-snug font-medium">
              응답 종료 시 트리거하는 hook. matcher 없음 (흐름 이벤트).
            </p>
          </div>

          {/* 사용 사례 */}
          <div>
            <div className="text-sm font-bold text-text-sub uppercase tracking-wider mb-4">
              사용 사례
            </div>
            <ul className="flex flex-col gap-3">
              <li className="grid grid-cols-[16px_1fr] gap-3 items-start text-base text-text-sub tracking-tight font-medium leading-relaxed">
                <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-accent mt-[10px]" />
                <span>자동 git 커밋 — 모든 작업 완료 후 자동 저장</span>
              </li>
              <li className="grid grid-cols-[16px_1fr] gap-3 items-start text-base text-accent-strong tracking-tight font-semibold leading-relaxed">
                <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-accent-strong mt-[10px]" />
                <span>본 학습 두 번째 핵심 패턴: git-committer 호출</span>
              </li>
            </ul>
          </div>

          {/* aside note */}
          <div className="text-sm text-text-sub italic leading-relaxed border-l-2 border-accent border-opacity-50 pl-4">
            작업자가 "커밋해줘" 입력 안 함. Stop 이벤트가 자동으로 마지막 커밋 트리거.
          </div>
        </div>
      </div>
    </div>
  );
}
