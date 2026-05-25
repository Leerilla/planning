// Source: lectures/S6/lecture.md lines 177-181 (#### 두 번째 단정)
// Type: concept / key-message
// D-042: KeyMessage size='sm' 적용
// S6 T1 (2026-05-24): 강사 요구 — footer 한 줄 잘림 → 두 줄 React 노드 분할

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S6TheoryC2SecondAssertion() {
  return (
    <KeyMessage
      eyebrow="두 번째 단정"
      size="sm"
      message={[
        'sub-agent는',
        '6원칙 위에서 만들어진다',
      ]}
      highlight="6원칙"
      footer={(
        <>
          <span className="block">원칙 없으면 sub-agent가 메인의 복제가 되거나</span>
          <span className="block">권한이 너무 넓어 위험</span>
        </>
      )}
    />
  );
}
