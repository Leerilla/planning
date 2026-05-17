// Source: lectures/S2/lecture.md L255-264
// Type: example (활동 2-1 페르소나 커뮤니티 결정)

export default function S2Activity_2_1_Community() {
  const communities = [
    { num: '01', name: '네이버 카페', detail: '"스타트업 PM 모임" / "동호회 운영자" 등' },
    { num: '02', name: 'Reddit 한국어', detail: 'r/KoreanStartups 등' },
    { num: '03', name: '디스콰이엇·인디핵커', detail: '한국 메이커 커뮤니티' },
    { num: '04', name: '기타 활성 커뮤니티', detail: '페르소나 활동이 활발한 한국 채널' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-1 · 산출물: 수집 대상 커뮤니티 1개
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        페르소나가 글을 남기는 커뮤니티 1개
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        결정이 안 되면 <span className="highlight-mark">ChatGPT에 "[페르소나]가 활동하는 한국 온라인 커뮤니티 리스트"</span>를 묻고 출처 1개를 클릭해 검증한 뒤 선정한다.
      </p>

      {/* 4 options — 2x2 */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {communities.map((c) => (
          <div
            key={c.num}
            className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5 hover:bg-success-soft hover:border-success transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-accent text-xl font-bold tabular-nums tracking-wider group-hover:text-success transition-colors">
                {c.num}
              </span>
              <span className="text-lg font-bold text-text tracking-tight leading-tight">
                {c.name}
              </span>
            </div>
            <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed">
              {c.detail}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
