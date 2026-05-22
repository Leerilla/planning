// Source: lectures/S6/lecture.md lines 299-307
// Type: comparison (4-row frontmatter 양식 표)
// frontmatter 필드 정의 — name/description/tools/model 좌우

export default function S6TheoryC2Frontmatter() {
  const fields = [
    {
      field: 'name',
      description: 'sub-agent 식별자. 영문 소문자와 하이픈',
    },
    {
      field: 'description',
      description: '언제 호출되는지',
    },
    {
      field: 'tools',
      description: '사용 가능 도구. 최소 권한',
    },
    {
      field: 'model',
      description: '사용 모델. sonnet 권장',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          sub-agent 메타정보 양식
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        frontmatter 4필드
      </h2>

      <div className="rounded border border-divider overflow-hidden max-w-6xl">
        <div className="grid grid-cols-2 bg-bg-soft border-b border-divider">
          <div className="px-6 py-3 text-sm font-semibold tracking-wider uppercase text-text-sub">
            필드
          </div>
          <div className="px-6 py-3 text-sm font-semibold tracking-wider uppercase text-text-sub border-l border-divider">
            의미
          </div>
        </div>
        {fields.map((f, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 ${i < fields.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="px-6 py-4 text-base text-accent font-semibold">
              {f.field}
            </div>
            <div className="px-6 py-4 text-base text-text-sub border-l border-divider leading-relaxed">
              {f.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
