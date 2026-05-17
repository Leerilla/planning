// Source: lectures/S2/lecture.md lines 99-100
// Type: example (Warning bad/good — 한 축 의존)
// D-035: 👉 텍스트화

import Warning from '@/components/slides/patterns/Warning';

export default function S2TheoryC2SingleAxisAntipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      {/* 안티패턴 — 한 축 */}
      <Warning
        level="안티패턴"
        title={
          <span className="block text-2xl leading-snug whitespace-nowrap">
            {'"DM만 100개 보냈어요. 데이터는 충분합니다"'}
          </span>
        }
        description="한 축에만 의존한 검증이다."
        reason="능동 응답 5-15%로 한계, 100명 발송 → 응답 5-15명 + 가장 적극적 응답자 편향"
        avoidance={[
          "응답자 패턴이 페르소나 평균이 아니다",
          "글로 표현된 페인포인트 패턴 완전 누락",
          "결과: 깊이만 있고 폭은 0",
        ]}
      />

      {/* 올바른 두 축 */}
      <Warning
        level="올바른 두 축"
        tone="good"
        title={
          <span className="block text-2xl leading-snug whitespace-nowrap">
            {'"DM 20개 + 커뮤니티 스크래핑 200건"'}
          </span>
        }
        description="두 축 동시 가동."
        reason="깊이 있는 답 + 광범위한 페인포인트 패턴을 함께 확보"
        avoidance="능동 응답 1-3명 + 수동 패턴 200건이면 다음 단계 진입 가능"
      />
    </div>
  );
}
