// Source: lectures/S2/lecture.md lines 66-70
// Type: concept (Definition — 능동 검증 + 깊이 장점)
// D-037: Definition term + definition + highlights + notes 활용

import Definition from '@/components/slides/patterns/Definition';

export default function S2TheoryC2ActiveValidation() {
  return (
    <Definition
      term="능동 검증 (Active Validation)"
      definition={[
        '페르소나에 부합하는 사람에게',
        '직접 묻는 방식.',
      ]}
      highlights={['직접 묻는', '깊이']}
      notes={[
        '채널 — 메일·DM·인터뷰·설문. 작업자가 질문을 설계하고 발송하고 응답을 받는 사이클이 명확하다.',
        '핵심 장점은 깊이. 응답자에게 후속 질문을 던질 수 있고, 답변의 맥락을 따라가며 페인포인트의 미묘한 부분까지 들을 수 있다.',
        '예시 흐름 — "시간을 쓴다" → "어느 부분이 어려운가" → "어떤 도구를 시도해봤는가" 한 단계씩 깊이 들어간다.',
      ]}
    />
  );
}
