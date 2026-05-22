// Source: lectures/S3/lecture.md lines 1190-1245 (4-3 README.md 양식 + 시드 6 적용)
// Type: activity (inline 2-area — 좌 빈 양식 / 우 시드 6 적용)
// D-044 §3.4: README.md 양식 SSOT

export default function S3Activity_4_3_Readme() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-3 · 산출물: planning_project/README.md
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        README.md — 양식 + 시드 6 적용
      </h2>
      <p className="text-sm font-medium text-text-sub tracking-tight leading-relaxed mb-4 max-w-4xl">
        프로젝트 한눈 요약. 다음 단계 시작 시 누구든 1분 안에 읽을 수 있어야.
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-6xl">
        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            빈 양식
          </div>
          <pre className="text-xs text-text-sub bg-bg-soft rounded p-4 leading-relaxed whitespace-pre-wrap border border-divider">{`# {프로젝트 이름}

> {한 줄 요약}

## 페르소나
{페르소나 핵심 1줄}

## 핵심 페인포인트
{가장 강한 페인포인트 1줄}

## 핵심 기능 3개
1. {입력 기능}
2. {핵심 처리}
3. {출력 기능}

## 성공 지표
- {지표 1: Before → After}
- {지표 2: Before → After}`}</pre>
        </div>

        <div>
          <div className="text-base font-semibold text-text-sub mb-3">
            시드 6 적용
          </div>
          <pre className="text-xs text-text bg-bg-soft border-l-2 border-accent rounded p-4 leading-relaxed whitespace-pre-wrap">{`# 1인 셀러 상품 상세페이지 카피 생성기

> 1인 스마트스토어 셀러를 위한
> 차별화 카피 자동 생성 도구

## 페르소나
월 매출 100-500만원 1인 스마트스토어 셀러

## 핵심 페인포인트
카피 차별화 부족 → 검색 노출 순위 하락

## 핵심 기능 3개
1. 상품 사진 + 키워드 5개 입력
2. 카테고리별 차별화 카피 3개 생성
3. 스마트스토어 형식 텍스트 출력

## 성공 지표
- 카피 작성 시간: 1-2시간 → 5분 이내
- 카피 후보 사용률: 70% 이상`}</pre>
        </div>
      </div>
    </>
  );
}
