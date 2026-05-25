// Source: lectures/S7/lecture.md L680-694 (2-4. 시드 6번 흔한 실패 3건)
// Type: activity (3-case warning cards)
// S7 T16b (2026-05-25): 강사 요구 — h-px divider 기준으로 슬라이드 분리
//                       기존 17 (사례 + 검증) → 17 (사례) + 17a (검증)
//                       파일명 유지 (git history 보존), 본문은 사례 3건만

export default function S7Activity_2_4_Cases() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-12 h-1 bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 2-4 · 시드6 흔한 실패 3건
        </span>
      </div>

      <h2 className="text-3xl font-bold text-text mb-2">
        시드 6번 흔한 디버깅 사례
      </h2>

      <p className="text-text-sub text-base mb-4 max-w-4xl">
        자율 디버깅 3원칙이 실제로 잡아낸 대표 실패 3건과 수정 방향
      </p>

      <div className="flex flex-col gap-3 max-w-5xl">
        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-3">
          <div className="text-warning font-bold text-sm mb-1">
            [실패 1] 결과 화면에 카피 0개 표시
          </div>
          <div className="text-sm text-text leading-relaxed">
            원인: OpenAI API 호출 실패 또는 응답 파싱 오류
          </div>
          <div className="text-sm text-text leading-relaxed">
            수정: API 키 환경변수 확인 + 응답 구조 점검
          </div>
        </div>

        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-3">
          <div className="text-warning font-bold text-sm mb-1">
            [실패 2] 라우팅 후 빈 화면
          </div>
          <div className="text-sm text-text leading-relaxed">
            원인: 입력값이 query 파라미터로 안 넘어감
          </div>
          <div className="text-sm text-text leading-relaxed">
            수정: router.push에 query 추가
          </div>
        </div>

        <div className="border-l-4 border-warning bg-warning-soft rounded-r-xl px-5 py-3">
          <div className="text-warning font-bold text-sm mb-1">
            [실패 3] 키워드 5개 검증 통과 안 됨
          </div>
          <div className="text-sm text-text leading-relaxed">
            원인: 빈 문자열도 5개로 카운트
          </div>
          <div className="text-sm text-text leading-relaxed">
            수정: filter로 빈 문자열 제외 후 length 체크
          </div>
        </div>
      </div>
    </>
  );
}
