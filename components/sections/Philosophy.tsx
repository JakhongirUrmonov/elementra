"use client";

import { motion, useReducedMotion } from "framer-motion";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { CrimsonBadge } from "@/components/ui/CrimsonBadge";

const pillars = [
  {
    title: "Биомеханика всадника",
    description: "Понимание того, как работают мышцы человека при езде, для достижения идеального баланса.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2L9.5 9.5 5 11l-2 5h4l2-3 4-2.5 3.5 1.5.5-3.5L14 2z" />
        <path d="M5 16l-3 6" />
        <path d="M9 16l-1 6" />
        <path d="M14 16l2 6" />
        <path d="M18 16l3 6" />
      </svg>
    ),
  },
  {
    title: "Правильная посадка",
    description: "Правильное распределение веса и мягкий контакт для комфорта лошади и всадника.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8a7 7 0 0 0 14 0" />
        <path d="M4 14a8 8 0 0 0 16 0" />
        <path d="M9 14v4a3 3 0 0 0 6 0v-4" />
      </svg>
    ),
  },
  {
    title: "Зоопсихология лошади",
    description: "Изучение поведения лошадей, их инстинктов и языка тела для построения доверия.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2l-2 5-5 2v4l5 1 2 5h4l2-5 5-1v-4l-5-2-2-5h-4z" />
      </svg>
    ),
  },
  {
    title: "Классическая школа",
    description: "Опора на проверенные веками методы подготовки и развития спортивной лошади.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="О нас" className="relative w-full bg-parchment paper-texture pt-24">
      {/* 1. SECTION HEADER */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <OrnamentDivider />
        <div className="font-sans text-[11px] tracking-[0.35em] text-crimson uppercase mb-6">
          Наша философия
        </div>
        <h2 className="font-canela text-4xl md:text-[52px] leading-tight text-ink max-w-[700px] mx-auto mb-6">
          Лошадь и всадник учатся понимать друг друга
        </h2>
        <p className="font-sans text-[17px] leading-[1.8] text-muted max-w-[620px] mx-auto">
          Elementa Riding Academy — это место, где лошадь и всадник учатся понимать друг друга.
          Мы верим, что верховая езда — это прежде всего контакт и партнерство с лошадью.
        </p>
      </div>

      {/* 2. FOUR PILLARS GRID */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white px-8 py-10 border border-[#7B10151E] flex flex-col items-center hover:shadow-lg transition-all duration-300 rounded-none overflow-hidden"
            >
              <CrimsonBadge icon={pillar.icon} size={80} className="mb-4" />
              <h3 className="font-canela text-[22px] text-ink text-center mb-3">
                {pillar.title}
              </h3>
              <p className="font-sans text-[15px] text-muted text-center leading-relaxed">
                {pillar.description}
              </p>
              
              {/* Thin crimson bottom border on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-crimson transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. SERVICES TEASER (below the grid) */}
      <div className="w-full bg-crimson h-[80px] overflow-hidden flex items-center relative">
        <div className="whitespace-nowrap flex animate-marquee will-change-transform w-fit">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="font-sans text-[13px] tracking-[0.25em] text-white/90 uppercase px-8 flex-shrink-0"
            >
              Мы предлагаем · Тренировки · Прогулки · Фотосессии · Мероприятия ·
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
