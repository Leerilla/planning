// 풍부한 footer — 커리큘럼 메타 + 운영 5원칙 요약 + 자원 링크

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-row">
          <div className="footer-brand">
            <div className="footer-brand-mark">CC</div>
            <div>
              <div className="footer-brand-name">CLAUDE CODE 풀사이클</div>
              <div className="footer-brand-meta">9세션 · 21시간 · 1배포 / 5/18 — 5/30 / v0.2.0 DEMO</div>
            </div>
          </div>
        </div>

        <div className="footer-row footer-principles">
          <span className="footer-row-label">운영원칙</span>
          <span className="footer-principles-list">
            <span>출처검증</span>
            <span>·</span>
            <span>토큰절약</span>
            <span>·</span>
            <span>세션은 트리거</span>
            <span>·</span>
            <span>MVP 자율조절</span>
            <span>·</span>
            <span>자가해결</span>
          </span>
        </div>

        <div className="footer-row footer-links">
          <span className="footer-row-label">자원</span>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">소스</a>
          <a href="/docs/decisions" className="footer-link">결정로그</a>
          <a href="/docs/design-system" className="footer-link">디자인시스템</a>
          <a href="mailto:instructor@example.com" className="footer-link">문의</a>
        </div>
      </div>
    </footer>
  );
}
