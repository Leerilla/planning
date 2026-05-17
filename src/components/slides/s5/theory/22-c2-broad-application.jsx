// Source: lectures/S5/lecture.md lines 214-226 (#### 본 학습 전반 적용)
// Type: concept (6-card)

export default function S5TheoryC2BroadApplication() {
  const areas = [
    { title: '본 단계 빌드 명령', when: '정식 도입' },
    { title: '다음 단계 두 번째 화면 빌드', when: 'S6+' },
    { title: 'sub-agent 호출', when: 'S7+' },
    { title: 'hooks 정의', when: 'S7+' },
    { title: 'E2E 테스트 시나리오', when: 'S7+' },
    { title: '배포 명령', when: 'S9' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          본 학습 전반 적용
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        위임 3원칙이 적용되는 곳
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        한 번 익히면 본 학습 후의 모든 AI 협업에 평생 쓰는 사고 방식.
      </p>

      <div className="grid grid-cols-3 gap-4 max-w-6xl">
        {areas.map((a, i) => (
          <div key={i} className="border border-line rounded p-4">
            <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
              {a.when}
            </div>
            <p className="text-base text-text leading-snug">{a.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
