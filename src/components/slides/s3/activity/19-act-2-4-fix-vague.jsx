// Source: lectures/S3/lecture.md lines 970-991 (2-4 모호 수정 메뉴 + 시드 6 Before/After)
// Type: activity (inline 2-area — 좌 메뉴 3 STEP / 우 4-row Before/After 표)

export default function S3Activity_2_4_FixVague() {
  const rows = [
    { before: '"쉽고 편리한 카피 생성"', after: '"5분 안에 차별화 카피 3개 후보 생성"' },
    { before: '"사용자 친화적 UI"', after: '"사진 업로드 + 키워드 5개 입력 1단계 UI"' },
    { before: '"사용자 만족도 향상"', after: '"도구 생성 카피 사용률 70% 이상"' },
    { before: '"빠른 응답"', after: '"카피 생성 응답 시간 5초 이내"' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-4 · 산출물: 모호 표현 1건+ 수정 완료
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        모호한 표현 수정 — 메뉴 + 시드 6 Before/After
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        측정 가능한 표현으로 직접 다시 쓴다. <span className="highlight-mark">최소 1건 이상</span> 수정 후 진행.
      </p>

      <div className="grid grid-cols-[1fr_2fr] gap-8 max-w-6xl">
        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            메뉴 조작
          </div>
          <ol className="space-y-3">
            <li className="flex gap-3 text-base">
              <span className="font-bold text-accent w-6 shrink-0">1</span>
              <span className="text-text leading-relaxed">각 섹션 텍스트 영역 클릭</span>
            </li>
            <li className="flex gap-3 text-base">
              <span className="font-bold text-accent w-6 shrink-0">2</span>
              <span className="text-text leading-relaxed">모호한 표현을 명확한 표현으로 수정</span>
            </li>
            <li className="flex gap-3 text-base">
              <span className="font-bold text-accent w-6 shrink-0">3</span>
              <span className="text-text leading-relaxed">Ctrl+S (자동 저장)</span>
            </li>
          </ol>
        </div>

        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            시드 6번 Before / After
          </div>
          <div className="rounded border border-line overflow-hidden">
            <div className="grid grid-cols-2 bg-bg-soft border-b border-line">
              <div className="px-4 py-3 text-base font-semibold text-text-sub">Before (모호)</div>
              <div className="px-4 py-3 text-base font-semibold text-accent border-l border-line">After (명확)</div>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${i < rows.length - 1 ? 'border-b border-line' : ''}`}
              >
                <div className="px-4 py-3 text-sm text-text-sub">{r.before}</div>
                <div className="px-4 py-3 text-sm text-text font-medium border-l border-line">{r.after}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
