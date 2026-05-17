// Source: lectures/S8/captures/lecture.md L1315-1317
// Type: Activity cover (Step 3: CORS 해결)
// Profile: linear flow / activity-heavy / strong tone

import Cover from '@/components/slides/patterns/Cover';

export default function S8ActivityStep3Cover() {
  return (
    <Cover
      eyebrow="Step 3"
      title="CORS 해결 (자율 디버깅 3원칙)"
      subtitle="자료 7의 자율 디버깅 3원칙으로 CORS 해결 — 화이트리스트 정책"
      objectives={[
        'CORS 에러 풀 메시지 복사 (F12 Console)',
        '자율 디버깅 3원칙 명령 사용',
        'CORS 에러 사라짐 확인',
        '화이트리스트 정책 (와일드카드 X)',
        '시드 6번 시나리오 공개 URL 동작',
      ]}
    />
  );
}
