import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "九华新语队 - 三下乡社会实践",
  description: "安徽池州市九华老田村三下乡社会实践网站，展示老田村文化和九华新语队风采",
  keywords: ["三下乡", "九华新语队", "老田村", "社会实践", "安徽池州"],
  authors: [{ name: "九华新语队" }],
  openGraph: {
    title: "九华新语队 - 三下乡社会实践",
    description: "安徽池州市九华老田村三下乡社会实践网站",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}