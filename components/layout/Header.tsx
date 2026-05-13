"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { OrnamentCorner } from "@/components/ui/OrnamentCorner";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC key support for menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = ["О нас", "Тренировки", "Наши кони", "Цены", "Контакты"];

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-6 py-4 flex items-center justify-between",
          isScrolled ? "bg-crimson shadow-[0_2px_20px_rgba(80,10,15,0.3)] backdrop-blur-none" : "bg-transparent"
        )}
      >
        <div className="flex items-center">
          <Image
            src="/media/logo.png"
            alt="Elementa Logo"
            width={56}
            height={56}
            className={clsx(
              "rounded-full transition-all duration-300",
              isScrolled ? "invert" : ""
            )}
            priority
          />
        </div>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="font-canela text-[15px] tracking-[0.15em] text-white hover:text-white/80 transition-colors uppercase"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="https://www.instagram.com/elementa.riding.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white flex flex-col justify-center items-center w-8 h-8 z-[110]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={clsx("bg-white h-0.5 w-6 transition-all duration-300", menuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5")} />
          <span className={clsx("bg-white h-0.5 w-6 transition-all duration-300", menuOpen ? "opacity-0" : "mb-1.5")} />
          <span className={clsx("bg-white h-0.5 w-6 transition-all duration-300", menuOpen ? "-rotate-45 -translate-y-1.5" : "")} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[105] bg-ink flex flex-col items-center justify-center overflow-hidden"
          >
            <OrnamentCorner position="tl" opacity={0.2} size={120} />
            <OrnamentCorner position="tr" opacity={0.2} size={120} />
            <OrnamentCorner position="bl" opacity={0.2} size={120} />
            <OrnamentCorner position="br" opacity={0.2} size={120} />
            
            <nav className="flex flex-col gap-6 text-center relative z-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="font-canela text-4xl text-white hover:text-crimson transition-colors uppercase tracking-wider"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
            
            <motion.a
              href="https://www.instagram.com/elementa.riding.academy"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-white/50 hover:text-white transition-colors"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
