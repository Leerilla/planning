// Source: lectures/S1/lecture.md lines 343-349
// Type: title (### 섹션 표지, auto-generated per D-032/D-033)
// D-035: emoji "3️⃣" 제거 → "Section 3" 텍스트
// D-037: Cover 패턴 eyebrow + title + objectives 100% 활용

import Cover from '@/components/slides/patterns/Cover';

export default function S1TheoryC3Cover() {
  return (
    <Cover
      eyebrow="Section 3"
      title="출처 검증의 실전"
      objectives={[
        'AI가 만드는 거짓 정보의 3가지 패턴을 식별한다',
        '출처 검증 3단계(클릭, 원문 확인, 신뢰성 판단)를 실행한다',
        '검증된 정보와 검증 안 된 정보를 명확히 분리한다',
      ]}
    />
  );
}
