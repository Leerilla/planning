// Source: lectures/S5/lecture.md lines 742-754 (3-1 Stitch 자연어 프롬프트)
// Type: activity (inline 2-area — 작업자 의도 → Claude Code가 Stitch 전용 프롬프트 자동 생성)

export default function S5Activity_3_1_Prompt() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-1 · 산출물: Claude Code가 생성한 Stitch 프롬프트
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        디자인 의도 입력 → Claude Code가 Stitch 프롬프트 생성
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-5xl">
        작업자는 <span className="highlight-mark">의도만 짧게</span> 입력. Stitch 프롬프트 작성 자체는 Claude Code에 위임.
      </p>

      <div className="grid grid-cols-2 gap-5 max-w-6xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            작업자 → Claude Code 명령
          </div>
          <pre className="bg-bg-soft border border-line rounded p-4 text-sm text-text leading-relaxed whitespace-pre-wrap">
{`"PRD docs/prd.md와 첫 화면 결정(1-4 산출물)을 참조해서
 Stitch에 그대로 붙여 넣을 자연어 프롬프트를 만들어줘.

 내 의도:
 - 첫 화면 = 카피 입력 화면
 - 미니멀 스타일 (Notion 톤)
 - 데스크탑 기준

 다음 구조로 출력:
 화면 목적 한 줄 + 레이아웃 3구역 + 스타일 톤."`}
          </pre>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-text-sub mb-2">
            Claude Code 생성 결과 → Stitch에 붙여넣기
          </div>
          <pre className="bg-bg-soft border-l-2 border-accent rounded p-4 text-sm text-text leading-relaxed whitespace-pre-wrap">
{`1인 스마트스토어 셀러가 신규 상품 등록 시
상품 사진과 키워드 5개를 입력해 카피 생성을
요청하는 화면.

상단에 큰 상품 사진 업로드 영역(드래그앤드롭),
중간에 키워드 입력 5칸 (가로 배열),
하단에 '카피 생성' 버튼.

Notion 같은 미니멀 스타일.`}
          </pre>
        </div>
      </div>

      <p className="text-sm text-text-sub mt-4 leading-relaxed max-w-5xl border-l-2 border-accent pl-3">
        효과: 작업자가 Stitch 프롬프트 양식을 외울 필요 없음. PRD·페르소나 컨텍스트가 Claude Code를 거쳐 자연스럽게 반영.
      </p>
    </>
  );
}
