// Source: lectures/S6/lecture.md lines 59-69 (#### 확장과 자동화: 두 단어 분리)
// Type: comparison (2-row table)

import Comparison from '@/components/slides/patterns/Comparison';

export default function S6TheoryC1TwoWords() {
  return (
    <Comparison
      title="확장과 자동화: 두 단어 분리"
      bad={{
        label: '확장만',
        statement: '패턴 복사 (화면 1 → 화면 2)',
        points: [
          '같은 흐름을 아홉 번 반복',
          '수동 입력으로 인한 실수 증가',
          '작업 시간 선형 증가',
        ],
      }}
      good={{
        label: '자동화',
        statement: '반복 작업의 도구 위임 (sub-agent + hook)',
        points: [
          '반복의 본질 발견',
          '도구가 일관되게 실행',
          '작업 시간 대폭 단축',
        ],
      }}
    />
  );
}
