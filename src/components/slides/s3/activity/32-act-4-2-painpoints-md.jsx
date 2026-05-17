// Source: lectures/S3/lecture.md lines 1170-1188 (4-2 시드 6번 painpoints.md)
// Type: example (code block — 시드 6 painpoints.md 양식)
// D-044 §3.2: painpoints.md 양식 SSOT
// D-035: lecture.md "⭐ 핵심" emoji → "[CORE]" 텍스트 변환

export default function S3Activity_4_2_PainpointsMd() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-2 · 시드 6번 사례 · planning_project/docs/painpoints.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        시드 6번 docs/painpoints.md
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        NotebookLM 추출 결과 + 현재 대안을 합쳐 한 파일로.
      </p>

      <pre className="text-sm text-text bg-bg-soft border-l-2 border-accent rounded p-5 leading-relaxed whitespace-pre-wrap max-w-4xl">{`# 페인포인트

1. 카피 차별화 부족 → 검색 노출 순위 하락  [CORE]
   - 출처 [3], [7]
2. 카피 작성 시간 상품당 1-2시간
3. 외주 비용 부담 (크몽 건당 3-10만원)
4. 광고비 의존도
5. 경쟁사 카피 모방 시 차별화 실패

## 현재 대안
1. 경쟁 상품 5-10개 수동 응용
2. 외주 (3-10만원)
3. 직접 1-2시간 작성`}</pre>
    </>
  );
}
