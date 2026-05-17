// 진척도 제거 + 시인성 강화 — 배경 불투명 / 텍스트 진하게 / 링크 hover 강화
// Phase F에서 KV 진척도 동적 조회 시 별도 컴포넌트로 추가

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="nav-brand">
          <div className="nav-brand-mark">CC</div>
          <span>Claude Code 풀사이클</span>
        </div>
        <div className="nav-links">
          <a href="#journey" className="nav-link">여정</a>
          <a href="#flow" className="nav-link">사이클</a>
          <a href="#sessions" className="nav-link">세션</a>
          <a href="#principles" className="nav-link">원칙</a>
        </div>
      </div>
    </nav>
  );
}
