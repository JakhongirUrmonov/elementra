import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { OrnamentCorner } from "@/components/ui/OrnamentCorner";
import { CrimsonBadge } from "@/components/ui/CrimsonBadge";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-parchment paper-texture relative py-20 px-8">
      <OrnamentCorner position="tl" />
      <OrnamentCorner position="tr" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="font-canela text-6xl text-ink text-center mb-4">Design Tokens</h1>
        <p className="font-sans text-muted text-center mb-12 uppercase tracking-[0.3em] text-xs">
          Elementa Riding Academy
        </p>

        <OrnamentDivider />

        <section className="mb-16">
          <h2 className="font-canela text-3xl text-crimson mb-6">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorBox name="Crimson" value="bg-crimson" />
            <ColorBox name="Crimson Dark" value="bg-crimsonDark" />
            <ColorBox name="Crimson Light" value="bg-crimsonLight" />
            <ColorBox name="Ink" value="bg-ink" />
            <ColorBox name="Parchment" value="bg-parchment" hasBorder />
            <ColorBox name="Parchment Dark" value="bg-parchmentDark" hasBorder />
            <ColorBox name="Muted" value="bg-muted" />
            <ColorBox name="White" value="bg-white" hasBorder />
          </div>
        </section>

        <OrnamentDivider />

        <section className="mb-16">
          <h2 className="font-canela text-3xl text-crimson mb-6">Typography</h2>
          <div className="space-y-8 bg-white p-8 border border-crimson/10">
            <div>
              <div className="text-xs text-muted mb-2 font-sans tracking-widest uppercase">Canela Display (h1) 96px</div>
              <div className="font-canela text-6xl md:text-[96px] leading-tight text-ink italic">Верховая езда</div>
            </div>
            <div>
              <div className="text-xs text-muted mb-2 font-sans tracking-widest uppercase">Canela (h2) 60px</div>
              <div className="font-canela text-5xl md:text-[60px] text-ink">Наши кони</div>
            </div>
            <div>
              <div className="text-xs text-muted mb-2 font-sans tracking-widest uppercase">Canela (h3) 40px</div>
              <div className="font-canela text-4xl text-ink">Лошадь и всадник</div>
            </div>
            <div>
              <div className="text-xs text-muted mb-2 font-sans tracking-widest uppercase">Inter (Body) 16px</div>
              <div className="font-sans text-base text-muted max-w-lg leading-relaxed">
                Школа верховой езды в 20 минутах от Праги. Индивидуальный подход, опытные тренеры и 4 уникальных коня для вашего обучения.
              </div>
            </div>
          </div>
        </section>

        <OrnamentDivider />

        <section className="mb-16">
          <h2 className="font-canela text-3xl text-crimson mb-6">Components</h2>
          <div className="flex gap-8 items-center bg-white p-8 border border-crimson/10">
            <CrimsonBadge size={80} />
            <CrimsonBadge size={60} />
            <button className="bg-crimson text-white font-canela text-base px-9 py-3.5 border border-white/30 hover:bg-crimsonDark transition-colors">
              Записаться на тренировку
            </button>
          </div>
        </section>

      </div>
      
      <OrnamentCorner position="bl" />
      <OrnamentCorner position="br" />
    </div>
  );
}

function ColorBox({ name, value, hasBorder = false }: { name: string, value: string, hasBorder?: boolean }) {
  return (
    <div className="flex flex-col">
      <div className={`h-24 rounded-none ${value} ${hasBorder ? 'border border-black/10' : ''}`} />
      <div className="mt-2 text-sm font-sans font-medium text-ink">{name}</div>
      <div className="text-xs font-sans text-muted">{value.replace('bg-', '')}</div>
    </div>
  );
}
