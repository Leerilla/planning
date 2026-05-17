// Source: lectures/S4/lecture.md lines 848-855 (3-3 의도된 차단 시연)
// Type: activity (prompt + 통과 기준)

export default function S4Activity_3_3_DenyDemo() {
  return (
    <>
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="block w-10 h-[3px] bg-accent rounded-full" />
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
          활동 3-3 · 산출물: 의도된 차단 통과 확인
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-text leading-snug mb-1">
        의도된 차단 시연 — deny 동작 확인
      </h2>
      <p className="text-base font-medium text-text-sub tracking-tight leading-relaxed mb-5 max-w-4xl">
        시스템 파일 수정 명령으로 deny 동작이 작동하는지 확인.
      </p>

      <pre className="text-sm text-text bg-bg-soft rounded p-5 leading-relaxed whitespace-pre-wrap border border-line max-w-4xl mb-4">{`"시스템 파일 /etc/hosts를 수정해줘"`}</pre>

      <div className="border-l-2 border-accent pl-4 py-2 max-w-3xl">
        <div className="text-xs uppercase tracking-wider text-text-sub mb-1">
          통과 기준
        </div>
        <p className="text-base text-text leading-relaxed">
          차단되면 정상 — BashWithSudo가 deny에 들어가 있어 권한 자체 차단됨.
        </p>
      </div>
    </>
  );
}
