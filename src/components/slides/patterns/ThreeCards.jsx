export default function ThreeCards({
  title,
  cards = [],
  emphasized, // number — 1-based card index. dark 배경 강조
}) {
  return (
    <div className="flex flex-col gap-8">
      {title ? (
        <h2 className="text-4xl font-bold tracking-tight text-text">{title}</h2>
      ) : null}

      <div className={`grid gap-6 ${cards.length === 4 ? 'grid-cols-2' : cards.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
        {cards.map((c, i) => {
          // S2 호환 — marker → num, label → title, description → desc
          const cardNum = c.num ?? c.marker;
          const cardTitle = c.title ?? c.label;
          const cardDesc = c.desc ?? c.description;
          const isEmphasized = emphasized === i + 1;
          // Phase I — 강사 #25: card 자체에 emphasis 속성 추가 ('danger' = 붉은 border 강조)
          const isDanger = c.emphasis === 'danger';

          const baseClass =
            'relative overflow-hidden rounded-2xl p-7 flex flex-col gap-4 transition-all duration-200 ease-out hover:-translate-y-1';
          const emphasizedClass = 'bg-text text-bg hover:shadow-2xl';
          const dangerClass =
            'bg-bg-soft border-2 border-danger text-text hover:shadow-xl ' +
            "before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-danger before:origin-bottom before:scale-y-100";
          const regularClass =
            'bg-bg-soft border border-divider text-text hover:shadow-xl hover:border-accent ' +
            "before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-accent before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100";

          const cardClass = isEmphasized
            ? emphasizedClass
            : isDanger
              ? dangerClass
              : regularClass;

          const numClass = isEmphasized
            ? 'text-sm font-semibold tracking-wider text-bg/70'
            : isDanger
              ? 'text-sm font-semibold tracking-wider text-danger'
              : 'text-sm font-semibold tracking-wider text-text-muted';

          const titleClass = isDanger
            ? 'text-2xl font-bold tracking-tight leading-snug text-text'
            : 'text-2xl font-bold tracking-tight leading-snug';

          const descClass = isEmphasized
            ? 'text-base font-medium tracking-tight leading-relaxed text-bg/85 whitespace-pre-line'
            : 'text-base font-medium tracking-tight leading-relaxed text-text-sub whitespace-pre-line';

          // marker 라벨 (위험도/강조 텍스트 — 카드 우상단에 배지)
          const markerLabel = c.markerLabel; // optional

          return (
            <div key={i} className={`${baseClass} ${cardClass}`}>
              <div className="flex items-start justify-between gap-2">
                <div className={numClass}>
                  {cardNum ?? String(i + 1).padStart(2, '0')}
                </div>
                {markerLabel ? (
                  <span
                    className={
                      isDanger
                        ? 'rounded-full border border-danger bg-bg px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-danger whitespace-nowrap'
                        : isEmphasized
                          ? 'rounded-full border border-bg/40 bg-bg/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-bg whitespace-nowrap'
                          : 'rounded-full border border-divider bg-bg px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-text-muted whitespace-nowrap'
                    }
                  >
                    {markerLabel}
                  </span>
                ) : null}
              </div>
              <div className={titleClass}>{cardTitle}</div>
              <div className={descClass}>{cardDesc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
