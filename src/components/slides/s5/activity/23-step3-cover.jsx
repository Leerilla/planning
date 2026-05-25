// Source: lectures/S5/lecture.md lines 668-674 (Step 2: GitHub Issue) + 재기획
// Type: title (섹션 표지)
// T16d (2026-05-24): "Stitch로 첫 화면 시안" → "GitHub 이슈 등록"으로 재기획
//                    Stitch는 Step 1로 흡수. Step 3는 Task의 이슈 트래킹화에 집중

import Cover from '@/components/slides/patterns/Cover';

export default function S5ActivityStep3Cover() {
  return (
    <Cover
      eyebrow="Step 3"
      title="GitHub 이슈 등록 — Task의 이슈 트래킹화"
      subtitle="docs/tasks.md → GitHub Issue + 화면 라벨로 협업·진행 추적 기반 마련"
      objectives={[
        '3-1. GitHub MCP 설치·인증',
        '3-2. gh CLI 설치',
        '3-3. Token 이슈 권한 부여',
        '3-4. 이슈 등록 명령',
        '3-5. 화면 라벨 확인',
      ]}
    />
  );
}
