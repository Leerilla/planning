// Source: lectures/S1/lecture.md § "출처 검증의 실전 - 출처 검증 3단계" (lines 160-169)
// Curator decision: StepGuide 패턴 with StepFrameRevealer (Interactive 5)
// Phase K: §3 — 출처 검증 3단계 상세 (단계별 클릭 reveal)

'use client';

import StepFrameRevealer from '@/components/animations/StepFrameRevealer';

export default function S1Theory31StepGuide() {
  const steps = [
    {
      label: 'STEP 01',
      title: '출처 클릭',
      desc: 'AI가 제시한 URL을 직접 클릭',
      output: '클릭 여부가 검증의 시작'
    },
    {
      label: 'STEP 02',
      title: '원문 확인',
      desc: '페이지가 진짜 AI 답변의 내용을 담고 있는가?',
      output: '페이지 제목·저자·내용 일치 확인'
    },
    {
      label: 'STEP 03',
      title: '신뢰성 판단',
      desc: '1차 자료인가? 다른 출처와 교차 검증 가능한가?',
      output: '한국 시장 기준 적용 가능성 판단'
    }
  ];

  return (
    <div className="flex flex-col gap-8 justify-center h-full">
      <div className="flex flex-col gap-3">
        <h3 className="text-4xl font-bold text-text">출처 검증 3단계</h3>
        <p className="text-lg text-text-sub">검증을 통과한 정보만 워크시트에 옮긴다</p>
      </div>
      <StepFrameRevealer steps={steps} animationDuration={200} maxStepsVisible={2} />
    </div>
  );
}
