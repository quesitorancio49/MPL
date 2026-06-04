"use client";
import { Globe, Wrench, ShieldCheck, Headphones, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function ValueProps() {
  const t = useTranslations("ValueProps");

  const pillars = [
    {
      icon: Globe,
      title: t("pillar1_title"),
      desc: t("pillar1_desc"),
    },
    {
      icon: Wrench,
      title: t("pillar2_title"),
      desc: t("pillar2_desc"),
    },
    {
      icon: ShieldCheck,
      title: t("pillar3_title"),
      desc: t("pillar3_desc"),
    },
    {
      icon: Headphones,
      title: t("pillar4_title"),
      desc: t("pillar4_desc"),
    },
    {
      icon: Zap,
      title: t("pillar5_title"),
      desc: t("pillar5_desc"),
    },
  ];

  return (
    <section id="ventajas" className="py-28 bg-[#2a2520] relative overflow-hidden scroll-mt-20">
      {/* Background accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"https://images.unsplash.com/photo-1759745125627-333e78bc1edc?w=900&h=700&fit=crop&auto=format\")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-transparent to-[#2a2520]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-['Barlow_Condensed'] font-bold tracking-[0.3em] uppercase text-[#f5b800] text-lg mb-4">
            {t("subtitle")}
          </p>
          <h2
            className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white"
            style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
          >
            {t("title1")} <span className="text-[#f5b800]">{t("title2")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`bg-[#2a2520] p-10 group hover:bg-[#352f27] transition-colors ${
                i === pillars.length - 1 && pillars.length % 3 !== 0 ? "lg:col-span-1 md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 border border-[#f5b800]/40 flex items-center justify-center mb-7 group-hover:bg-[#f5b800] group-hover:border-[#f5b800] transition-colors">
                <p.icon size={20} className="text-[#f5b800] group-hover:text-[#0e0e0e] transition-colors" />
              </div>
              <h3 className="font-['Barlow_Condensed'] font-bold text-white uppercase tracking-wide text-xl mb-4">
                {p.title}
              </h3>
              <p className="font-['Barlow'] text-[#9a9a8a] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* Yellow CTA tile */}
          <div className="bg-[#f5b800] p-10 flex flex-col justify-between">
            <div>
              <p className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#0e0e0e] leading-tight mb-4" style={{ fontSize: "1.8rem" }}>
                {t("cta_title")}
              </p>
              <p className="font-['Barlow'] text-[#0e0e0e]/70 text-sm leading-relaxed">
                {t("cta_desc")}
              </p>
            </div>
            <Link
              href="#contacto"
              className="mt-8 inline-block bg-[#0e0e0e] text-[#f5b800] px-6 py-3 font-['Barlow_Condensed'] font-bold tracking-widest uppercase text-sm hover:bg-[#1a1a1a] transition-colors w-fit"
            >
              {t("cta_btn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
