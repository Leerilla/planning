// Source: lectures/S8/captures/lecture.md L1395-1417
// Type: Comparison (3-4: 동작 확인 + 3-5: CORS 설정 검증)
// D-035: ✓ → "필수" 텍스트 대체
// D-054: Access-Control-Allow-Origin / Network / Console inline code + accent

export default function S8ActivityStep3Verify() {
  return (
    <>
      {/* Header marker */}
        <div className="h-1 w-12 bg-accent rounded-full mb-3" />
        <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-6">
          활동 3-4 + 3-5 · 동작 확인 + CORS 검증
        </p>

        {/* Title and subtitle */}
        <h1 className="text-3xl font-bold text-text mb-2">
          3-4. 동작 확인 + 3-5. CORS 설정 검증
        </h1>
        <p className="text-base text-text-sub mb-4 max-w-5xl">
          재배포 후 FE에서 시나리오 실행 + 화이트리스트 검증
        </p>

        {/* Subsection 1: 3-4 동작 확인 */}
        <h2 className="text-base font-semibold text-text-sub mb-3">
          3-4. 동작 확인
        </h2>

        {/* Diagram with operation steps — Horizontal */}
        <div className="grid grid-cols-4 gap-2 max-w-6xl mb-5 items-stretch">
          {/* Step 1 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">1</span>
            <div className="text-sm text-text leading-snug flex-1">
              시드 6번 시나리오 실행
              <br />
              <span className="text-text-sub text-xs">· 상품 사진 업로드<br />
              · 키워드 5개 입력<br />
              · "카피 생성" 클릭</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">2</span>
            <div className="text-sm text-text leading-snug flex-1">
              <code className="text-accent font-semibold text-xs">F12</code> Console에 CORS 에러 사라졌는지 확인
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-bg-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-sm">3</span>
            <div className="text-sm text-text leading-snug flex-1">
              Network 탭에서 BE 호출 200 OK 확인
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col gap-2 p-3 border border-divider bg-success-soft rounded-xl">
            <span className="w-7 h-7 rounded-full bg-success text-bg flex items-center justify-center font-bold shrink-0 text-sm">4</span>
            <div className="text-sm text-text leading-snug flex-1">
              결과 화면에 카피 3개 표시
            </div>
          </div>
        </div>

        {/* Subsection 2: 3-5 CORS 설정 검증 */}
        <h2 className="text-base font-semibold text-text-sub mb-3">
          3-5. CORS 설정 검증
        </h2>

        {/* Verification table */}
        <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_120px] bg-bg-soft px-5 py-3 border-b-2 border-divider">
            <div className="flex items-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">점검 항목</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-sm font-bold text-text-muted uppercase tracking-wide">확인</span>
            </div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-[1fr_120px] px-5 py-4 border-b border-divider">
            <div className="flex items-center">
              <span className="text-text">본인 FE 도메인 허용</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold text-sm">필수</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[1fr_120px] px-5 py-4 border-b border-divider">
            <div className="flex items-center">
              <span className="text-text">로컬 개발용 허용</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold text-sm">필수</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-[1fr_120px] px-5 py-4 border-b border-divider">
            <div className="flex items-center">
              <code className="text-warning font-semibold bg-warning-soft px-1.5 py-0.5 rounded text-sm">
                Access-Control-Allow-Origin: *
              </code>
              <span className="text-text ml-1">사용 안 함</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold text-sm">필수</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-[1fr_120px] px-5 py-4">
            <div className="flex items-center">
              <span className="text-text">알 수 없는 도메인 차단</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-accent font-bold text-sm">필수</span>
            </div>
          </div>
        </div>
    </>
  );
}
