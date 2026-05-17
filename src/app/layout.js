import './globals.css';

export const metadata = {
  title: 'Claude Code 풀사이클 학습 플랫폼',
  description: '9개 세션 21시간 강의를 위한 인터랙티브 PPT 플랫폼',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
