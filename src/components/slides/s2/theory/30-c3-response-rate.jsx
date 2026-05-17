// Source: lectures/S2/lecture.md line 151 + NextUnicorn 인용 (응답률·ROI 데이터)
// Type: concept (Definition — 응답률 5-15% 현실, NextUnicorn 데이터 통합)
// External ref: nextunicorn.kr insight 23e6cd6df02f25f5

import Definition from '@/components/slides/patterns/Definition';

export default function S2TheoryC3ResponseRate() {
  return (
    <>
      <Definition
        term="응답률 5-15%의 현실"
        definition={[
          '한국 시장 콜드 메일 평균 응답률 5-15%.',
          '평균은 한계가 아니다 — 메타+개인화로 평균 3배까지 가능.',
        ]}
        highlights={['5-15%', '평균', '3600%+ ROI']}
        notes={[
          '컨택 20명 → 응답 1-3명 (평균 5-15% 기준)',
          '발송 후 24-96시간 안에 응답 도착',
          '이메일 ROI 3600%+ ($1 → $36~40) — 가장 높은 ROI 채널',
          '평균 5% 그치는 이유는 대량 발송 / 페르소나·맥락 부재 / AI 활용 부족',
        ]}
      />

      {/* 외부 자료 메타 — 우상단 작은 텍스트 */}
      <div className="absolute top-6 right-8 text-text-muted text-xs tracking-wider">
        참고: NextUnicorn 인용
      </div>
    </>
  );
}
