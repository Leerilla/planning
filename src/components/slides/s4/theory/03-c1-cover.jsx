// Source: lectures/S4/lecture.md lines 17-22 (### 1️⃣ AI 에이전트와 대화하는 법)
// Type: title (챕터 표지, D-033)
// D-035: "1️⃣" → "Section 1"

import Cover from '@/components/slides/patterns/Cover';

export default function S4TheoryC1Cover() {
  return (
    <Cover
      eyebrow="Section 1"
      title="AI 에이전트와 대화하는 법"
      objectives={[
        '컨텍스트의 정체를 설명한다',
        '무상태성이 만드는 문제를 인식한다',
        '컨텍스트 앵커링의 효과를 이해한다',
      ]}
    />
  );
}
