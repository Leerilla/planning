// Source: lectures/S8/captures/lecture.md L497-503 (자동 생성, 챕터 표지 D-033)
// Type: Cover

import Cover from '@/components/slides/patterns/Cover';

export default function S8TheoryC4Cover() {
  return (
    <Cover
      eyebrow="이론 4"
      title="CORS — 보안 정책의 기획 관점"
      subtitle="도메인이 다르면 차단되는 이유와 화이트리스트 의사결정"
      objectives={[
        'CORS가 왜 존재하는지 설명',
        '화이트리스트 정책의 의사결정 근거',
        '첫 만남이 통과 의례인 이유',
      ]}
    />
  );
}
