// Source: lectures/S1/lecture.md lines 527-529
// Type: title (### 섹션 표지)
// D-035: emoji 0건
// D-037: Cover 패턴 eyebrow + title + subtitle + objectives 활용

import Cover from '@/components/slides/patterns/Cover';

export default function S1ActivityBundle1Cover() {
  return (
    <Cover
      eyebrow="활동 묶음 1"
      title="아이디어 선택과 1차 리서치"
      subtitle="시드 또는 본인 아이디어 1개를 선택해, 1차 리서치를 거쳐 검증된 페인포인트 1-3개를 손에 쥔다."
      objectives={[
        '1-1. 아이디어 한 줄 정의 + 적합성 점검',
        '1-2. 5 Whys로 진짜 문제 좁히기',
        '1-3. AI 1차 리서치 (출처 포함)',
        '1-4. 출처 검증과 거짓 메모',
      ]}
    />
  );
}
