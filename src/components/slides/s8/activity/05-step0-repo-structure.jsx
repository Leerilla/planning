// Source: lectures/S8/captures/lecture.md L955-986 (#### 0-3. 리포 구조 결정 + 폴더 구조 확인)
// Type: Comparison (2-row 3-col 옵션 표 + 폴더 트리)
// Phase 6 (2026-05-17): request.md #5 — 높이 줄이기 (gap-4 + 2-col 통합)

export default function S8ActivityStep0RepoStructure() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          활동 0-3 · 리포 구조
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-2">
        0-3. 리포 구조 결정 (중요)
      </h2>
      <p className="text-base text-text-sub mb-4 max-w-4xl">
        본 학습의 리포 구조 두 옵션 — 옵션 A (단일 리포) 권장
      </p>

      {/* 옵션 표 — 컴팩트 */}
      <div className="max-w-6xl overflow-hidden rounded-xl border border-divider mb-3">
        <div className="grid grid-cols-[100px_1fr_1fr] bg-bg-soft px-5 py-2 border-b-2 border-divider">
          <span className="text-xs font-bold text-text-muted uppercase tracking-wide">옵션</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wide">구조</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wide">Railway 설정</span>
        </div>
        <div className="grid grid-cols-[100px_1fr_1fr] px-5 py-3 border-b border-divider bg-accent-soft">
          <span className="font-bold text-accent text-sm">A: 단일 리포</span>
          <span className="font-semibold text-text text-sm">
            FE와 BE가 한 리포 (<code className="text-accent font-semibold bg-bg-soft px-1 rounded text-xs">client/</code>, <code className="text-accent font-semibold bg-bg-soft px-1 rounded text-xs">server/</code>)
          </span>
          <span className="text-accent font-semibold text-sm">
            Root Directory = <code className="text-accent font-semibold bg-bg-soft px-1 rounded text-xs">server/</code>
          </span>
        </div>
        <div className="grid grid-cols-[100px_1fr_1fr] px-5 py-3">
          <span className="font-bold text-text text-sm">B: 분리 리포</span>
          <span className="text-text-sub text-sm">FE와 BE 별도 리포</span>
          <span className="text-text-sub text-sm">Root Directory 설정 불필요</span>
        </div>
      </div>

      {/* 명령 + 폴더 구조 2-col */}
      <div className="grid grid-cols-2 gap-3 max-w-6xl">
        <div>
          <p className="text-sm text-text-sub mb-1.5">폴더 구조 확인 명령:</p>
          <pre className="bg-bg-soft border border-divider rounded-xl p-3 text-sm whitespace-pre-line text-text">
{`ls planning_project/`}
          </pre>
          <p className="text-xs text-text-muted mt-2 leading-relaxed">
            본 학습은 옵션 A 권장. <code className="text-accent font-semibold bg-bg-soft px-1 rounded text-xs">planning_project</code> 하나의 리포로 통합. Railway는 <code className="text-accent font-semibold bg-bg-soft px-1 rounded text-xs">server/</code>만 빌드.
          </p>
        </div>
        <div>
          <p className="text-sm text-text-sub mb-1.5">기대 구조:</p>
          <pre className="bg-bg-soft border border-divider rounded-xl p-3 text-xs whitespace-pre-line text-text leading-relaxed">
{`planning_project/
├── src/           ← FE (Next.js)
├── server/        ← BE (Node.js)
│   ├── package.json
│   └── index.js
├── docs/
├── rules/
├── e2e/
├── .claude/
└── .gitignore`}
          </pre>
        </div>
      </div>
    </>
  );
}
