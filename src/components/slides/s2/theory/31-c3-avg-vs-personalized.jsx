// Source: NextUnicorn 인용 (응답률 평균 5% vs 고급 개인화 18%)
// Type: comparison (Comparison BAD/GOOD — 평균치 vs 고급 개인화)
// External ref: nextunicorn.kr insight 23e6cd6df02f25f5

import Comparison from '@/components/slides/patterns/Comparison';

export default function S2TheoryC3AvgVsPersonalized() {
  return (
    <>
      <Comparison
        title="평균 5% vs 개인화 18% — 같은 채널 3배 차이"
        bad={{
          label: '평균치 (5%)',
          statement: '"안녕하세요, 저는 ○○입니다" 대량 발송',
          points: [
            'AI 학습 평균 카피 그대로',
            '페르소나·맥락 부재',
            '20명 발송 → 응답 1명',
          ],
        }}
        good={{
          label: '고급 개인화 (18%)',
          statement: 'LinkedIn·뉴스 기반 1:1 아웃리치',
          points: [
            'AI 리서치로 Context 파악',
            '페르소나·맥락 반영 카피',
            '20명 발송 → 응답 3-4명 (3배)',
          ],
        }}
      />

      {/* 외부 자료 메타 */}
      <div className="absolute top-6 right-8 text-text-muted text-xs tracking-wider">
        참고: NextUnicorn 인용
      </div>
    </>
  );
}
