// Source: lectures/S1/lecture.md § "기획이란 무엇인가" + 활동 워크시트 (lines 26-46, 300-320)
// Curator decision: ThreeCards — 정의 후 예시. 데이터 → 특징 → 정의 도출 흐름 시각화
// Phase L2 신규 (강사 콘텐츠 추가 #1)

import ThreeCards from '@/components/slides/patterns/ThreeCards';

export default function S1Theory06bExtractionExample() {
  return (
    <ThreeCards
      title="예시 — 데이터에서 정의가 어떻게 도출되는가"
      cards={[
        {
          num: '01',
          title: '예시 데이터 수집',
          desc: 'Reddit r/sideproject 게시글 50건\n사용자 인터뷰 10건\n커뮤니티 댓글 50건\n→ "회의록 정리에 30분 이상 걸린다" 반복 등장',
        },
        {
          num: '02',
          title: '공통 특징 추출',
          desc: '직군: 5-30인 PM 다수\n환경: 줌·구글미트 회의 주 5회 이상\n도구: 슬랙·노션 사용\n빈도: 주 3회 이상 페인 발생',
        },
        {
          num: '03',
          title: '누구·문제·어떻게로 정의',
          desc: '누구: 5-30인 스타트업 PM (3년차)\n어떤 문제: 줌 회의 후 액션아이템 정리에 30분 이상\n어떻게: 회의록을 붙여넣으면 30분 내 액션 정리해주는 도구',
        },
      ]}
    />
  );
}
