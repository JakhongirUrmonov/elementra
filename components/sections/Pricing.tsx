"use client";

import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { OrnamentCorner } from "@/components/ui/OrnamentCorner";
import { FadeUp } from "@/components/ui/FadeUp";

export function Pricing() {
  return (
    <section id="Цены" className="relative w-full bg-white py-24">
      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <OrnamentDivider />
        <div className="font-sans text-[11px] tracking-[0.35em] text-crimson uppercase mb-6">
          Стоимость услуг
        </div>
        <h2 className="font-canela text-4xl md:text-[52px] leading-tight text-ink">
          Прайс-лист
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMN 1: ТРЕНИРОВКИ */}
          <FadeUp delay={0.1} className="h-full">
            <PricingColumn title="Тренировки">
              <PriceRow name="Индивидуальная тренировка (корда, шаг, рысь, галоп, основы)" price="1500" />
              <PriceRow name="Езда без седла, улучшение связи с лошадью" price="1700" />
              <PriceRow name="Тренировка для продвинутых по конкуру (препятствия до 1м)" price="2000" />
              <PriceRow name="Тренировка только с кавалетти" price="1800" />
              <PriceRow name="Тренировка выездка (отработка элементов, подготовка к ZZVJ)" price="2000" />
            </PricingColumn>
          </FadeUp>

          {/* COLUMN 2: ПРОГУЛКИ */}
          <FadeUp delay={0.2} className="h-full">
            <PricingColumn title="Прогулки">
              <PriceRow name="Прогулка верхом в спокойном темпе для новичков" price="1800" />
              <PriceRow name="Прогулка для более опытных всадников (рысь, галоп)" price="2200" />

              <div className="mt-8 bg-parchment border-l-[3px] border-crimson p-6">
                <h4 className="font-canela text-xl text-ink mb-4">Детская тренировка</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-[15px] text-ink">До 5 лет</span>
                    <span className="font-canela text-[20px] text-crimson font-bold">1000 Kč</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-[15px] text-ink">От 5 лет</span>
                    <span className="font-canela text-[20px] text-crimson font-bold">1200 Kč</span>
                  </div>
                </div>
              </div>
            </PricingColumn>
          </FadeUp>

          {/* COLUMN 3: УСЛУГИ */}
          <FadeUp delay={0.3} className="h-full">
            <PricingColumn title="Услуги">
              {/* Photo session card */}
              <div className="relative bg-crimson p-8 mb-6 overflow-hidden">
                <OrnamentCorner position="tl" size={60} opacity={0.2} className="!opacity-20" />
                <OrnamentCorner position="tr" size={60} opacity={0.2} className="!opacity-20" />
                <OrnamentCorner position="bl" size={60} opacity={0.2} className="!opacity-20" />
                <OrnamentCorner position="br" size={60} opacity={0.2} className="!opacity-20" />
                
                <h4 className="relative z-10 font-canela text-2xl text-white mb-6">Фотосессии</h4>
                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <span className="font-sans text-[14px] text-white/90 leading-snug">Аренда лошади (1 час)</span>
                    <span className="font-canela text-[20px] text-white whitespace-nowrap">2000 Kč</span>
                  </div>
                  <div className="w-full h-px border-b border-dashed border-white/20" />
                  <div className="flex justify-between items-start gap-4">
                    <span className="font-sans text-[14px] text-white/90 leading-snug">Дополнительный час</span>
                    <span className="font-canela text-[20px] text-white whitespace-nowrap">1500 Kč</span>
                  </div>
                  <div className="w-full h-px border-b border-dashed border-white/20" />
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[14px] text-white/90 leading-snug">Фотосессия от нашего фотографа (с костюмами и реквизитом)</span>
                    <span className="font-canela text-[20px] text-white text-right">3000-3500 Kč</span>
                  </div>
                </div>
              </div>

              {/* Events card */}
              <div className="bg-ink p-8 flex flex-col justify-center min-h-[160px]">
                <h4 className="font-canela text-2xl text-white mb-2">Проведение мероприятий</h4>
                <p className="font-sans text-[13px] text-white/70 mb-4">
                  Дни рождения, праздники для всей семьи и друзей, ретриты
                </p>
                <div className="font-canela italic text-xl text-[#F5F0EA]">
                  Обсуждается индивидуально
                </div>
              </div>
            </PricingColumn>
          </FadeUp>

        </div>

        {/* BOOKING NOTE & CTA */}
        <div className="mt-20 max-w-2xl mx-auto text-center flex flex-col items-center">
          <div className="flex items-center gap-3 justify-center mb-10 text-muted">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="font-sans text-[14px]">
              Предоплата за бронирование — 500 крон. Отмена позднее чем за 24 часа — не возвращается.
            </span>
          </div>

          <button className="bg-crimson text-white font-canela text-lg px-10 py-4 border border-white/30 hover:bg-crimsonDark transition-colors rounded-none w-full sm:w-auto">
            Записаться и уточнить расписание
          </button>
          
          <a href="tel:778071177" className="font-sans text-[14px] text-muted hover:text-crimson transition-colors mt-4 inline-block">
            или позвоните: 778-071-177
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingColumn({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="relative bg-white border border-[#7B101526] p-8 md:p-10 flex flex-col h-full">
      <OrnamentCorner position="tl" size={60} opacity={0.4} />
      <OrnamentCorner position="tr" size={60} opacity={0.4} />
      
      <div className="relative z-10 text-center mb-8 pt-4">
        <h3 className="font-canela text-[28px] text-ink mb-4">{title}</h3>
        <div className="relative flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-crimson/20" />
          <div className="relative bg-white px-2 text-crimson">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 relative z-10 flex-grow">
        {children}
      </div>
    </div>
  );
}

function PriceRow({ name, price }: { name: string, price: string }) {
  return (
    <div className="group flex justify-between items-center gap-4 py-3 px-2 -mx-2 hover:bg-[#7B10150A] transition-colors">
      <div className="font-sans text-[15px] text-ink leading-[1.5] max-w-[240px]">
        {name}
      </div>
      <div className="flex-grow border-b-[0.5px] border-dashed border-[#7B101526] mx-2 self-end mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="font-canela text-[24px] text-crimson font-bold whitespace-nowrap">
        {price} <span className="text-[16px] font-normal">Kč</span>
      </div>
    </div>
  );
}
