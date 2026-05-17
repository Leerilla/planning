// Source: lectures/S3/lecture.md lines 890-911 (2-1 Manyfast 프로젝트 생성 6 STEP)
// Type: activity (6 STEP 메뉴 + 4 탭 표시)

export default function S3Activity_2_1_ProjectCreate() {
  const steps = [
    'manyfast.io 접속 후 로그인',
    '대시보드 우측 상단 "+ 새 프로젝트"',
    '프로젝트 이름 입력 — 예: "1인-셀러-카피-생성기"',
    '프로젝트 유형 선택 — 웹 서비스 / 모바일 앱 / API 서비스 (시드 6: 웹 서비스)',
    '"프로젝트 생성" 클릭',
    '좌측 사이드바 4개 탭 확인 — PRD / 기능명세서 / 유저플로우 / 와이어프레임',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-1 · 산출물: 빈 Manyfast 프로젝트
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        프로젝트 생성 — 메뉴 조작 6 STEP
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        한 프로젝트에 <span className="highlight-mark">4 in 1 (PRD·기능명세·유저플로우·와이어프레임)</span>가 함께 만들어진다.
      </p>

      <div className="space-y-2 max-w-5xl">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-accent pl-5 py-1.5">
            <span className="text-xl font-bold text-accent leading-none mt-0.5 w-7 shrink-0">
              {i + 1}
            </span>
            <span className="text-base text-text leading-relaxed">{s}</span>
          </div>
        ))}
      </div>
    </>
  );
}
