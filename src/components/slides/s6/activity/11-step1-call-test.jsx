// Source: lectures/S6/lecture.md lines 787-809 (#### 1-3. 호출 테스트 명령 + 시드 6번 보고서 예시)
// Type: example (inline 2-area — 호출 명령 | 보고서 예시)
// S6 T8 (2026-05-24): 강사 요구 — 헤더/본문 백그라운드 색 통일
//                     헤더(rounded-t) + 본문(rounded-b) 사이 mb-2 갭 → 한 박스 border 통합

export default function S6ActivityStep1CallTest() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-3 · 산출물: 호출 테스트 및 보고서
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        1-3. 호출 테스트 및 보고서
      </h2>

      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        sub-agent를 호출하고 3카테고리 형식의 보고서를 받습니다.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col border border-divider rounded overflow-hidden">
          <div className="text-xs font-semibold text-text-sub uppercase tracking-wider bg-bg-soft border-b border-divider px-4 py-2">
            호출 명령
          </div>
          <div className="bg-bg-soft px-4 py-3 flex-1">
            <p className="text-sm text-text-sub font-medium mb-2">Claude Code 세션:</p>
            <p className="text-sm text-text leading-relaxed whitespace-pre-line">
{`@prd-reviewer src/components/InputForm.jsx 파일을 검토해줘.`}
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col border border-divider rounded overflow-hidden">
          <div className="text-xs font-semibold text-text-sub uppercase tracking-wider bg-bg-soft border-b border-divider px-4 py-2">
            시드 6번 보고서 예시 (InputForm.jsx)
          </div>
          <div className="bg-bg-soft px-4 py-3 flex-1">
            <p className="text-sm text-text leading-relaxed whitespace-pre-line font-medium">
{`[일치]
- 상품 사진 업로드 영역
  → PRD 핵심 기능 1(입력)에 매핑
- 키워드 입력 5칸
  → PRD 핵심 기능 1에 명확히 매핑

[불일치]
- 발견된 불일치 없음

[검토 외]
- rules/coding-style.md의 PascalCase
  컴포넌트명 규칙 준수
- PR 1-2개 파일 원칙에 부합`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
