// Source: lectures/S1/lecture.md line 246-261
// Strength: 1
// Profile: linear / comparison / strong

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1TheorySlide19() {
  return (
      <ThreeCards
        title="시드 아이디어 6개 (선택)"
        cards={[
          {
            num: "1",
            title: "회의록 액션아이템 추출기",
            desc: "5-30인 PM이 회의 후 30분을 5분으로",
            markerLabel: "복잡도 낮음"
          },
          {
            num: "2",
            title: "학원·스터디 출결 알림봇",
            desc: "원장이 출결 체크와 알림 자동화",
            markerLabel: "복잡도 중간"
          },
          {
            num: "3",
            title: "이력서 → 직무 적합도 진단기",
            desc: "직장인이 이력서를 채용공고에 맞게 수정",
            markerLabel: "복잡도 중상"
          }
        ]}
      />
  );
}
