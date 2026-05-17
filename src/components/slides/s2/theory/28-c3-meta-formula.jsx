// Source: lectures/S2/lecture.md lines 138, 142-144
// Type: example (한 줄 공식 + ThreeCards 다영역 적용)

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S2TheoryC3MetaFormula() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          메타 프롬프팅 한 줄 공식
        </span>
      </div>

      {/* 한 줄 공식 — 코드 블록 */}
      <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 mb-6 max-w-5xl">
        <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
          공식
        </div>
        <p className="text-xl font-bold text-text leading-relaxed tracking-tight">
          "<span className="highlight-mark">[X]를 잘 하는 법 3가지</span>를 먼저 알려줘.<br />
          그 다음 <span className="highlight-mark">[Y]를 만들어줘</span>."
        </p>
      </div>

      {/* 다영역 적용 — ThreeCards */}
      <ThreeCards
        title="본 학습 3영역 적용"
        cards={[
          {
            num: 'AREA 1',
            title: '카피 작성',
            desc: '"콜드 메일을 잘 쓰는 법 3원칙을 알려줘. 그 다음 페르소나용 카피 후보 3개를 만들어줘"',
          },
          {
            num: 'AREA 2',
            title: 'PRD 정제',
            desc: '"PRD를 잘 검토하는 법 5가지를 알려줘. 그 다음 본 PRD를 그 5가지 기준으로 검토해줘"',
          },
          {
            num: 'AREA 3',
            title: '코드 빌드',
            desc: '"에이전트 위임을 잘 하는 법 3가지를 알려줘. 그 다음 [화면명] 빌드 명령을 작성해줘"',
          },
        ]}
      />
    </>
  );
}
