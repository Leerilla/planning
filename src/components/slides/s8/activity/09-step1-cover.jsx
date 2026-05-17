// Source: lectures/S8/captures/lecture.md L1039-1041
// Type: Cover (자동 생성, section cover)

import Cover from '@/components/slides/patterns/Cover';

export default function S8ActivityStep1Cover() {
  return (
    <Cover
      eyebrow="Step 1"
      title="BE 배포 (Railway) — 8단계"
      subtitle="Railway에 BE 배포 + 환경 변수 등록 — 클릭 단위로 세분화"
      objectives={[
        'Railway 가입 + GitHub 리포 연결',
        'Root Directory = server/ 설정',
        'OPENAI_API_KEY 등록',
        'Generate Domain → BE URL 발급',
        '헬스체크 응답 정상',
        'BE URL 메모 (Step 2-3에서 사용)',
      ]}
    />
  );
}
