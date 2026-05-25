// Source: lectures/S8/captures/lecture.md line 349-361
// Type: terms, emphasis: default
// Profile: hierarchical / comparison / balanced
// D-052: 9 terms → 2-col grid split
// S8 T19b (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화

export default function S8T2Terms({ deckMeta }) {
  const leftTerms = [
    { term: "HTTP 요청·응답", definition: "FE와 BE의 통신 패턴" },
    { term: "도메인", definition: "서비스의 사람이 읽는 주소" },
    { term: "포트", definition: "서버 내부의 통신 문" },
    { term: "환경 변수", definition: "코드 밖에서 주입되는 값" },
    { term: "빌드", definition: "코드를 실행 가능한 형태로 변환" },
  ];

  const rightTerms = [
    { term: "배포", definition: "빌드 결과물을 서버에 올림" },
    { term: "API 엔드포인트", definition: "BE가 요청을 받는 주소" },
    { term: "헬스체크", definition: "BE 살아있는지 확인하는 표준" },
    { term: "개발자 도구 (F12)", definition: "브라우저 내부 동작을 보는 도구" },
  ];

  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-6xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · 용어 해설
        </span>
      </div>

      <h2 className="text-2xl font-bold text-text leading-snug">
        챕터 용어 해설
      </h2>

      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        9개 어휘 — 본 챕터의 핵심
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-6xl">
        <div className="flex flex-col gap-2">
          {leftTerms.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-0.5 px-4 py-2.5 border border-divider bg-bg-soft rounded-xl"
            >
              <div className="text-xs font-bold text-text">
                {item.term}
              </div>
              <div className="text-xs text-text-sub leading-snug">
                {item.definition}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {rightTerms.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-0.5 px-4 py-2.5 border border-divider bg-bg-soft rounded-xl"
            >
              <div className="text-xs font-bold text-text">
                {item.term}
              </div>
              <div className="text-xs text-text-sub leading-snug">
                {item.definition}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
