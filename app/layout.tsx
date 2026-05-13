import type { Metadata, Viewport } from "next";
import { farabee, farabeeHeading } from "@/lib/fonts";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const viewport: Viewport = {
  themeColor: "#7B1015",
};

export const metadata: Metadata = {
  title: 'Elementa Riding Academy — Школа верховой езды в Праге',
  description: 'Верховая езда, тренировки, прогулки и фотосессии в 20 минутах от Праги. Bojanovice 107. Запись: 778-071-177',
  keywords: ['верховая езда Прага', 'конная школа Чехия', 'horse riding Prague', 'jezdectví Praha'],
  openGraph: {
    title: 'Elementa Riding Academy',
    description: 'Верховая езда, тренировки, прогулки и фотосессии в 20 минутах от Праги.',
    images: ['/media/hero-poster.jpg'],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${farabee.variable} ${farabeeHeading.variable}`}>
      <head>
        <link rel="preload" href="/videos/website1.mp4" as="video" type="video/mp4" />
      </head>
      <body className="bg-parchment text-ink font-sans antialiased relative">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:p-4 focus:bg-parchment focus:text-ink focus:outline-crimson focus:outline-2 focus:-outline-offset-2">
          Skip to main content
        </a>
        <CustomCursor />
        <Header />
        <div id="main">
          {children}
        </div>
      </body>
    </html>
  );
}
