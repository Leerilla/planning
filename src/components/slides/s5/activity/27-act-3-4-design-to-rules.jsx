// Source: 강사 결함 보고 — Stitch 디자인 가이드 → rules/ 적용 (신규 슬라이드, 2026-05-13)
// Type: activity (inline 2-area — Claude Code 명령 + rules/design.md 결과)

export default function S5Activity_3_4_DesignToRules() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-4 · 산출물: rules/design.md (다음 Step 4 빌드 참조)
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        Stitch 시안 → Claude Code가 rules/design.md 작성
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-5xl">
        시안의 시각 결정(색·간격·타이포)을 <span className="highlight-mark">rules/design.md</span>로 정착 — 다음 빌드 명령이 자동 참조.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            Claude Code 명령
          </div>
          <pre className="bg-bg-soft border-l-4 border-accent rounded p-4 text-sm text-text leading-relaxed whitespace-pre-wrap">
{`"docs/design/screen-1.png (Stitch 시안)을 보고
 rules/design.md를 새로 작성해줘.

 다음 4축으로 추출:
 - 색상 토큰 (primary / accent / bg / text)
 - 간격 토큰 (padding / gap / margin 기준값)
 - 타이포 (제목 / 본문 / 라벨 폰트 사이즈)
 - 컴포넌트 패턴 (입력 폼 / 버튼 / 카드)

 50줄 이내로 짧게.
 CLAUDE.md § 5 참조 지침에도 rules/design.md 항목 추가."`}
          </pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 font-semibold">
            rules/design.md (예시 결과)
          </div>
          <pre className="bg-bg-soft border-l-2 border-accent rounded p-4 text-sm text-text leading-relaxed whitespace-pre-wrap">
{`# 디자인 가이드

## 색상
- primary: #1F2937
- accent: #2563EB
- bg: #FFFFFF
- text: #111827

## 간격
- padding 기준: 24px
- gap 기준: 16px

## 타이포
- 제목: 28px, font-bold
- 본문: 16px, leading-relaxed
- 라벨: 12px, uppercase

## 컴포넌트
- 입력 폼: 라벨 위 + 입력 박스 아래
- 버튼: bg-accent, rounded-xl, py-3 px-6
- 업로드 영역: 점선 border, 드래그앤드롭`}
          </pre>
        </div>
      </div>

      <p className="text-sm text-text-sub mt-4 leading-relaxed max-w-5xl border-l-2 border-accent pl-3">
        효과: Step 4 빌드 명령에서 "rules/design.md 참조"만 추가하면 시안과 일치하는 코드 자동 생성. 디자인 ↔ 코드의 일관성 자동.
      </p>
    </>
  );
}
