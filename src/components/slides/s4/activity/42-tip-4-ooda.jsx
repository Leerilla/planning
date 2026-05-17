// Source: lectures/S4/lecture.md lines 1037-1045 (### OODA 루프와 Permissions 팁)
// Type: activity (2-card)

export default function S4Tip4Ooda() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Tips 4 · OODA 루프와 Permissions 팁
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        Permissions = 자율과 안전의 균형점
      </h2>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div className="border border-line rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            Permissions는 단순 차단이 아님
          </div>
          <p className="text-base text-text leading-relaxed">
            OODA 루프의 Decide→Act 사이 작업자 개입 지점.
            <br />
            도구 위험도에 따라 자율 / 확인 / 금지 분배.
          </p>
        </div>

        <div className="border border-line rounded p-5">
          <div className="text-xs uppercase tracking-wider text-accent mb-2">
            권장 템플릿을 그대로 사용
          </div>
          <p className="text-base text-text leading-relaxed">
            자유 변형은 자가 학습 영역.
            <br />
            본 학습은 템플릿 그대로 사용으로 안전과 속도 균형.
          </p>
        </div>
      </div>
    </>
  );
}
