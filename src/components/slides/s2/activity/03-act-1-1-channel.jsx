// Source: lectures/S2/lecture.md L192-201
// Type: example (활동 1-1 채널 선택)

export default function S2Activity_1_1_Channel() {
  const channels = [
    { num: '01', name: '이메일', detail: '회사 메일 / 개인 메일' },
    { num: '02', name: '링크드인 DM', detail: '공통 관심사 기반' },
    { num: '03', name: '네이버 카페 쪽지', detail: '카페 활성도에 따라' },
    { num: '04', name: '디스코드/슬랙', detail: '커뮤니티 채널' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-1 · 산출물: 발송 채널 1개
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        페르소나가 활동하는 채널 1개 선택
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        이전 단계 페르소나 5줄 가설의 <span className="highlight-mark">검증 가능 채널</span>이 그대로 입력. 비어 있으면 이 단계에서 다시 채운다.
      </p>

      {/* 4 채널 옵션 — 2x2 grid */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl">
        {channels.map((c) => (
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
