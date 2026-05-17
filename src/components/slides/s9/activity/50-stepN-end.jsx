// Source: lectures/S9/lecture.md L1074-1083 (#### N-3 본 학습 종료, KeyMessage 학습 종착 슬라이드)
// Type: KeyMessage pattern — ⭐ 9세션 학습의 마지막 메시지

import KeyMessage from '@/components/slides/patterns/KeyMessage';

export default function S9ActivityStepNEnd() {
  return (
    <KeyMessage
      eyebrow="Step N · 본 학습 종료"
      size="sm"
      message={[
        '본 자료가 본 학습의 마지막 단계이다.',
        '본인 사이클은 학습 종료 후 본인 페이스로 진행된다.',
      ]}
      highlight="마지막 단계"
      examples={[
        {
          label: '학습 종료 후 1',
          text: '21시간 사이클의 도구·원칙이 본인 자산',
        },
        {
          label: '학습 종료 후 2',
          text: '두 번째 사이클부터 시간 단축 가능',
        },
        {
          label: '학습 종료 후 3',
          text: '자료 1-9가 자가 학습 자원으로 남음',
        },
      ]}
    />
  );
}
