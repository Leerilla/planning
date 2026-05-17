// Source: lectures/S2/lecture.md lines 121, 140
// Type: concept (Definition — 메타 프롬프팅 정의 + 메타 인지 원리)

import Definition from '@/components/slides/patterns/Definition';

export default function S2TheoryC3MetaDefinition() {
  return (
    <Definition
      term="메타 프롬프팅 (Meta Prompting)"
      definition={[
        'AI에게 답을 직접 시키지 않고,',
        'AI가 좋은 프롬프트를 만들게 하는 기법.',
      ]}
      highlights={['답을 직접 시키지 않고', '메타 인지']}
      notes={[
        '원리 — AI에게 메타 인지를 시킨다. 일반 프롬프팅은 AI가 답을 출력하는 1단계, 메타는 답을 만드는 기준을 먼저 생각하는 2단계.',
        '두 단계 사이 작업자 검토 기회 — 잘못된 가이드라인이면 다시 묻는다. 이 검토가 결과 품질을 한 단계 끌어올린다.',
        '한 번 더 추상화한 프롬프트라고 이해하면 된다.',
      ]}
    />
  );
}
