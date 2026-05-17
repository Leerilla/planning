// Source: lectures/S5/lecture.md lines 820-831 (4-3 결과 확인)
// Type: activity (code + 3 점검)

export default function S5Activity_4_3_Result() {
  const checks = [
    '입력 폼이 떠 있는가',
    '키워드 5칸과 사진 업로드 영역이 보이는가',
    '버튼 클릭 시 콘솔에 입력값이 출력되는가',
  ];

  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 4-3 · 산출물: 동작 확인
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        결과 확인 — npm run dev + 브라우저 점검
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        로컬 dev server 띄우고 3가지 직접 점검.
      </p>

      <div className="grid grid-cols-[1fr_1.4fr] gap-5 max-w-5xl">
        <div className="rounded-2xl border-l-4 border-accent bg-bg-soft p-4">
          <div className="text-text-muted text-xs font-semibold tracking-wider uppercase mb-2">
            명령
          </div>
          <p className="text-base font-medium text-text leading-relaxed tracking-tight">
{`npm run dev`}
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider text-text-sub mb-1 font-semibold">
            브라우저에서 확인
          </div>
          {checks.map((c, i) => (
            <div key={i} className="flex items-start gap-3 border-l-2 border-accent pl-3 py-1">
              <span className="text-sm font-bold text-accent shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm text-text leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
