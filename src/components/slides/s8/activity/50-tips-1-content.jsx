// Source: lectures/S8/captures/lecture.md L1633-1639 (#### 어휘가 명령의 정확성을 결정, #### F12는 모든 디버깅의 출발)
// Type: Concept (2 cards)
// D-050: lecture.md 원문 보존 / D-054: 개발 어휘 및 PORT/CORS/NEXT_PUBLIC_ inline code accent

export default function S8ActivityTip1Content() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent font-bold text-sm uppercase tracking-widest">
          활동 Tip 1 · 최소 개발 지식
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-6">최소 개발 지식 팁</h2>

      {/* Cards */}
      <div className="flex flex-col gap-3 max-w-5xl">
        {/* Card 1 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">어휘가 명령의 정확성을 결정</div>
          <p className="text-base text-text leading-relaxed">
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">PORT</code>,{' '}
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">CORS</code>,{' '}
            <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">NEXT_PUBLIC_</code>{' '}
            같은 어휘를 알면 AI 명령이 정확. 모르면 추측 명령으로 결과 어긋남.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">F12는 모든 디버깅의 출발</div>
          <p className="text-base text-text leading-relaxed">
            브라우저 개발자 도구. Console 탭에서 에러 메시지 복사하는 동작이 표준.
          </p>
        </div>
      </div>
    </div>
  );
}
