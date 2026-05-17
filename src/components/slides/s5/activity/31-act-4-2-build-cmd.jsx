// Source: lectures/S5/lecture.md lines 793-818 (4-2 위임 3원칙 빌드 명령 + 명령 점검)
// Type: activity (inline 2-area)

export default function S5Activity_4_2_BuildCmd() {
  const principles = [
    { p: '범위 좁힘', loc: '"이 PR은 src/components/InputForm.tsx 한 파일만"' },
    { p: '결과물 명시', loc: '"입력값을 콘솔에 출력"' },
    { p: '검증 방법', loc: '"콘솔 확인으로 사전 정의"' },
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-2 · 산출물: 위임 3원칙 빌드 명령
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        위임 3원칙 빌드 명령 + 명령 점검
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        Issue #1 명령에 3원칙이 모두 들어있는지 확인.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Claude Code 명령
          </div>
          <pre className="text-sm text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-line">{`"Issue #1을 진행해줘.
 CLAUDE.md와 rules/architecture.md,
 rules/coding-style.md를 참조해.

 PRD의 카피 입력 화면을
 Next.js + Tailwind로 만들어줘.
 첨부한 Stitch 시안을 참조해.

 기능은 다음 두 가지:
 1. 상품 사진 업로드 영역과 키워드
    입력 5칸을 렌더링
 2. '카피 생성' 버튼 클릭 시
    입력값을 그대로 콘솔에 출력

 실제 카피 생성 로직은 Issue #5-7에서.
 이 PR은 src/components/InputForm.tsx
 한 파일만 수정해."`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            3원칙 적용 위치 점검
          </div>
          <div className="space-y-3">
            {principles.map((p, i) => (
              <div key={i} className="border border-line rounded p-4 bg-bg-soft">
                <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
                  {p.p}
                </div>
                <p className="text-sm text-text leading-relaxed">{p.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
