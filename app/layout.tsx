import type { Metadata, Viewport } from "next";
import { farabee, farabeeHeading } from "@/lib/fonts";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#7B1015",
};

export const metadata: Metadata = {
  title: 'Elementa Riding Academy — Школа верховой езды в Праге',
  description: 'Elementa Riding Academy — верховая езда, индивидуальные тренировки, прогулки и фотосессии с лошадьми в 20 минутах от Праги. Horse Academy, Radimovice 26. Запись: +420 778 071 177',
  keywords: ['верховая езда Прага, конная школа Прага, конные прогулки Прага, фотосессия с лошадьми Прага, horse riding Prague, riding school Prague, jezdectví Praha, jízda na koni Praha, koně Praha-západ'],
  openGraph: {
    title: 'Elementa Riding Academy | Верховая езда в 20 минутах от Праги',
    description: 'Индивидуальные тренировки, прогулки и фотосессии с лошадьми рядом с Прагой. Horse Academy, Radimovice 26. Запись: +420 778 071 177',
    images: ['https://elementa-ra.cz/media/hero-poster.jpg'],
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
        <Script src="https://w1402305.alteg.io/widgetJS" strategy="lazyOnload" />
      </body>
    </html>
  );
}
