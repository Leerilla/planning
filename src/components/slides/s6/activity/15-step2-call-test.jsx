// Source: lectures/S6/lecture.md lines 864-891 (#### 2-2. 호출 테스트 명령 + 시드 6번 보고서 예시)
// Type: example (inline 2-area — 호출 명령 | 보고서 예시)
// S6 T8 (2026-05-24): 강사 요구 — 헤더/본문 백그라운드 색 통일
//                     헤더(rounded-t) + 본문(rounded-b) 사이 mb-2 갭 → 한 박스 border 통합

export default function S6ActivityStep2CallTest() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-2 · 산출물: 호출 테스트 및 보고서
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        2-2. 호출 테스트 및 보고서
      </h2>

      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        sub-agent를 호출하고 3단 형식의 보고서를 받습니다.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col border border-divider rounded overflow-hidden">
          <div className="text-xs font-semibold text-text-sub uppercase tracking-wider bg-bg-soft border-b border-divider px-4 py-2">
            호출 명령 및 준비
          </div>
          <div className="bg-bg-soft px-4 py-3 flex-1">
            <p className="text-sm text-text-sub font-medium mb-3">작은 변경 만들기:</p>
            <p className="text-sm text-text mb-4 leading-relaxed whitespace-pre-line">
{`echo "" >> README.md`}
            </p>
            <p className="text-sm text-text-sub font-medium mb-2">Claude Code 세션:</p>
            <p className="text-sm text-text leading-relaxed whitespace-pre-line">
{`@git-committer 변경된 파일을 커밋해줘.`}
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col border border-divider rounded overflow-hidden">
          <div className="text-xs font-semibold text-text-sub uppercase tracking-wider bg-bg-soft border-b border-divider px-4 py-2">
            시드 6번 보고서 예시 (README 변경)
          </div>
          <div className="bg-bg-soft px-4 py-3 flex-1">
            <p className="text-sm text-text leading-relaxed whitespace-pre-line font-medium">
{`[변경 파일]
- README.md (수정됨, 1줄 추가)

[커밋 메시지]
[chore] README 빈 줄 추가

[실행 결과]
- git add README.md: 성공
- git commit: 성공 (commit hash: a1b2c3d)
- git push origin main: 성공`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
