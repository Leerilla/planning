export default function SectionDivider({
  number,
  title,
  subtitle,
}) {
  return (
    <div className="flex flex-col gap-8 justify-center h-full">
      <div className="text-accent text-sm font-semibold tracking-wider uppercase">
        SECTION {String(number).padStart(2, '0')}
      </div>

      <h2 className="text-6xl font-bold tracking-tight text-text leading-[1.05]">
        {title}
      </h2>

      {subtitle ? (
        <p className="text-2xl text-text-sub tracking-tight max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
