// Source: lectures/S2/lecture.md L190
// Type: title (### 활동 묶음 1 섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S2ActivityBundle1Cover() {
  return (
    <Cover
      eyebrow="활동 묶음 1"
      title="능동 검증 카피"
      subtitle="메타 프롬프팅으로 페르소나 맞춤 카피 후보 3개를 만들고, 본인 톤으로 다듬은 1개를 발송 직전 상태로 준비한다."
      objectives={[
        '1-1. 페르소나 활동 채널 1개 선택',
        '1-2. 메타 프롬프팅으로 카피 후보 3개 작성',
        '1-3. 1개 선정 + 본인 톤으로 다듬기',
        '1-4. 4 기준으로 검토 + 다시 보강',
      ]}
    />
  );
}
