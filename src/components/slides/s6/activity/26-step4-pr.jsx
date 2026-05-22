// Source: lectures/S6/lecture.md lines 1038-1046 (#### 4-3. PR 생성)
// Type: example (code scenario)
// Profile: hierarchical / comparison / medium-high / balanced
// Emphasis: definition (명령 문법 이해 + GitHub 자동화 키워드)

export default function S6ActivityStep4PR() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-3 · PR 생성
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-1">
        4-3. PR 생성
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-6 max-w-4xl">
        gh pr create로 Issue #2 자동 닫힘
      </p>

      <div className="max-w-4xl">
        <pre className="bg-bg-soft px-6 py-5 rounded-xl border border-divider text-sm font-medium leading-6 text-text overflow-x-auto">
          <code>{`gh pr create \\
  --title "feat: Issue #2 이미지 업로드 처리" \\
  --body "Closes #2"`}</code>
        </pre>
      </div>

      <div className="mt-6 max-w-4xl">
        <p className="text-sm font-medium text-text mb-3">
          <span className="font-semibold">본인 리뷰 후 병합.</span> PR 본문에 <span className="bg-bg-soft px-2 py-1 rounded-xl text-accent font-semibold">Closes #2</span> 키워드를 포함하면 PR을 병합할 때 Issue #2가 자동으로 닫힌다.
        </p>
      </div>

      <div className="mt-6 max-w-4xl border-l-4 border-accent bg-bg-soft px-7 py-5 rounded-r-md">
        <p className="text-xs font-medium text-text-sub leading-relaxed">
          GitHub는 PR 본문의 특정 키워드(Closes, Fixes, Resolves 등)를 감지하면, PR이 병합될 때 자동으로 연결된 Issue를 닫는다. 이것이 자동화의 핵심이다.
        </p>
      </div>
    </>
  );
}
