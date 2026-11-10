import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toky | أحذية عصرية",
  description:
    "توكي - وجهتك الأولى للأحذية العصرية في مصر. اكتشف أحدث صيحات الموضة بأسعار تناسبك.",
  keywords: ["أحذية", "توكي", "موضة", "نايك", "أديداس", "بوما", "مصر"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-gray-900" style={{ fontFamily: "'Cairo', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
