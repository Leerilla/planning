// Source: lectures/S8/captures/lecture.md L138-149 (#### 왜 본 챕터가 필요한가)
// Type: concept, emphasis: key-message
// D-050: lecture.md 원문 보존

export default function S8TheoryC2WhyChapter() {
  return (
    <div className="flex flex-col gap-6 h-full justify-center max-w-5xl">
      {/* Header marker + label */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-12 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          이론 2 · 동기
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text">
        왜 본 챕터가 필요한가
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub max-w-4xl leading-relaxed">
        본 자료는 개발 지식이 필요한 단위. 막힘 줄이는 핵심은 어휘
      </p>

      {/* Two sections */}
      <div className="flex flex-col gap-4 max-w-4xl">
        {/* Section 1: 모르면 */}
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-4">
          <p className="text-warning font-bold text-sm uppercase tracking-widest mb-2">
            모르면
          </p>
          <p className="text-base text-text leading-relaxed">
            에러 메시지 못 읽음 → 추측 명령 → 결과 어긋남
          </p>
        </div>

        {/* Section 2: 알면 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
            알면
          </p>
          <p className="text-base text-text leading-relaxed">
            어디가 문제인지 짐작 → 정확한 명령 → 1회 해결
          </p>
        </div>
      </div>

      {/* Aside note */}
      <aside className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          본 챕터의 목표는 코딩 능력이 아닌 개발 어휘. 단어와 개념이 머리에 있으면 AI와의 대화가 정확해진다.
        </p>
      </aside>
    </div>
  );
}
