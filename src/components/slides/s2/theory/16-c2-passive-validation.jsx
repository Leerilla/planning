// Source: lectures/S2/lecture.md lines 76-80
// Type: concept (Definition — 수동 검증 + 폭 장점)

import Definition from '@/components/slides/patterns/Definition';

export default function S2TheoryC2PassiveValidation() {
  return (
    <Definition
      term="수동 검증 (Passive Validation)"
      definition={[
        '사람들이 이미 남긴 데이터에서',
        '페인포인트의 신호를 읽는 방식.',
      ]}
      highlights={['이미 남긴 데이터', '폭']}
      notes={[
        '자료 — 커뮤니티 글·리뷰·검색량·SNS 게시물. 작업자가 발송하지 않고 이미 존재하는 데이터를 모아 분석한다.',
        '핵심 장점은 폭. 200건·500건 데이터에서 공통 페인포인트를 추출. 작업자 질문 편향이 적다.',
        '예시 — 네이버 카페에서 "회의록 정리" 키워드 검색 → 누가 시키지 않아도 PM들이 직접 어려움을 토로한 글이 모인다.',
      ]}
    />
  );
}
