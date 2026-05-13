"use client";


import { motion, useReducedMotion } from "framer-motion";
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = (delay: number, yOffset: number = 30) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay, duration: 0.8 },
      };
    }
    return {
      initial: { opacity: 0, y: yOffset },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    };
  };

  const ctaAnimationProps = (delay: number) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay, duration: 0.8 },
      };
    }
    return {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    };
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-ink">
      {/* 1. FULLSCREEN VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/media/hero-poster.jpg"
      >
        <source src="/videos/website1-optimized1.mp4" type="video/mp4" />
      </video>

      {/* 2. DARK OVERLAY */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30,5,5,0.55) 0%, rgba(80,10,15,0.35) 60%, rgba(245,240,234,1) 100%)",
        }}
      />


      {/* 4. HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mt-16">
        <motion.div
          {...animationProps(0.3, 20)}
          className="font-sans text-xs tracking-[0.3em] text-white/80 uppercase mb-6"
        >
          Elementa Riding Academy
        </motion.div>

        <h1 className="flex flex-col gap-2 mb-6">
          <motion.span
            {...animationProps(0.6, 30)}
            className="font-canela text-5xl md:text-[80px] leading-tight text-white"
          >
            Верховая езда —
          </motion.span>
          <motion.span
            {...animationProps(0.9, 30)}
            className="font-canela text-5xl md:text-[80px] leading-tight italic text-white"
          >
            это контакт
          </motion.span>
        </h1>

        <motion.p
          {...animationProps(1.1, 20)}
          className="font-sans text-lg md:text-[18px] text-white/75 mb-10"
        >
          Школа верховой езды в 20 минутах от Праги
        </motion.p>

        <motion.button
          {...ctaAnimationProps(1.3)}
          className="bg-crimson text-white font-canela text-base px-9 py-3.5 border border-white/30 hover:bg-crimsonDark transition-colors rounded-none"
        >
          Записаться на тренировку
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 z-20 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
