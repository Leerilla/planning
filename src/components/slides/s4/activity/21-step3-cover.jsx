// Source: lectures/S4/lecture.md lines 814-816 (### Step 3)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S4ActivityStep3Cover() {
  return (
    <Cover
      eyebrow="Step 2"
      title="settings.json과 Permissions"
      subtitle="권장 템플릿 적용 + 의도된 차단 확인"
      objectives={[
        '2-1. .claude/settings.json 생성',
        '2-2. 권장 템플릿 입력 (allow / ask / deny)',
        '2-3. 의도된 차단 시연 (/etc/hosts 차단 확인)',
      ]}
    />
  );
}
