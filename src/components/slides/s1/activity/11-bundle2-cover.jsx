// Source: lectures/S1/lecture.md lines 716-718
// Type: title (### 섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S1ActivityBundle2Cover() {
  return (
    <Cover
      eyebrow="활동 묶음 2"
      title="워크시트 채우기"
      subtitle="1차 리서치를 거친 입력을 1·2·3단계 워크시트로 정리한다."
      objectives={[
        '2-1. 문제 정의 5줄 작성',
        '2-2. 가설 페르소나 6줄 작성',
        '2-3. 핵심 가설 3개 도출',
      ]}
    />
  );
}
