"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { OrnamentCorner } from "@/components/ui/OrnamentCorner";
import clsx from "clsx";

const horsesData = [
  {
    name: "Корнет",
    breedAge: "Голландский теплокровный • 17 лет",
    suitability: "Для опытных",
    description: "Сын легендарного Cornet Obolensky. Создан для конкура и станет прекрасным проводником в мир большого спорта. Самый ценный конь в Elementa.",
    image: "/media/horses/kornet.jpg",
  },
  {
    name: "Дюшес",
    breedAge: "Голландский тяжеловоз • 9 лет",
    suitability: "Универсальный",
    description: "Крепкая и эффектная кобыла. Спокойно знакомит с верховой ездой новичков и может без вреда для себя нести более тяжёлого всадника.",
    image: "/media/horses/dyushes.jpg",
  },
  {
    name: "Гангстер",
    breedAge: "Чешский теплокровный • 8 лет",
    suitability: "Для опытных",
    description: "Очень дружелюбен и сообразителен. Работает с опытными всадниками, осваивает работу на свободе и уверенно растет в сторону выездки.",
    image: "/media/horses/ganster.jpg",
  },
  {
    name: "Соломина",
    breedAge: "Андалузская • 13 лет",
    suitability: "Универсальный",
    description: "Под обманчиво капризной внешностью скрывается крепкий темперамент. Рабочая машина и идеальный компаньон для долгих выездов в поля.",
    image: "/media/horses/solomina.jpg",
  },
  {
    name: "Сифра",
    breedAge: "Спортивная голландская пони • 14 лет",
    suitability: "Для детей",
    description: "Добрая, бережная и талантливая в конкуре. Изящная на вид, но очень сильная, работоспособная и с великолепным темпераментом. Подходит для малышей и детей, которые хотят расти дальше — в выездке, конкуре, получить лицензию ZZVE. Также участвует в детских и семейных фотосессиях.",
    image: "/media/horses/sifra.JPG",
  },
  {
    name: "Флирт",
    breedAge: "Чешский теплокровный • 17 лет",
    suitability: "Универсальный",
    description: "Мудрый учитель, надежный партнер и очень ласковый друг. Флирт потрясающе выезжен, безопасен, с красивыми движениями. Это шанс перейти на новый уровень: подготовка к ZZVJ, более тонкая работа верхом и первые шаги перед покупкой собственной лошади.",
    image: "/media/horses/flirt.jpg",
  },
];

export function Horses() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    // Assuming each card is roughly 480px + 24px gap = 504px, or width of viewport on mobile
    // A better approach is using the width of the first child
    const childWidth = scrollRef.current.children[0]?.clientWidth || 0;
    const gap = 24;
    const index = Math.round(scrollLeft / (childWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), horsesData.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const childWidth = scrollRef.current.children[0]?.clientWidth || 0;
    const gap = 24;
    scrollRef.current.scrollTo({
      left: index * (childWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="Наши кони" className="relative w-full bg-parchment paper-texture py-24 overflow-hidden">
      {/* 1. SECTION HEADER */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <OrnamentDivider />
        <div className="font-sans text-[11px] tracking-[0.35em] text-crimson uppercase mb-6">
          Познакомьтесь с нашими партнерами
        </div>
        <h2 className="font-canela text-4xl md:text-[64px] leading-tight text-ink">
          Наши кони
        </h2>
      </div>

      {/* 2. HORSE CAROUSEL CONTAINER */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Navigation Arrows (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-20">
          <NavButton direction="prev" onClick={() => scrollToIndex(activeIndex - 1)} disabled={activeIndex === 0} />
        </div>
        <div className="hidden md:block absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-20">
          <NavButton direction="next" onClick={() => scrollToIndex(activeIndex + 1)} disabled={activeIndex === horsesData.length - 1} />
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-8 pt-4 px-4 md:px-24"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {horsesData.map((horse, idx) => (
            <div
              key={idx}
              className="group flex-shrink-0 snap-center flex flex-col relative w-[78vw] sm:w-[320px] md:w-[420px] h-[480px] sm:h-[520px] md:h-[800px] transition-transform duration-500 ease-out md:hover:scale-[1.02] bg-white cursor-pointer shadow-sm hover:shadow-xl overflow-hidden"
            >
              {/* IMAGE AREA */}
              <div className="relative w-full aspect-[3/4] overflow-hidden flex-shrink-0">
                <Image
                  src={horse.image}
                  alt={horse.name}
                  fill
                  className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                  sizes="(max-width: 768px) 78vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent pointer-events-none" />
                <OrnamentCorner position="tr" size={80} opacity={0.5} />
              </div>

              {/* INFO AREA */}
              <div className="absolute bottom-0 left-0 w-full h-[180px] group-hover:h-[280px] md:h-[240px] md:group-hover:h-[320px] bg-crimson p-6 md:p-8 flex flex-col justify-start overflow-hidden transition-all duration-500 ease-out shadow-lg">
                {/* Hover decorative rule */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#A01820] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                
                <div className="flex justify-between items-start gap-4 mb-4 flex-shrink-0">
                  <div className="min-w-0">
                    <h3 className="font-canela text-2xl md:text-3xl text-white italic mb-1 truncate">
                      {horse.name}
                    </h3>
                    <p className="font-sans text-[11px] md:text-[13px] text-white/70 tracking-[0.1em] uppercase">
                      {horse.breedAge}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 flex items-center flex-shrink-0">
                    <span className="font-sans text-[10px] md:text-[11px] text-white tracking-wider uppercase whitespace-nowrap">
                      {horse.suitability}
                    </span>
                  </div>
                </div>

                {/* Description (expands and scrolls on hover if very long) */}
                <div 
                  className="flex-1 overflow-y-auto pr-1"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <p className="font-sans text-[13px] md:text-[14px] text-white/85 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {horse.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. HORSE COUNTER */}
        <div className="flex justify-center mt-6">
          <span className="font-canela italic text-2xl text-crimson">
            {String(activeIndex + 1).padStart(2, '0')} / {String(horsesData.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}

function NavButton({ direction, onClick, disabled }: { direction: "prev" | "next", onClick: () => void, disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-300",
        "border border-crimson",
        disabled ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-110 cursor-pointer"
      )}
      style={{
        background: "radial-gradient(circle, var(--crimson-light) 0%, var(--crimson-dark) 100%)",
      }}
      aria-label={direction === "prev" ? "Previous horse" : "Next horse"}
    >
      <div className="absolute inset-1 border-[1px] border-dashed border-white/20 rounded-full pointer-events-none" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={direction === "prev" ? "rotate-180" : ""}
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
}
