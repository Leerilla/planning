// Source: lectures/S5/lecture.md lines 44-62 (#### 수직 슬라이스의 4가지 이점 + #### 시드 6번 이점 적용)
// Type: concept (4-card grid, 시드 6번 사례 통합)

export default function S5TheoryC1FourBenefits() {
  const benefits = [
    {
      label: '이점 1',
      title: '패턴 복사',
      meaning: '한 화면이 동작하면 그 패턴을 다른 화면에 복사',
      example: '카피 입력 화면 동작 → 같은 패턴으로 결과 화면',
    },
    {
      label: '이점 2',
      title: '자신감 유지',
      meaning: '동작하는 무언가가 손에 있으면 빌드 자신감',
      example: '첫 화면 떠 있는 브라우저 → 빌드 자신감 유지',
    },
    {
      label: '이점 3',
      title: '핵심 가설 검증',
      meaning: 'PRD의 핵심 가설을 가장 빨리 검증',
      example: '셀러스쿨 카페 셀러에게 "이 화면 써보세요" → 즉시 검증',
    },
    {
      label: '이점 4',
      title: '완성 가능성',
      meaning: '짧은 빌드 시간 안에 완성 가능한 단위',
      example: '한 화면 빌드 → 짧은 시간 안에 완성',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          수직 슬라이스의 4가지 이점
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        한 기능 통째로의 4가지 이점
      </h2>

      <p className="text-base text-text-sub mb-6 max-w-3xl">
        시드 6번(1인 셀러 카피 생성기)에 적용한 사례와 함께.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-6xl">
        {benefits.map((b, i) => (
          <div key={i} className="border border-divider rounded p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                {b.label}
              </span>
              <span className="text-base font-bold text-text">{b.title}</span>
            </div>
            <p className="text-sm text-text leading-relaxed mb-2">{b.meaning}</p>
            <div className="text-sm text-text-sub leading-relaxed border-l-2 border-accent pl-3">
              {b.example}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
