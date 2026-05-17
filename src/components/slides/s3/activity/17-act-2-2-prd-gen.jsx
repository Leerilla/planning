// Source: lectures/S3/lecture.md lines 913-951 (2-2 PRD 자동 생성 메뉴 + 시드 6 입력 양식)
// Type: activity (inline 2-area — 좌 메뉴 5 STEP / 우 시드 6 입력 양식)

export default function S3Activity_2_2_PrdGen() {
  const menu = [
    '좌측 사이드바 "PRD" 탭 클릭',
    '우측 상단 "AI 생성" 버튼 클릭',
    '입력 영역에 NotebookLM 요약 + 페르소나 6줄 붙여넣기',
    '"생성하기" 클릭',
    '1-2분 대기 후 PRD 초안 5요소 자동 출력',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-2 · 산출물: PRD 초안 (5요소 자동 채워짐)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        PRD 자동 생성 — 메뉴 + 시드 6 입력
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        초안에는 모호한 표현·검증 불가 지표가 한 개 이상 들어 있다고 가정한다.
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
            시드 6번 입력 양식
          </div>
          <pre className="text-sm text-text bg-bg-soft border-l-2 border-accent rounded p-4 leading-relaxed whitespace-pre-wrap">{`[NotebookLM 분석 결과]
페인포인트 5개:
1. 카피 차별화 부족 → 검색 노출 (가장 강함)
2. 카피 작성 시간 상품당 1-2시간
3. 외주 비용 부담
4. 광고비 의존도
5. 경쟁사 카피 모방 시 차별화 실패

[페르소나]
- 직군: 1인 스마트스토어 셀러 (월 100-500만원)
- 환경: 신규 상품 월 5-20개, 본업 병행
- 도구: 스마트스토어 센터, 포토샵/캔바
- 동기: 광고 의존 낮추고 매출 다각화
- 빈도: 주 3-5건 등록 → 주 5-10시간
- 채널: 셀러스쿨 카페`}</pre>
        </div>
      </div>
    </>
  );
}
