// Source: lectures/S1/lecture.md lines 574-610
// Type: example (활동 1-2 — 5 Whys로 문제 깊이 파기)
// D-035: emoji 0건 / ↓ 화살표 사용 OK (텍스트)
// D-040: 활동 콘텐츠 = inline custom (빈 양식 + 시드 6 적용 sequential + 진짜 문제)

export default function S1Activity_1_2_FiveWhys() {
  const whys = [
    '어떤 키워드를 넣어야 검색에 잘 잡히는지 매번 찾아본다',
    '카테고리마다 검색 키워드 패턴이 다르고 트렌드가 바뀐다',
    '키워드만 넣으면 부자연스러워 보여서 문장으로 다듬는 시간이 든다',
    '부자연스러운 카피는 클릭률이 떨어진다는 경험이 있다',
    '클릭률이 떨어지면 광고비 ROAS가 무너져 한 달 수익 직접 타격',
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-2 · 10분 · 산출물: 진짜 문제 한 줄
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        5 Whys로 문제 깊이를 판다
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        1-1의 한 줄은 보통 증상에 가깝다. "왜?"를 3-5번 물어 진짜 문제로 내려간다.
      </p>

      {/* 2-col: 좌 빈 양식 안내 / 우 시드 6 적용 sequential */}
      <div className="grid grid-cols-[320px_1fr] gap-5 max-w-5xl items-start">
        {/* 좌: 빈 양식 + 진짜 문제 결론 */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5">
            <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
              빈 양식
            </div>
            <p className="text-sm font-medium text-text-sub leading-relaxed tracking-tight whitespace-pre-line">
{`[증상] {1-1의 한 줄}
   ↓ 왜?
[1]
   ↓ 왜?
[2]
   ↓ 왜?
[3]`}
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5">
            <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
              진짜 문제
            </div>
            <p className="text-base font-bold text-text leading-relaxed tracking-tight">
              "정리 시간"이 아니라 <span className="highlight-mark">키워드 자연화에 따른 ROAS 직접 타격</span>
            </p>
          </div>
        </div>

        {/* 우: 시드 6 5 Whys sequential 인과 흐름 */}
        <div>
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            시드 6 적용
          </div>

          {/* 증상 */}
          <div className="rounded-xl border border-divider bg-bg-soft p-3 mb-1">
            <div className="text-text-muted text-[10px] font-semibold tracking-wider uppercase mb-1">
              증상
            </div>
            <p className="text-sm font-medium text-text leading-relaxed tracking-tight">
              상세페이지 카피 작성에 한 상품당 1-2시간이 든다
            </p>
          </div>

          {/* 5 Whys 단계 */}
          {whys.map((why, i) => (
            <div key={i}>
              <div className="flex justify-center py-0.5">
                <span className="text-accent text-sm font-bold leading-none">↓ 왜?</span>
              </div>
              <div className={`rounded-xl border-l-4 ${i === whys.length - 1 ? 'border-accent bg-success-soft' : 'border-divider bg-bg-soft'} p-3 grid grid-cols-[32px_1fr] gap-3 items-center`}>
                <span className="text-accent text-base font-bold tabular-nums tracking-wider">
                  {i + 1}
                </span>
                <p className={`text-sm leading-relaxed tracking-tight ${i === whys.length - 1 ? 'font-semibold text-text' : 'text-text-sub font-medium'}`}>
                  {why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
