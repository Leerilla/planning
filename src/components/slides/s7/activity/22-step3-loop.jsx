// Source: lectures/S7/lecture.md L787-806 (3-3. 검증 루프 진행)
// Type: process (inline JSX — 5-step vertical loop)

export default function S7Activity_3_2_Loop() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-2 · 검증 루프
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        3-2. 검증 루프 진행
      </h2>

      <p className="text-base text-text-sub mb-4">
        검증 → 작업자 확인 → 수정 → 재검증 → 통과
      </p>

      <div className="flex flex-col gap-3 max-w-3xl">
        {[
          {
            step: 1,
            label: (
              <>
                <code className="text-accent font-semibold bg-bg px-1.5 py-0.5 rounded text-sm">
                  @scenario-verifier
                </code>
                {' '}첫 호출 → 보고서
              </>
            ),
          },
          {
            step: 2,
            label: '작업자가 막힘 지점 1-2개 직접 확인 — 보고서가 가리킨 파일·줄 열어보기 / 실제로 문제가 있는지 검증',
          },
          {
            step: 3,
            label: '수정 코드 작성 (위임 3원칙 + 자료 6의 자동 hook 작동)',
          },
          {
            step: 4,
            label: (
              <>
                다시{' '}
                <code className="text-accent font-semibold bg-bg px-1.5 py-0.5 rounded text-sm">
                  @scenario-verifier
                </code>
                {' '}호출
              </>
            ),
          },
          {
            step: 5,
            label: '통과까지 반복',
          },
        ].map((item) => (
          <div
            key={item.step}
            className="flex items-start gap-4 p-4 border border-divider bg-bg-soft rounded-xl"
          >
            <div className="w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0">
              {item.step}
            </div>
            <p className="text-base text-text leading-relaxed pt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <aside className="mt-4 border-l-4 border-accent bg-accent-soft rounded-r-xl px-6 py-3 max-w-3xl">
        <p className="text-sm text-text leading-relaxed">
          루프의 본질: scenario-verifier는 검증만, 수정은 메인 에이전트. 책임 분리.
        </p>
      </aside>
    </>
  );
}
