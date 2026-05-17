// Source: lectures/S5/lecture.md lines 308-318 (#### 요소 3: 입력에 대한 반응)
// Type: concept (3-row check + aside)

export default function S5TheoryC3Element3() {
  const reactions = [
    '콘솔에 출력되거나',
    '화면에 텍스트가 추가되거나',
    '다른 페이지로 이동',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          요소 3 · 입력에 대한 반응
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-3">
        입력 후 무언가 일어난다
      </h2>

      <p className="text-base text-text-sub mb-8 max-w-3xl">
        입력 후 아무 일도 일어나지 않으면 동작이 아니다.
      </p>

      <div className="space-y-4 max-w-4xl">
        {reactions.map((r, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-accent pl-4 py-3">
            <span className="text-lg font-bold text-accent tabular-nums shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-lg text-text leading-relaxed">{r}</p>
          </div>
        ))}
      </div>
    </>
  );
}
