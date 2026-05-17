// Source: lectures/S7/lecture.md L912-922 (#### 모든 에러에 적용 + 에러 메시지는 정보의 보고 + 무한 루프 차단)
// Type: concept (3-col tips)

export default function S7ActivityTips3Content() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 Tip 3 · 자율 디버깅 3원칙
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-6">
        자율 디버깅 3원칙 팁
      </h2>

      <div className="flex flex-col gap-3 max-w-5xl">
        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            모든 에러에 적용
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            한 번 익히면 본 학습 후에도 평생 사용. AI 협업의 보편 패턴.
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            에러 메시지는 정보의 보고
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            길고 무서워 보여도 그대로 복사. 요약 금지. 스택 트레이스가 디버깅의 핵심.
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <div className="text-accent font-bold text-base mb-2">
            Tip 제목
          </div>
          <p className="text-base text-text leading-relaxed">
            무한 루프 차단
          </p>
        </div>

        <div className="border-l-4 border-accent bg-accent-soft rounded-r-xl px-5 py-4">
          <p className="text-base text-text leading-relaxed">
            같은 자리 3회 이상 맴돌면 "어디서 막혔는지 정리해줘"부터.
          </p>
        </div>
      </div>
    </>
  );
}
