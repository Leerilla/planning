// Source: lectures/S2/lecture.md L203-223
// Type: example (활동 1-2 메타 프롬프팅으로 카피 작성)

export default function S2Activity_1_2_MetaCopy() {
  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 1-2 · 산출물: 가이드라인 3 + 카피 후보 3
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold tracking-tight text-text leading-snug mb-4">
        메타 프롬프팅으로 카피 작성
      </h2>

      {/* 2-col: 빈 양식 + 시드 1 적용 */}
      <div className="grid grid-cols-2 gap-4 mb-4 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-5">
          <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-3">
            빈 양식
          </div>
          <p className="text-sm font-medium text-text-sub leading-relaxed tracking-tight whitespace-pre-line">
{`나는 [페르소나]를 대상으로 [문제]에 대한 검증 인터뷰를 요청하려고 해.
한국 시장에서 콜드 메일 카피를 잘 쓰는 법 3가지 원칙을 먼저 알려줘.
그 다음 페르소나용 카피 후보 3개를 만들어줘.
각 카피는 100자 이내, 한 줄 후크가 있어야 해.`}
          </p>
        </div>
        <div className="rounded-2xl border-l-4 border-success bg-success-soft p-5">
          <div className="text-success text-xs font-semibold tracking-wider uppercase mb-3">
            시드 6 적용 · 1인 셀러 카피 라이팅
          </div>
          <p className="text-sm font-medium text-text leading-relaxed tracking-tight whitespace-pre-line">
{`나는 월 매출 100-500만원 1인 스마트스토어 셀러를 대상으로 상품 카피
작성 어려움에 대한 검증 인터뷰를 요청하려고 해. 한국 시장에서 콜드
메일 카피를 잘 쓰는 법 3가지 원칙을 먼저 알려줘. 그 다음 1인 셀러용
카피 후보 3개를 만들어줘. 각 카피는 100자 이내, 한 줄 후크가 있어야 해.`}
          </p>
        </div>
      </div>

      {/* 답변 점검 */}
      <div className="grid grid-cols-[80px_1fr] gap-3 items-center max-w-5xl">
        <span className="text-warning bg-warning-soft border border-warning text-xs font-semibold tracking-wider uppercase rounded-xl px-2 py-1 text-center">
          점검
        </span>
        <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed">
          답변에 <span className="font-bold text-text">가이드라인 3개 + 카피 후보 3개</span>가 함께 나와야 한다. 가이드라인이 없으면 일반 프롬프팅 결과 → 다시 묻는다.
        </p>
      </div>
    </>
  );
}
