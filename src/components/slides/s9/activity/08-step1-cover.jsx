// Source: lectures/S9/lecture.md L600-602 (자동 D-033, ### Step 1 표지)
// Type: Cover

import Cover from '@/components/slides/patterns/Cover';

export default function S9ActivityStep1Cover() {
  return (
    <Cover
      eyebrow="Step 1"
      title="노출 발송"
      subtitle="재피드백 메일 카피를 10명 이상에게 발송"
      objectives={[
        '발송 대상 3단계 우선순위 결정',
        '메일 카피 최종 점검 (4항목)',
        '응답 질문 3개 확인 (변경 X)',
        '메일 발송 + 발송 메모 작성',
      ]}
    />
  );
}
