// Source: lectures/S3/lecture.md lines 775-805 (1-2 데이터 업로드 메뉴 + 시드 6 파일 통합)
// Type: activity (inline 2-area — 좌 메뉴 5 STEP / 우 시드 6 파일 표)
// 옵션 B: 메뉴 + 시드 6 통합 1슬라이드

export default function S3Activity_1_2_Upload() {
  const menu = [
    '좌측 사이드바 "소스" 영역 확인',
    '"+ 소스 추가" 버튼 클릭',
    '소스 유형 선택 (파일 / Drive / 링크 / 텍스트)',
    'CSV는 "파일 업로드"로 .csv 선택',
    '좌측에 소스 목록 표시 확인',
  ];

  const files = [
    { name: '스크래핑 CSV', src: '셀러스쿨 카페', fmt: '.csv' },
    { name: '인터뷰 응답', src: '카톡/통화 정리', fmt: '.txt 또는 .md' },
    { name: '페르소나 워크시트', src: '1차 가설 단계', fmt: '.md' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-2 · 산출물: 노트북에 소스 3종 업로드
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        데이터 업로드 — 메뉴 + 시드 6 파일
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        노트북당 최대 50개 소스, 각 200MB까지 지원.
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-6xl">
        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            메뉴 조작 — 5 STEP
          </div>
          <ol className="space-y-3">
            {menu.map((m, i) => (
              <li key={i} className="flex gap-3 text-base">
                <span className="font-bold text-accent w-6 shrink-0">{i + 1}</span>
                <span className="text-text leading-relaxed">{m}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            시드 6번 업로드 파일
          </div>
          <div className="rounded border border-divider overflow-hidden">
            {files.map((f, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1.4fr_1.4fr_1fr] ${i < files.length - 1 ? 'border-b border-divider' : ''}`}
              >
                <div className="px-4 py-3 text-base text-text font-medium">{f.name}</div>
                <div className="px-4 py-3 text-base text-text-sub border-l border-divider">{f.src}</div>
                <div className="px-4 py-3 text-base text-text-sub border-l border-divider">{f.fmt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
