import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Today in America KR",
  description:
    "한국어 사용자를 위한 안전한 미국 뉴스 발견 서비스. 짧은 한국어 안내문과 원문 링크를 제공합니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
