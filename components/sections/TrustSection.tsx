"use client";

import Image from "next/image";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { FadeUp } from "@/components/ui/FadeUp";
import { StaggerChildren } from "@/components/ui/StaggerChildren";

const benefits = [
  {
    num: "01",
    title: "Индивидуальный подход",
    desc: "Мы работаем только по предварительной записи, чтобы уделить максимум внимания каждому ученику и лошади.",
  },
  {
    num: "02",
    title: "Опытные тренеры",
    desc: "Наши специалисты говорят на русском, чешском, украинском и английском языках, обеспечивая комфортное обучение.",
  },
  {
    num: "03",
    title: "4 уникальных коня",
    desc: "От доброго тяжеловоза до спортивного потомка чемпионов — мы подберем идеального партнера для ваших целей.",
  },
  {
    num: "04",
    title: "Мягкие методы",
    desc: "Используем гуманные методы работы с лошадью, включая методику Пата Парелли и бережное гимнастирование.",
  },
  {
    num: "05",
    title: "20 минут от Праги",
    desc: "Наша школа находится на территории конюшни Urban в Bojanovice, легко доступна для регулярных занятий.",
  },
  {
    num: "06",
    title: "Фотосессии и мероприятия",
    desc: "Организуем незабываемые фотосъемки с профессиональным фотографом, костюмами и реквизитом.",
  },
];

export function TrustSection() {
  return (
    <section className="relative w-full bg-parchment paper-texture flex flex-col items-center">
      
      {/* PART A — LANGUAGES BAND */}
      <div className="w-full bg-crimson h-[120px] flex items-center justify-center px-4 overflow-hidden relative">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full max-w-6xl">
          <LanguageItem flag="🇷🇺" name="Русский" />
          <Separator />
          <LanguageItem flag="🇨🇿" name="Česky" />
          <Separator />
          <LanguageItem flag="🇺🇦" name="Українська" />
          <Separator />
          <LanguageItem flag="🇬🇧" name="English" />
        </div>
      </div>

      {/* PART B — "WHY ELEMENTA" GRID */}
      <div className="w-full max-w-[1200px] mx-auto px-4 py-24">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <FadeUp key={idx} delay={0}>
              <div className="relative bg-white border border-[#7B10151A] p-8 md:p-10 flex flex-col hover:shadow-lg transition-shadow duration-300 h-full">
                <span className="absolute top-4 left-6 font-canela italic text-[72px] text-crimson opacity-10 pointer-events-none select-none">
                  {item.num}
                </span>
                <div className="relative z-10 mt-6">
                  <h3 className="font-canela text-[22px] text-ink mb-3">{item.title}</h3>
                  <p className="font-sans text-[14px] text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </StaggerChildren>
      </div>

      {/* PART C — INSTAGRAM TEASER */}
      <div className="w-full max-w-[1200px] mx-auto px-4 pb-32 text-center flex flex-col items-center">
        <OrnamentDivider />
        <div className="font-sans text-[11px] tracking-[0.35em] text-crimson uppercase mb-6">
          Мы в Instagram
        </div>
        <a 
          href="https://www.instagram.com/elementa.riding.academy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-canela text-3xl md:text-[40px] text-crimson hover:underline underline-offset-8 mb-16 inline-block"
        >
          @elementa.riding.academy
        </a>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[960px] mx-auto">
          {[...Array(6)].map((_, i) => (
            <FadeUp key={i} delay={0}>
              <a 
                href="https://www.instagram.com/elementa.riding.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square w-full bg-crimsonDark overflow-hidden flex items-center justify-center cursor-pointer"
              >
                <Image 
                  src="/media/logo.png" 
                  alt="Logo Placeholder" 
                  width={80} 
                  height={80} 
                  className="opacity-30 invert transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="font-sans text-sm text-white font-medium uppercase tracking-wider">
                    Смотреть
                  </span>
                </div>
              </a>
            </FadeUp>
          ))}
        </StaggerChildren>
      </div>

    </section>
  );
}

function LanguageItem({ flag, name }: { flag: string; name: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl md:text-2xl">{flag}</span>
      <span className="font-sans text-[14px] text-white tracking-[0.1em] uppercase">
        {name}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="hidden sm:block relative w-[20px] h-[20px] opacity-60">
      <Image src="/media/reels_corner.png" alt="separator" fill className="object-contain invert" />
    </div>
  );
}
