// Source: lectures/S8/captures/lecture.md L7-13 (자동 D-032, ## 이론 목차)
// Type: Objectives

import Objectives from '@/components/slides/patterns/Objectives';

export default function S8TheoryToc() {
  return (
    <Objectives
      eyebrow="이론 학습 목표"
      items={[
        'FE/BE 분리 배포의 신뢰 경계 의미 설명',
        'HTTP·도메인·포트·환경 변수·빌드/배포·API의 최소 개념 인식',
        '환경 변수 3종류 구분 (BE 비밀 / FE 공개 / 로컬용)',
        'CORS가 왜 존재하고 어떻게 다룰 것인가의 기획 결정',
        '분석 도구 3종이 각각 답하는 다른 질문 인식',
        '사용자 들어오기 전 분석 셋업의 시점성 이해',
      ]}
    />
  );
}
