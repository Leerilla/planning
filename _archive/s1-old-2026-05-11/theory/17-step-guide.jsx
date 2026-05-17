// Source: lectures/S1/lecture.md § "기획이란 무엇인가 - 기획 5단계 프레임" (lines 56-61)
// Curator decision: StepGuide (Interactive 2) — 기획 5단계 프레임 클릭 reveal
// Phase K Deductive: 5단계 정의 후 단계별 출력물 표시

'use client';

import StepFrameRevealer from '@/components/animations/StepFrameRevealer';

export default function S1Theory17StepGuide() {
  const steps = [
    {
      label: 'STEP 01',
      title: '문제(Problem)',
      desc: '한 문장의 페인포인트',
      output: '예: "5-30인 스타트업 PM이 줌 회의 후 액션아이템 정리에 30분 이상 걸린다"'
    },
    {
      label: 'STEP 02',
      title: '페르소나(Persona)',
      desc: '5줄짜리 구체적 사용자상',
      output: '예: 직군/역할 + 환경 + 도구 + 빈도 + 검증채널'
    },
    {
      label: 'STEP 03',
      title: '가설(Hypothesis)',
      desc: '검증 가능한 가설 3개',
      output: '예: "이 PM들은 AI 요약을 쓰면 시간을 50% 줄일 것이다"'
    },
    {
      label: 'STEP 04',
      title: '검증(Validation)',
      desc: '능동·수동 두 축의 데이터',
      output: '예: 링크드인 DM 인터뷰 5명 + 서드파티 설문 20명'
    },
    {
      label: 'STEP 05',
      title: '정제(Refinement)',
      desc: 'PRD + 기능명세 + 와이어프레임',
      output: '예: 노션 PRD 문서 + 피그마 와이어프레임'
    }
  ];

  return (
    <div className="flex flex-col gap-8 justify-center h-full max-w-6xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <div className="text-xs font-semibold tracking-widest uppercase text-text-muted">
          INTERACTIVE — 화살표 또는 클릭으로 단계별 노출
        </div>
        <h3 className="text-4xl font-bold text-text">기획 5단계 프레임</h3>
        <p className="text-base text-text-sub">한 단계의 출력이 다음 단계의 입력이 되는 체계적 흐름</p>
      </div>

      <StepFrameRevealer
        steps={steps}
        animationDuration={200}
        maxStepsVisible={2}
      />
    </div>
  );
}
