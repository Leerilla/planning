// Source: lectures/S8/activity lecture.md Step 4-3 (이벤트 삽입)
// Type: Example (4-3: 이벤트 추적 코드 삽입 명령)
// D-054: window.clarity inline code + accent

export default function S8ActivityStep4EventsInsert() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 4-3 · 이벤트 추적 코드 삽입
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          4-3. 이벤트 추적 코드 삽입 명령
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-4xl">
          Claude Code에 전달 — <code className="text-accent font-semibold bg-bg-soft px-1.5 py-0.5 rounded text-sm">window.clarity("set", "event_name", "value")</code> 코드 삽입
        </p>

        {/* Pre block with Claude Code prompt */}
        <pre className="bg-bg-soft border border-divider rounded-xl p-5 text-sm whitespace-pre-line max-w-4xl text-text leading-relaxed font-inherit">
{`docs/prd.md의 핵심 시나리오에서 추적할 이벤트 3개를 결정해줘.

기준:
1. 페이지 진입 (자동으로 잡힘)
2. 핵심 버튼 클릭 (시드 6번 기준 "카피 생성")
3. 핵심 기능 완료 (시드 6번 기준 "카피 복사")

각 이벤트에 대해 Microsoft Clarity의 custom event 추적 코드
(window.clarity("set", "event_name", "value"))를
어디에 삽입해야 할지 분석한 뒤 코드를 추가해줘.

이벤트명은 PRD 가설과 연결 가능하게 명명해줘
(예: copy_generation_completed).`}
        </pre>
    </>
  );
}
