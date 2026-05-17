// Source: lectures/S1/lecture.md § "출처 검증의 실전 - 거짓 정보 패턴" (lines 140-150)
// Curator decision: FalsePatternValidator 컴포넌트 (Interactive 4: 신규 슬라이드)
// Phase K: §3 — 거짓 패턴 검증 시뮬레이션 (Interactive 실전)

'use client';

import FalsePatternValidator from '@/components/animations/FalsePatternValidator';

export default function S1Theory30FalsePatternValidator() {
  const samples = [
    {
      claim: '"한국 20-30대 PM의 78%가 회의록 정리에 30분 이상 쓴다"',
      url: 'https://stat-research.kr/survey/2024',
      correctPattern: '그럴듯한통계',
      reason: '출처 URL이 실제 존재하지 않는 도메인입니다'
    },
    {
      claim: '"Marc Andreessen: AI의 본질은 패턴 인식이다"',
      url: 'https://twitter.com/pmarca',
      correctPattern: '가짜인용',
      reason: 'Marc Andreessen의 실제 글에는 이 표현이 없습니다'
    },
    {
      claim: '"www.research-institute.kr/article/2024-06-15"',
      url: 'https://research-institute.kr/article/2024-06-15',
      correctPattern: '출처조작',
      reason: '이 URL은 404 오류를 반환하거나 다른 내용의 페이지입니다'
    }
  ];

  return (
    <div className="flex flex-col gap-8 justify-center h-full">
      <FalsePatternValidator samples={samples} showExplainer={true} />
    </div>
  );
}
