// Source: lectures/S9/lecture.md L534-536 (자동 D-033, ### Step 0 표지)
// Type: Cover

import Cover from '@/components/slides/patterns/Cover';

export default function S9ActivityStep0Cover() {
  return (
    <Cover
      eyebrow="Step 0"
      title="환경 진단"
      subtitle="자료 8 산출물 점검 + NotebookLM 재오픈 + /cost 베이스라인"
      objectives={[
        '자료 8 산출물 7개 누적 확인',
        'NotebookLM 노트북 재오픈',
        '/cost 토큰 베이스라인 기록',
      ]}
    />
  );
}
