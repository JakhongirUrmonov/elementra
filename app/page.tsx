import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Horses } from "@/components/sections/Horses";
import { Pricing } from "@/components/sections/Pricing";
import { TrustSection } from "@/components/sections/TrustSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Philosophy />
      <Horses />
      <Pricing />
      <TrustSection />
      <Contact />
    </main>
  );
}
