import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALPHA — 해외 인플루언서 마케팅의 새로운 표준",
  description:
    "12개국 13,850명의 마이크로 인플루언서 네트워크. 가성비 좋은 글로벌 캠페인을 단 6단계로.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "ALPHA — 해외 인플루언서 마케팅의 새로운 표준",
    description: "글로벌 마이크로 인플루언서 13,850명, 12개국 네트워크",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
