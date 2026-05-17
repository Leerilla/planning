// Source: lectures/S1/lecture.md
// Strength: meta
// Profile: linear / comparison / strong

import SessionMeta from '@/components/slides/patterns/SessionMeta';

export default function S1TheorySlide02() {
  return (
      <SessionMeta
        duration="2시간 30분"
        deliverables={[
          '1차 가설 워크시트',
          '검증된 페인포인트 리스트',
          '컨택 리스트 20명',
        ]}
        tools={['ChatGPT/Gemini', 'NotebookLM', '구글 시트']}
      />
  );
}
