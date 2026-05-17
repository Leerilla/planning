// Source: lectures/S8/captures/lecture.md L1211-1313
// Type: Activity cover (Step 2)
// Profile: linear flow / activity-heavy / strong tone

import Cover from '@/components/slides/patterns/Cover';

export default function S8ActivityStep2Cover() {
  return (
    <Cover
      eyebrow="Step 2"
      title="FE 배포 (Vercel) — 5단계"
      subtitle="Vercel에 FE 배포 + Railway BE URL 환경 변수 등록"
      objectives={[
        'Vercel 가입 + GitHub 리포 연결',
        'Framework Preset 자동 감지 (Next.js)',
        'NEXT_PUBLIC_API_URL = Railway URL 등록',
        'FE URL 발급 + 화면 확인 (CORS 에러 예상)',
      ]}
    />
  );
}
