// Source: lectures/S6/lecture.md lines 116-132 (#### 안티패턴 vs 확장과 자동화 결합)
// Type: example (Warning bad/good 좌우, D-038 다중 패턴)
// Profile: hierarchical / comparison / medium-high / balanced

import Warning from '@/components/slides/patterns/Warning';

export default function S6TheoryC1Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        tone="bad"
        title={`"두 번째 화면도 처음부터 새로 명령"`}
        description={[
          '패턴 인식 실패',
          '자동화 도구 놓침',
        ]}
        avoidance={[
          '코드 작성 반복 비효율',
          'PRD 점검 누락 위험',
          '패턴 문서 강조 빠짐',
        ]}
      />

      <Warning
        level="확장과 자동화 결합"
        tone="good"
        title={`"첫 화면의 빌드 명령 메모를 90% 복사"`}
        description={[
          'PRD 일치 확인은 hook이 자동 호출한 sub-agent에 맡김',
        ]}
        avoidance={[
          '패턴 복사로 빌드 속도 향상',
          '자동화 도구로 검증 자동화',
          '미래 화면 구조 확장성 확보',
        ]}
      />
    </div>
  );
}
