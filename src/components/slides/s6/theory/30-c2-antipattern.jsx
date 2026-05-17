// Source: lectures/S6/lecture.md lines 312-328
// Type: example (Warning 안티패턴 vs 올바른 운영 좌우)
// 6원칙 적용 관련 안티 사례 vs 올바른 분리 운영

import Warning from '@/components/slides/patterns/Warning';

export default function S6TheoryC2Antipattern() {
  return (
    <div className="grid grid-cols-2 gap-8 h-full items-stretch">
      <Warning
        level="안티패턴"
        title="코드 리뷰어에 Write, Edit 부여"
        description="권한 너무 넓음. 위험"
        reason="수정 권한이 있으면 자신도 모르게 기준을 어기고 자동으로 수정할 유혹에 빠진다"
        avoidance={[
          '한 sub-agent가 PRD 검토와 커밋 작성',
          '단일 책임 원칙 위반',
          '책임 분리 원칙 위반',
        ]}
      />

      <Warning
        level="올바른 운영"
        tone="good"
        title={(
          <>
            prd-reviewer는 Read/Grep/Glob만,
            <br />
            git-committer는 Bash/Read만
          </>
        )}
        description="두 sub-agent로 분리"
        reason="각 agent가 명확한 권한 범위를 가지고 책임도 분리된다"
        avoidance="단일 책임 / 최소 권한 / 책임 분리 원칙을 모두 적용"
      />
    </div>
  );
}
