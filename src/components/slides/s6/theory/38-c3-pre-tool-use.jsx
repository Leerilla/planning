// Source: lectures/S6/lecture.md lines 385-396
// Type: concept (default, 2-area: definition + use cases)
// Profile: tone=balanced

import Definition from '@/components/slides/patterns/Definition';

export default function S6TheoryC3PreToolUse() {
  return (
    <Definition
      term="PreToolUse"
      definition={[
        '도구 실행 직전 트리거하는 hook.',
      ]}
      notes={[
        '사용 사례: 위험 명령 차단 — matcher "Bash" 패턴으로 특정 명령만 차단',
        '사용 사례: 특정 패턴만 차단 — command 타입 + 정규식 검사',
        'deny 권한과의 차이: deny는 도구 자체를 차단하지만, PreToolUse는 특정 명령 패턴만 차단',
      ]}
    />
  );
}
