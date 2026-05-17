// Source: lectures/S8/captures/lecture.md L362-367 (자동 D-033, ### 3️⃣ 섹션 표지)
// Type: title
// D-035: emoji 제거 (3️⃣ → 텍스트)

import Cover from '@/components/slides/patterns/Cover';

export default function S8TheoryC3Cover() {
  return (
    <Cover
      eyebrow="이론 3"
      title="Vercel과 Railway, 환경 변수"
      subtitle="두 플랫폼 역할 + 환경 변수 3종류"
      objectives={[
        '두 플랫폼의 역할을 구분한다',
        '환경 변수 3종류를 외운다',
        '.gitignore의 의미를 안다',
      ]}
    />
  );
}
