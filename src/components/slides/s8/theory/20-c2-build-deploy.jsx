// Source: lectures/S8/captures/lecture.md line 249-277
// Type: concept, emphasis: definition
// Profile: hierarchical / comparison / balanced

export default function S8T2BuildDeploy({ deckMeta }) {
  return (
    <div className="flex flex-col gap-6 justify-center h-full max-w-5xl">
      {/* Header marker */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <span className="text-text-sub font-semibold text-xs uppercase tracking-wider">
          이론 2 · §2.5 빌드와 배포
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-text mb-2">
        5. 빌드와 배포
      </h2>

      {/* Subtitle */}
      <p className="text-base text-text-sub mb-6 max-w-4xl">
        코드를 공개하는 2단계
      </p>

      {/* Definition table */}
      <div className="overflow-hidden rounded-2xl border border-divider mb-4 max-w-4xl">
        <table className="w-full">
          <thead>
            <tr className="bg-bg-soft border-b-2 border-divider">
              <th className="px-5 py-3 text-left text-sm font-bold text-text-muted uppercase tracking-wide">단계</th>
              <th className="px-5 py-3 text-left text-sm font-bold text-text-muted uppercase tracking-wide">의미</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-divider">
              <td className="px-5 py-4 text-sm font-bold text-text">빌드 (Build)</td>
              <td className="px-5 py-4 text-sm text-text">코드를 실행 가능한 형태로 변환</td>
            </tr>
            <tr>
              <td className="px-5 py-4 text-sm font-bold text-text">배포 (Deploy)</td>
              <td className="px-5 py-4 text-sm text-text">빌드된 결과물을 서버에 올림</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Flow diagram — Horizontal */}
      <div className="grid grid-cols-5 gap-2 max-w-6xl items-stretch mb-4">
        {/* Step 1 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
          <div className="text-sm text-text leading-snug flex-1">
            <code className="text-accent font-semibold text-xs">git push</code>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
          <div className="text-sm text-text leading-snug flex-1">
            Vercel/Railway<br />자동 감지
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
          <div className="text-sm text-text leading-snug flex-1">
            빌드 단계
            <br />
            <span className="text-text-sub text-xs">· 의존성 설치<br />· 코드 컴파일<br />· 정적 자산 생성</span>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
          <div className="text-sm text-text leading-snug flex-1">
            배포 단계
            <br />
            <span className="text-text-sub text-xs">· 서버 업로드<br />· URL에 연결</span>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
          <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">5</span>
          <div className="text-sm text-text leading-snug flex-1">
            공개 URL로<br />접근 가능
          </div>
        </div>
      </div>

      {/* Aside */}
      <aside className="border-l-4 border-divider bg-bg-soft rounded-r-xl px-6 py-3 max-w-4xl">
        <p className="text-sm text-text leading-relaxed">
          빌드 실패와 배포 실패는 다른 문제. 빌드 실패는 <span className="font-semibold">코드 자체</span>의 문제, 배포 실패는 <span className="font-semibold">서버 설정</span>의 문제. 로그 위치도 다름.
        </p>
      </aside>
    </div>
  );
}
