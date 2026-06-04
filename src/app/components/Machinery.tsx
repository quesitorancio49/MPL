"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ModelViewer } from "./ModelViewer";

export function Machinery() {
  const t = useTranslations("Machinery");
  const [active, setActive] = useState("Todos");

  const machines = [
    {
      id: 1,
      name: t("machine1_name"),
      category: t("cat1"),
      specs: t("machine1_specs"),
      desc: t("machine1_desc"),
      model: "/models/maquinaria/excavator_1.glb",
    },
    {
      id: 2,
      name: t("machine2_name"),
      category: t("cat2"),
      specs: t("machine2_specs"),
      desc: t("machine2_desc"),
      model: "/models/maquinaria/excavator_03.glb",
    },
    {
      id: 3,
      name: t("machine3_name"),
      category: t("cat3"),
      specs: t("machine3_specs"),
      desc: t("machine3_desc"),
      model: "/models/maquinaria/excavator_3d_model.glb",
    },
    {
      id: 4,
      name: t("machine4_name"),
      category: t("cat4"),
      specs: t("machine4_specs"),
      desc: t("machine4_desc"),
      model: "/models/maquinaria/komatsu_sk820_skid_steer_loader.glb",
    },
    {
      id: 5,
      name: t("machine5_name"),
      category: t("cat5"),
      specs: t("machine5_specs"),
      desc: t("machine5_desc"),
      model: "/models/maquinaria/massey_ferguson_1525_tractor.glb",
    },
    {
      id: 6,
      name: t("machine6_name"),
      category: t("cat6"),
      specs: t("machine6_specs"),
      desc: t("machine6_desc"),
      model: "/models/maquinaria/excavator_3d_model (1).glb",
    },
  ];

  const categories = [t("todos"), t("cat1"), t("cat2"), t("cat3"), t("cat4"), t("cat5"), t("cat6")];

  const filtered = active === t("todos") ? machines : machines.filter((m) => m.category === active);

  return (
    <section id="maquinaria" className="py-28 bg-[#0f1319] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <p className="font-['Barlow_Condensed'] font-bold tracking-[0.3em] uppercase text-[#f5b800] text-lg mb-4">
              {t("subtitle")}
            </p>
            <h2
              className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white"
              style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
            >
              {t("title1")}<br />
              <span className="text-[#f5b800]">{t("title2")}</span>
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-['Barlow_Condensed'] font-semibold tracking-wider uppercase text-sm px-4 py-2 transition-colors ${
                  active === cat
                    ? "bg-[#f5b800] text-[#0e0e0e]"
                    : "border border-white/20 text-[#9a9a8a] hover:border-[#f5b800] hover:text-[#f5b800]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className={`grid gap-px bg-white/10 ${
          filtered.length === 1
            ? "grid-cols-1 max-w-lg mx-auto"
            : filtered.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}>
          {filtered.map((m) => (
            <div key={m.id} className="group bg-[#0f1319] overflow-hidden">
              <div className="relative overflow-hidden h-56">
                <ModelViewer
                  src={m.model}
                  alt={m.name}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1319] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-[#f5b800] text-[#0e0e0e] font-['Barlow_Condensed'] font-bold text-xs tracking-widest uppercase px-3 py-1 z-10">
                  {m.category}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-['Barlow_Condensed'] font-bold text-white uppercase tracking-wide text-xl mb-1">
                  {m.name}
                </h3>
                <p className="font-['Barlow'] text-[#f5b800] text-xs tracking-widest uppercase mb-4">{m.specs}</p>
                <p className="font-['Barlow'] text-[#9a9a8a] text-sm leading-relaxed mb-6">{m.desc}</p>
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase text-[#f5b800] border-b border-[#f5b800]/40 hover:border-[#f5b800] pb-0.5 transition-colors group-hover:gap-3"
                >
                  {t("cta")}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
