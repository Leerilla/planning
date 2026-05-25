// Source: lectures/S8/captures/lecture.md L1395-1417
// Type: Comparison (3-4: 동작 확인 + 3-5: CORS 설정 검증)
// D-054: Access-Control-Allow-Origin / Network / Console inline code + accent
// S8 T22 (2026-05-25): 강사 요구 — 높이 축소 / 밀집도 향상
//                       4-step horizontal 패딩/폰트 축소, 표 셀 py-4→2 text-sm→xs

export default function S8ActivityStep3Verify() {
  const checkRows = [
    { label: '본인 FE 도메인 허용', tone: 'accent' },
    { label: '로컬 개발용 허용', tone: 'accent' },
    {
      label: (
        <>
          <code className="text-warning font-semibold bg-warning-soft px-1.5 py-0.5 rounded">
            Access-Control-Allow-Origin: *
          </code>
          <span className="text-text ml-1">사용 안 함</span>
        </>
      ),
      tone: 'accent',
    },
    { label: '알 수 없는 도메인 차단', tone: 'accent' },
  ];

  return (
    <>
      <div className="h-1 w-12 bg-accent rounded-full mb-2" />
      <p className="text-text-sub font-semibold text-xs uppercase tracking-wider mb-2">
        활동 3-4 + 3-5 · 동작 확인 + CORS 검증
      </p>

      <h1 className="text-2xl font-bold text-text leading-snug mb-1">
        3-4. 동작 확인 + 3-5. CORS 설정 검증
      </h1>
      <p className="text-sm text-text-sub mb-2 max-w-5xl">
        재배포 후 FE에서 시나리오 실행 + 화이트리스트 검증
      </p>

      <h2 className="text-xs font-semibold text-text-sub uppercase tracking-wider mb-1.5">
        3-4. 동작 확인
      </h2>

      <div className="grid grid-cols-4 gap-2 max-w-5xl mb-2 items-stretch">
        <div className="flex flex-col gap-1 p-2 border border-divider bg-bg-soft rounded-xl">
          <span className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-xs">1</span>
          <div className="text-xs text-text leading-snug flex-1">
            시드 6번 시나리오 실행
            <br />
            <span className="text-text-sub">· 상품 사진 업로드<br />· 키워드 5개 입력<br />· "카피 생성" 클릭</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 border border-divider bg-bg-soft rounded-xl">
          <span className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-xs">2</span>
          <div className="text-xs text-text leading-snug flex-1">
            <code className="text-accent font-semibold">F12</code> Console에 CORS 에러 사라졌는지 확인
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 border border-divider bg-bg-soft rounded-xl">
          <span className="w-6 h-6 rounded-full bg-accent text-bg flex items-center justify-center font-bold shrink-0 text-xs">3</span>
          <div className="text-xs text-text leading-snug flex-1">
            Network 탭에서 BE 호출 200 OK 확인
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 border border-divider bg-success-soft rounded-xl">
          <span className="w-6 h-6 rounded-full bg-success text-bg flex items-center justify-center font-bold shrink-0 text-xs">4</span>
          <div className="text-xs text-text leading-snug flex-1">
            결과 화면에 카피 3개 표시
          </div>
        </div>
      </div>

      <h2 className="text-xs font-semibold text-text-sub uppercase tracking-wider mb-1.5">
        3-5. CORS 설정 검증
      </h2>

      <div className="max-w-5xl overflow-hidden rounded-xl border border-divider">
        <div className="grid grid-cols-[1fr_120px] bg-bg-soft px-4 py-1.5 border-b-2 border-divider">
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide">점검 항목</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-wide text-center">확인</div>
        </div>
        {checkRows.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[1fr_120px] px-4 py-1.5 ${idx < checkRows.length - 1 ? 'border-b border-divider' : ''}`}
          >
            <div className="text-xs text-text leading-snug">{row.label}</div>
            <div className="text-xs text-accent font-bold text-center">필수</div>
          </div>
        ))}
      </div>
    </>
  );
}
