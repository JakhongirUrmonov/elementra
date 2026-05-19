"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { OrnamentCorner } from "@/components/ui/OrnamentCorner";
import { FadeUp } from "@/components/ui/FadeUp";

type ContactFormData = {
  name: string;
  contact: string;
  message: string;
};

export function Contact() {


  return (
    <>
      <section id="Контакты" className="relative w-full bg-parchment flex flex-col md:flex-row min-h-[800px]">
        {/* LEFT COLUMN — Contact Info */}
        <div className="relative w-full md:w-1/2 bg-ink p-8 md:p-16 flex flex-col items-center justify-center overflow-hidden shrink-0">
          <FadeUp delay={0.1} className="relative z-10 w-full max-w-md flex flex-col items-center">
            <OrnamentCorner position="tl" size={100} opacity={0.3} />
            <OrnamentCorner position="tr" size={100} opacity={0.3} />

            <Image src="/media/logo.png" alt="Logo" width={72} height={72} className="mb-6 invert" />
            <h2 className="font-canela text-3xl md:text-[32px] text-white text-center mb-4">
              Elementa Riding Academy
            </h2>
            <OrnamentDivider className="!my-4" />

            {/* Info Rows */}
            <div className="w-full flex flex-col gap-5 mt-6 mb-10">
              <InfoRow icon={<MapPinIcon />} text="Bojanovice 107 — 20 минут от Праги" />
              <InfoRow icon={<PhoneIcon />} text="778-071-177" />
              <InfoRow 
                icon={<InstagramIcon />} 
                text={<a href="https://www.instagram.com/elementa.riding.academy" target="_blank" rel="noopener noreferrer" className="hover:text-crimson transition-colors">@elementa.riding.academy</a>} 
              />
              <InfoRow icon={<ClockIcon />} text="Без выходных, только по записи" />
            </div>

            {/* Languages Row */}
            <div className="flex items-center gap-4 mb-10 text-white/80 font-sans text-xs tracking-widest uppercase opacity-80">
              <span>🇷🇺 Русский</span>
              <span className="text-crimson">•</span>
              <span>🇨🇿 Česky</span>
              <span className="text-crimson">•</span>
              <span>🇺🇦 Українська</span>
              <span className="text-crimson">•</span>
              <span>🇬🇧 English</span>
            </div>

          </FadeUp>
        </div>

        {/* RIGHT COLUMN — Map */}
        <div className="relative w-full md:w-1/2 min-h-[500px] bg-parchmentDark shrink-0">
          <FadeUp delay={0.3} className="absolute inset-0 w-full h-full">
            {/* Custom Map Filter to match parchment tone */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.123!2d14.3!3d49.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9432655d8f33%3A0xcb156b8259b3bb6!2sBojanovice%20107%2C%20252%2006%20Bojanovice%2C%20Czechia!5e0!3m2!1sen!2scz!4v1700000000000!5m2!1sen!2scz"
              className="absolute inset-0 w-full h-full border-0 grayscale sepia-[0.3] hue-rotate-[340deg] contrast-125 pointer-events-auto"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Marker Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none drop-shadow-xl z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-crimson rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <HorseshoeIcon />
              </div>
              <div className="w-1 h-3 bg-crimson" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-parchment pt-16 pb-8 flex flex-col items-center justify-center text-center relative">
        <OrnamentDivider />
        <div className="flex flex-col items-center gap-4 mt-8">
          <Image src="/media/logo.png" alt="Elementa Riding Academy" width={40} height={40} className="opacity-80" />
          <p className="font-sans text-[13px] text-muted">
            © 2024 Elementa Riding Academy
          </p>
          <div className="flex gap-6 mt-2">
            <a href="#" className="font-sans text-[13px] text-muted hover:text-crimson transition-colors underline underline-offset-4">
              Политика конфиденциальности
            </a>
            <a href="https://www.instagram.com/elementa.riding.academy" target="_blank" rel="noopener noreferrer" className="font-sans text-[13px] text-muted hover:text-crimson transition-colors underline underline-offset-4">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

// Icons
function InfoRow({ icon, text }: { icon: React.ReactNode, text: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-white">
      <div className="text-crimson shrink-0">{icon}</div>
      <div className="font-sans text-[15px] opacity-90">{text}</div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function HorseshoeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8a7 7 0 0 0 14 0" />
      <path d="M4 14a8 8 0 0 0 16 0" />
      <path d="M9 14v4a3 3 0 0 0 6 0v-4" />
    </svg>
  );
}
