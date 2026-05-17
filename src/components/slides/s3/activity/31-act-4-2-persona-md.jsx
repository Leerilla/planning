// Source: lectures/S3/lecture.md lines 1155-1168 (4-2 시드 6번 persona.md)
// Type: example (code block — 시드 6 persona.md 양식)
// D-044 §3.1: persona.md 양식 SSOT

export default function S3Activity_4_2_PersonaMd() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-2 · 시드 6번 사례 · planning_project/docs/persona.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        시드 6번 docs/persona.md
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        Step 1 시작 전 만들었던 페르소나 6줄을 그대로 옮긴다.
      </p>

      <pre className="text-sm text-text bg-bg-soft border-l-2 border-accent rounded p-5 leading-relaxed whitespace-pre-wrap max-w-4xl">{`# 페르소나: 1인 스마트스토어 셀러

- 직군/역할: 월 매출 100-500만원 1인 셀러
- 환경 조건: 한 달 신규 상품 5-20개 등록
- 도구 사용: 스마트스토어 센터, 포토샵/캔바
- 동기/목표: 광고비 의존도 낮추고 매출 다각화
- 페인포인트 빈도: 주 3-5건 → 주 5-10시간
- 검증 가능 채널: 네이버 카페 셀러스쿨`}</pre>
    </>
  );
}
