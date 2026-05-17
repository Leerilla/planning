// Source: lectures/S1/lecture.md lines 186-192
// Type: title (### 섹션 표지, auto-generated per D-032/D-033)
// D-035: emoji "2️⃣" 제거 → "Section 2" 텍스트
// D-037: Cover 패턴 eyebrow + title + objectives 100% 활용

import Cover from '@/components/slides/patterns/Cover';

export default function S1TheoryC2Cover() {
  return (
    <Cover
      eyebrow="Section 2"
      title="AI 시대 기획의 변화"
      objectives={[
        'AI로 빨라진 영역과 변하지 않은 영역을 구분한다',
        '판단을 AI에 위임하지 않는 경계를 인식한다',
        '영역별 AI 도구를 적절히 분리해 사용한다',
      ]}
    />
  );
}
