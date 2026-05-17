// Source: lectures/S4/lecture.md lines 40-52 (#### 무상태성의 의미)
// Type: concept (Definition + 3 bullet)

import Definition from '@/components/slides/patterns/Definition';

export default function S4TheoryC1Statelessness() {
  return (
    <Definition
      eyebrow="무상태성"
      term="에이전트는 매 세션마다 백지 상태로 시작한다"
      definition={[
        '어제 작업한 내용을 오늘 기억하지 않고,',
        '인간 동료처럼 맥락을 이어가지 않는다.',
      ]}
      highlights={['백지 상태']}
      notes={[
        '어제 작업한 내용을 오늘 기억 못 함',
        '다른 폴더의 작업을 이 폴더로 가져오지 못함',
        '새 동료를 매일 처음 만나는 상황과 같다 — 설명이 매번 다르면 동료의 작업도 매번 다르다',
      ]}
    />
  );
}
