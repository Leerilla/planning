// Source: NextUnicorn 인용 (AI 시대 콜드 메일 부활 핵심 주장)
// Type: quote (KeyMessage — AI 시대 단정)
// External ref: nextunicorn.kr insight 23e6cd6df02f25f5

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S2TheoryC3ColdMailKeyMessage() {
  return (
    <>
      <KeyMessage
        eyebrow="AI 시대 콜드 메일"
        message={[
          '대량 발송 시대는 끝났다',
          '데이터 기반 1:1 아웃리치',
          '이것이 메타 프롬프팅의 효과다',
        ]}
        highlight="1:1 아웃리치"
        examples={[
          {
            label: '효과',
            tone: 'good',
            text: '평균 5% → 개인화 18% (3배). 팔로우업 3회 이상 → 50% 이상 상승.',
          },
          {
            label: '도구',
            text: 'AI 리서치 + 메타 프롬프팅 + STO(송신 시간 최적화)',
          },
        ]}
      />

      {/* 외부 자료 메타 */}
      <div className="absolute top-6 right-8 text-text-muted text-xs tracking-wider">
        참고: NextUnicorn 인용
      </div>
    </>
  );
}
