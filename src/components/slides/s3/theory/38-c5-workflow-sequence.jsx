// Source: lectures/S3/lecture.md lines 538-592 (1~4단계 통합)
// Type: process (sequential 4단계 reveal — 1슬라이드)

export default function S3TheoryC5WorkflowSequence() {
  const steps = [
    {
      n: '1',
      tool: 'NotebookLM',
      title: '데이터 업로드',
      detail: 'CSV (50-200건) + 인터뷰 응답 + 페르소나 1차 가설 워크시트',
      hint: '노트북 이름 = 본인 프로젝트 이름',
    },
    {
      n: '2',
      tool: 'NotebookLM',
      title: '페인포인트 추출',
      detail: '"가장 자주 등장하는 불만은? 출처 인용과 함께" + "현재 어떻게 해결하고 있는가"',
      hint: '인용 클릭으로 원문 확인',
    },
    {
      n: '3',
      tool: 'Manyfast',
      title: 'PRD 생성',
      detail: '입력 = NotebookLM 요약(페인포인트 + 현재 대안) + 페르소나 6줄 가설',
      hint: '초안에는 모호한 표현·검증 불가 지표 1건+ 가정',
    },
    {
      n: '4',
      tool: '작업자 직접',
      title: '검토와 수정',
      detail: '모호한 표현 → 명확 / 검증 불가 지표 → 측정 가능 / 기능 4개+ → 3개 이하',
      hint: '나머지 기능은 "제약사항: MVP에서 제외"',
    },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          4단계 정제 워크플로
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        각 단계는 책임지는 도구가 다르다
      </h2>

      <div className="grid grid-cols-4 gap-3 max-w-6xl">
        {steps.map((s, i) => (
          <div key={i} className="border border-divider rounded p-4">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl font-bold text-accent leading-none">{s.n}</span>
              <span className="text-sm font-semibold text-accent">{s.tool}</span>
            </div>
            <div className="text-base font-bold text-text mb-2 leading-snug">{s.title}</div>
            <div className="text-xs text-text leading-relaxed mb-2">{s.detail}</div>
            <div className="text-xs text-text-sub leading-relaxed border-t border-divider pt-2 mt-2">{s.hint}</div>
          </div>
        ))}
      </div>
    </>
  );
}
