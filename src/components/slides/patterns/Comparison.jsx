export default function Comparison({
  title,
  bad,
  good,
}) {
  return (
    <div className="flex flex-col gap-10">
      {title ? (
        <h2 className="text-4xl font-bold tracking-tight text-text">{title}</h2>
      ) : null}

      <div className="grid grid-cols-2 gap-6 items-stretch">
        <Side variant="bad" data={bad} />
        <Side variant="good" data={good} />
      </div>
    </div>
  );
}

function Side({ variant, data }) {
  const isGood = variant === 'good';
  const labelClass = isGood
    ? 'text-success text-sm font-semibold tracking-wider uppercase'
    : 'text-danger text-sm font-semibold tracking-wider uppercase';
  const borderClass = isGood
    ? 'border-l-4 border-success hover:border-l-[6px]'
    : 'border-l-4 border-danger hover:border-l-[6px]';
  const bgClass = isGood ? 'bg-success-soft' : 'bg-bg-soft';
  const dotClass = isGood ? 'bg-success' : 'bg-danger';

  return (
    <div
      className={`rounded-2xl ${bgClass} ${borderClass} p-7 flex flex-col gap-6 transition-all duration-200 ease-out hover:shadow-xl`}
    >
      <div className={labelClass}>{data?.label ?? (isGood ? 'GOOD' : 'BAD')}</div>
      <div className="text-2xl font-bold tracking-tight text-text leading-snug">
        {data?.statement}
      </div>
      <ul className="flex flex-col gap-3">
        {(data?.points ?? []).map((p, i) => (
          <li
            key={i}
            className="flex gap-3 items-start text-base font-medium text-text-sub tracking-tight"
          >
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full ${dotClass} mt-2.5 shrink-0`}
              aria-hidden
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
