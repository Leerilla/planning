// Source: lectures/S4/lecture.md lines 1047-1055 (### GitHub 셋업 팁)
// Type: activity (2-card)

export default function S4Tip5Github() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 5 · GitHub 셋업 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        Issue는 다음 단계로, 커밋은 자연어로
      </h2>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div className="border border-divider rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            Issue 등록은 다음 단계로
          </div>
          <p className="text-base text-text leading-relaxed">
            본 단계에서 Task를 Issue로 등록하지 않음.
            <br />
            화면 분석 후 그룹화된 Task로 Issue 등록이 자연스러운 흐름.
          </p>
        </div>

        <div className="border border-divider rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            자연어 커밋
          </div>
          <p className="text-base text-text leading-relaxed">
            git 명령 직접 입력 안 함.
            <br />
            "현재 셋업을 커밋해줘"로 운영. /project/claude.md 규칙을 따른 커밋 메시지 자동 생성.
          </p>
        </div>
      </div>
    </>
  );
}
