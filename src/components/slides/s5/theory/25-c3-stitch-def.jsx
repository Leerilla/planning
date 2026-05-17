// Source: lectures/S5/lecture.md lines 242-248 (#### Google Stitch란)
// Type: concept (definition)

export default function S5TheoryC3StitchDef() {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-text-sub text-sm font-semibold tracking-wider uppercase">
          Google Stitch란
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-6">
        자연어로 UI 시안과 코드를 동시에 생성
      </h2>

      <div className="max-w-4xl space-y-5">
        <p className="text-lg text-text leading-relaxed">
          <strong className="text-accent">Google Labs</strong>의 AI UI 디자인 도구. 자연어 한 줄로 시안 + 코드 동시 생성.
        </p>

        <div className="border-l-2 border-accent pl-5 py-3 bg-bg-soft">
          <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
            예시 입력
          </div>
          <p className="text-base text-text leading-relaxed">
            "1인 셀러 대상 카피 입력 화면. 상품 사진 업로드 영역과 키워드 5칸, 생성 버튼, Notion 같은 미니멀 스타일"
          </p>
        </div>

        <p className="text-base text-text-sub leading-relaxed italic">
          → 시안이 즉시 생성됨. 본 학습은 시안을 시각 참조로 활용.
        </p>
      </div>
    </>
  );
}
