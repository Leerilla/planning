// Source: lectures/S8/captures/lecture.md line 249-277
// Type: concept, emphasis: definition
// Profile: hierarchical / comparison / balanced
// S8 T19a (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 강화

export default function S8T2BuildDeploy({ deckMeta }) {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-base">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · 빌드와 배포
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-text leading-snug">
        5. 빌드와 배포
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-text-sub max-w-4xl leading-snug">
        코드를 공개하는 2단계
      </p>

      {/* Definition table */}
      <div className="overflow-hidden rounded-xl border border-divider max-w-5xl">
        <table className="w-full">
          <thead>
            <tr className="bg-bg-soft border-b-2 border-divider">
              <th className="px-4 py-2 text-left text-xs font-bold text-text-muted uppercase tracking-wide">단계</th>
              <th className="px-4 py-2 text-left text-xs font-bold text-text-muted uppercase tracking-wide">의미</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-divider">
              <td className="px-4 py-2 text-xs font-bold text-text">빌드 (Build)</td>
              <td className="px-4 py-2 text-xs text-text">코드를 실행 가능한 형태로 변환</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-xs font-bold text-text">배포 (Deploy)</td>
              <td className="px-4 py-2 text-xs text-text">빌드된 결과물을 서버에 올림</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Flow diagram — Horizontal */}
      <div className="grid grid-cols-5 gap-2 max-w-5xl items-stretch">
        {/* Step 1 */}
        <div className="flex flex-col gap-1.5 p-2.5 border border-divider bg-bg-soft rounded-xl">
          <span className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-xs">1</span>
          <div className="text-xs text-text leading-snug flex-1">
            <code className="text-accent font-semibold">git push</code>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-1.5 p-2.5 border border-divider bg-bg-soft rounded-xl">
          <span className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-xs">2</span>
          <div className="text-xs text-text leading-snug flex-1">
            Vercel/Railway<br />자동 감지
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-1.5 p-2.5 border border-divider bg-bg-soft rounded-xl">
          <span className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-xs">3</span>
          <div className="text-xs text-text leading-snug flex-1">
            빌드 단계
            <br />
            <span className="text-text-sub">· 의존성 설치<br />· 코드 컴파일<br />· 정적 자산 생성</span>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col gap-1.5 p-2.5 border border-divider bg-bg-soft rounded-xl">
          <span className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-xs">4</span>
          <div className="text-xs text-text leading-snug flex-1">
            배포 단계
            <br />
            <span className="text-text-sub">· 서버 업로드<br />· URL에 연결</span>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col gap-1.5 p-2.5 border border-divider bg-bg-soft rounded-xl">
          <span className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-xs">5</span>
          <div className="text-xs text-text leading-snug flex-1">
            공개 URL로<br />접근 가능
          </div>
        </div>
      </div>

      {/* Aside */}
      <aside className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-4 py-2.5 max-w-5xl">
        <p className="text-xs text-text leading-snug">
          빌드 실패와 배포 실패는 다른 문제. 빌드 실패는 <span className="font-semibold">코드 자체</span>의 문제, 배포 실패는 <span className="font-semibold">서버 설정</span>의 문제. 로그 위치도 다름.
        </p>
      </aside>
    </div>
  );
}
