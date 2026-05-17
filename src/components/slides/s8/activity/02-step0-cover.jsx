// Source: lectures/S8/captures/lecture.md L922-928 (### Step 0: 환경 진단과 리포 구조 결정)
// Type: Cover (자동 생성, section cover)

import Cover from '@/components/slides/patterns/Cover';

export default function S8ActivityStep0Cover() {
  return (
    <Cover
      eyebrow="Step 0"
      title="환경 진단과 리포 구조 결정"
      subtitle="자료 7 산출물 점검 + 리포 구조 결정 (Railway가 어디를 빌드할지)"
      objectives={[
        'planning_project 폴더에서 작업',
        'BE 코드(server/) 존재 확인',
        '리포 구조 결정 (옵션 A vs B)',
        'BE 코드 process.env.PORT 사용',
        '.gitignore에 .env* 명시',
        '/cost 베이스라인 메모',
      ]}
    />
  );
}
