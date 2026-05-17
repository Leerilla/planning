// Source: lectures/S7/lecture.md L629-635 (### Step 2: 자율 디버깅 루프)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S7ActivityStep2Cover() {
  return (
    <Cover
      eyebrow="Step 2"
      title="자율 디버깅 루프"
      subtitle="테스트 실패 시 자율 디버깅 3원칙 적용해 통과까지 도달"
      objectives={[
        '자율 디버깅 명령 (3원칙 적용)',
        '명령 점검: 3원칙 (에러 그대로 / 분석 먼저 / 결과 검증)',
        '에이전트 디버깅 흐름 5단계 확인',
        '무한 루프 방지: 정리 명령 + 시드6 사례',
      ]}
    />
  );
}
