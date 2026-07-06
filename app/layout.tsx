import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "蓝仙女",
  description: "一座 3D 可行走的对话墓园。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
