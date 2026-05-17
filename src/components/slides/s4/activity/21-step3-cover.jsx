// Source: lectures/S4/lecture.md lines 814-816 (### Step 3)
// Type: title (섹션 표지)

import Cover from '@/components/slides/patterns/Cover';

export default function S4ActivityStep3Cover() {
  return (
    <Cover
      eyebrow="Step 3"
      title="settings.json과 Permissions"
      subtitle="권장 템플릿 적용 + 의도된 차단 확인"
      objectives={[
        '3-1. .claude/settings.json 생성',
        '3-2. 권장 템플릿 입력 (auto_allow / ask_before / deny)',
        '3-3. 의도된 차단 시연 (/etc/hosts 차단 확인)',
      ]}
    />
  );
}
