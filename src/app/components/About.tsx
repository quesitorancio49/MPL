"use client";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="nosotros" className="py-28 bg-[#f5f0e8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Image side */}
        <div className="relative">
          <div className="relative z-10 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&h=600&fit=crop&auto=format"
              alt="Vista aérea de equipos pesados en cantera"
              className="w-full h-[480px] object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/60 via-transparent" />
          </div>
          {/* Accent box */}
          <div className="absolute -bottom-8 -right-8 bg-[#f5b800] w-48 h-48 flex flex-col items-center justify-center z-20">
            <span className="font-['Barlow_Condensed'] font-extrabold text-[#0e0e0e] leading-none" style={{ fontSize: "3.5rem" }}>
              15+
            </span>
            <span className="font-['Barlow'] text-[#0e0e0e] text-xs uppercase tracking-widest text-center leading-tight">
              {t("years")}<br />{t("years2")}
            </span>
          </div>
          {/* Border decoration */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#f5b800]/30" />
        </div>

        {/* Text side */}
        <div>
          <p className="font-['Barlow_Condensed'] font-bold tracking-[0.3em] uppercase text-[#f5b800] text-lg mb-4">
            {t("subtitle")}
          </p>
          <h2
            className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-[#1a1a1a] mb-8"
            style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
          >
            {t("title1")}<br />
            <span className="text-[#f5b800]">{t("title2")}</span><br />
            {t("title3")}
          </h2>
          <div className="space-y-5 font-['Barlow'] text-[#555] text-base leading-relaxed">
            <p dangerouslySetInnerHTML={{ __html: t.raw("p1") }} />
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              t("check1"),
              t("check2"),
              t("check3"),
              t("check4"),
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1 h-full min-h-[20px] bg-[#f5b800] flex-shrink-0 mt-1" />
                <span className="font-['Barlow'] text-[#555] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
