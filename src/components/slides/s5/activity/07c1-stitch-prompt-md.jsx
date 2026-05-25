// Source: lectures/S5/request.md (T13a 재배치 → T16f 라벨 재매핑, 2026-05-24)
// Type: activity (inline 2-area — 좌 명령+5축+[Claude]질문 단일 pre / 우 작업자 답변 + prompt.md 결과)
// T16f: eyebrow "활동 1-4b" → "활동 1-5" (Step 1 흐름 안에서 화면 결정 → prompt.md → Stitch 시안 순서)

export default function S5ActivityStitchPromptMd() {
  const answers = [
    '카피 입력 화면',
    '사진 업로드 + 키워드 5 + 액션 버튼',
    '수직 스택 (모바일 max-width 420px)',
    '라이트, 둥근 모서리 16px, 산세리프',
    '키워드 예: 신상품·여름·린넨',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-5 · 도출된 화면의 Stitch 프롬프트를 <code className="text-accent font-semibold">prompt.md</code>로 저장
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        AI가 <span className="highlight-mark">5축</span>을 직접 물어 → 답변으로 프롬프트 조립
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        Persona를 근거로 화면별 시안 프롬프트를 작성. 결과는 <code className="text-accent font-semibold">docs/prompt.md</code>로 저장해 바로 다음 활동(Stitch 자연어 프롬프트)에서 재사용.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Claude Code 명령
          </div>
          <pre className="text-xs text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`docs/prd.md를 읽고 Persona를 분석해서
Stitch에 보낼 화면별 시안 프롬프트를 작성해줘.

프롬프트는 docs/prompt.md로 저장해줘.

5축을 나에게 직접 물어봐:
- 목적 / 요소 / 레이아웃 / 스타일 / 데이터.

[Claude]
1) 화면 유형은? (입력 / 결과 / 이력)
2) 핵심 UI 요소는? (폼 / 카드 / 차트)
3) 레이아웃은? (수직 스택 / 2열 그리드)
4) 스타일·테마는? (라이트 / 다크,
   모서리·폰트 분위기)
5) 보일 데이터 예시는?`}</pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            [작업자] 답변 예시
          </div>
          <ol className="text-xs text-text bg-bg-soft rounded p-3 leading-relaxed border border-divider space-y-1 pl-7 list-decimal mb-3">
            {answers.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ol>

          <div className="text-xs uppercase tracking-wider text-text-sub mb-2 mt-3">
            결과: <code className="text-accent font-semibold">prompt.md</code> 미리보기
          </div>
          <pre className="text-xs text-text bg-bg-soft rounded p-3 leading-relaxed whitespace-pre-wrap border border-divider">{`# docs/prompt.md

## 화면 1 — 카피 입력
모바일 카피 입력 화면.
사진 업로드 + 키워드 5 입력 + 액션 버튼.
수직 스택 (max-width 420px).
라이트 테마, 둥근 모서리 16px, 산세리프.
예시 데이터: 신상품·여름·린넨 등 키워드.

## 화면 2 — 카피 결과
(다음 화면도 동일 5축으로 추가)`}</pre>
        </div>
      </div>
    </>
  );
}
