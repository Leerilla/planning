// Source: lectures/S6/lecture.md lines 466-478
// Type: example (Warning bad/good) — hook 운영 안티패턴
// Profile: hierarchical logic / example visual / balanced tone

import Warning from '@/components/slides/patterns/Warning';

export default function S6TheoryC3Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title={`"matcher: Edit | Write" (공백 있음)`}
        description="정규식 매칭 실패. hook이 트리거되지 않음."
        reason="공백은 정규식에서 문자로 인식되어 패턴 불일치"
        avoidance={[
          'matcher 공백 때문에 Edit/Write 도구 사용해도 hook 미실행',
          'sub-agent 호출 없이 수동 작업으로 돌아감',
          '자동화 실패 후 원인 파악 어려움',
        ]}
      />

      <Warning
        level="올바른 운영"
        tone="good"
        title={`"matcher: Edit|Write" (공백 없음)`}
        description="정확한 정규식. hook이 정상 트리거됨."
        reason="공백 제거로 정규식 패턴 정확하게 매칭"
        avoidance="Edit 또는 Write 도구 사용 시 hook 즉시 실행 sub-agent 자동 호출"
      />
    </div>
  );
}
