"use client";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden scroll-mt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?w=1800&h=1000&fit=crop&auto=format"
          alt="Excavadora amarilla en terreno rocoso"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/80 to-[#0e0e0e]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/40" />
      </div>

      {/* Yellow accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f5b800]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-['Barlow_Condensed'] font-bold tracking-[0.3em] uppercase text-[#f5b800] text-lg mb-6">
            {t("subtitle")}
          </p>
          <h1
            className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white mb-8"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            {t("title1")}
            <br />
            <span className="text-[#f5b800]">{t("title2")}</span>
            <br />
            {t("title3")}
          </h1>
          <p className="font-['Barlow'] text-[#c8c0b0] text-lg leading-relaxed max-w-lg mb-10">
            {t("description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#maquinaria"
              className="inline-block bg-[#f5b800] hover:bg-[#ffc900] text-[#0e0e0e] px-8 py-4 font-['Barlow_Condensed'] font-bold tracking-widest uppercase transition-colors"
            >
              {t("ctaMaquinaria")}
            </Link>
            <Link
              href="#contacto"
              className="inline-block border border-[#f5b800] text-[#f5b800] hover:bg-[#f5b800] hover:text-[#0e0e0e] px-8 py-4 font-['Barlow_Condensed'] font-bold tracking-widest uppercase transition-colors"
            >
              {t("ctaCotizacion")}
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden lg:grid grid-cols-2 gap-px bg-white/10">
          {[
            { value: "15+", label: t("stat1") },
            { value: "500+", label: t("stat2") },
            { value: "18", label: t("stat3") },
            { value: "24/7", label: t("stat4") },
          ].map((s) => (
            <div key={s.label} className="bg-[#0e0e0e]/70 backdrop-blur-sm p-8 flex flex-col justify-center">
              <span
                className="font-['Barlow_Condensed'] font-extrabold text-[#f5b800] leading-none mb-2"
                style={{ fontSize: "3.5rem" }}
              >
                {s.value}
              </span>
              <span className="font-['Barlow'] text-[#9a9a8a] text-sm uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#nosotros"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#f5b800] animate-bounce z-10"
        aria-label="Ir abajo"
      >
        <ChevronDown size={32} />
      </Link>
    </section>
  );
}
