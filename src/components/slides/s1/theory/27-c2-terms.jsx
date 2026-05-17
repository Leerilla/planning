// Source: lectures/S1/lecture.md lines 333-341
// Type: terms (5행 용어 표)
// D-040: 표 형식 → inline 2열 grid (s16와 동일 패턴)

export default function S1TheoryC2Terms() {
  const terms = [
    { term: 'AI 시대 기획', definition: 'AI 도구로 사이클이 빨라진 기획 방식' },
    { term: '사이클 (Cycle)', definition: '가설 수립에서 검증, 수정의 한 바퀴' },
    { term: '속도와 깊이의 분리', definition: '가속은 속도를 바꾸지 깊이를 바꾸지 않는다' },
    { term: '판단 위임의 함정', definition: '작업자가 판단을 AI에 맡기면 페르소나를 모른 채로 끝난다' },
    { term: '행동 · 동기 · 맥락', definition: '페르소나를 묘사하는 세 축. 인구통계만으로는 부족' },
  ];

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          챕터 용어 해설 — AI 시대 기획의 변화
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        핵심 용어 정리
      </h2>

      {/* Terms — 2 columns */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-5xl">
        {terms.map((t, i) => (
          <div
            key={i}
            className="border-l-2 border-accent pl-4 py-2"
          >
            <div className="text-base font-bold text-text tracking-tight leading-snug">
              {t.term}
            </div>
            <div className="text-sm text-text-sub tracking-tight leading-relaxed mt-1">
              {t.definition}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
