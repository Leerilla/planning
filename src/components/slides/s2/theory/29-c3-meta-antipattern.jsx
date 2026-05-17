// Source: lectures/S2/lecture.md lines 146-147
// Type: example (Warning bad/good — 일반 vs 메타)

import Warning from '@/components/slides/patterns/Warning';

export default function S2TheoryC3MetaAntipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      {/* 안티패턴 */}
      <Warning
        level="안티패턴"
        title={`"ChatGPT한테 '검증 메일 써줘' 하고 그대로 발송했어요"`}
        description="일반 프롬프팅 그대로 발송."
        reason="평균치 카피 → 응답률 5%대에서 멈춤. 가이드라인 검토 단계 없음."
        avoidance={[
          "AI 학습 평균 카피 — 페르소나 특화 X",
          "한국 시장 응답률 요인 미반영",
          "결과: 응답 1-2명 (20명 발송 기준)",
        ]}
      />

      {/* 올바른 메타 */}
      <Warning
        level="올바른 메타"
        tone="good"
        title={`"검증 메일 카피를 잘 쓰는 법을 한국 시장 기준으로 알려줘. 그 후 페르소나용 카피 후보 3개를 만들어줘"`}
        description="메타 프롬프팅 2단계."
        reason="한국 시장 가이드라인 → 페르소나 특화 카피 → 응답률 10-15%대"
        avoidance="가이드라인 검토 후 카피 작성 → 페르소나·시간대·신뢰 표시 자동 반영"
      />
    </div>
  );
}
