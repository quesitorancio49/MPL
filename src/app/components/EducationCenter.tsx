"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckCircle, Clock, BarChart3, GraduationCap, Monitor, Shield, MapPin, Phone, ArrowRight } from "lucide-react";
import { ModelViewer } from "./ModelViewer";
import { LocationMap } from "./LocationMap";

export function EducationCenter() {
  const t = useTranslations("EducationCenter");

  const programas = [
    {
      icon: GraduationCap,
      title: t("prog1_title"),
      desc: t("prog1_desc"),
      duracion: t("prog1_duracion"),
      nivel: t("prog1_nivel"),
      bg: "from-[#0f1319] to-[#151c26]",
    },
    {
      icon: BarChart3,
      title: t("prog2_title"),
      desc: t("prog2_desc"),
      duracion: t("prog2_duracion"),
      nivel: t("prog2_nivel"),
      bg: "from-[#151c26] to-[#1a2330]",
    },
    {
      icon: WrenchIcon,
      title: t("prog3_title"),
      desc: t("prog3_desc"),
      duracion: t("prog3_duracion"),
      nivel: t("prog3_nivel"),
      bg: "from-[#1a2330] to-[#0f1319]",
    },
    {
      icon: Shield,
      title: t("prog4_title"),
      desc: t("prog4_desc"),
      duracion: t("prog4_duracion"),
      nivel: t("prog4_nivel"),
      bg: "from-[#0f1319] to-[#151c26]",
    },
  ];

  const sedes = [
    {
      nombre: t("sede1_nombre"),
      direccion: t("sede1_direccion"),
      telefono: t("sede1_tel"),
      lat: 19.4326,
      lng: -99.1332,
    },
    {
      nombre: t("sede2_nombre"),
      direccion: t("sede2_direccion"),
      telefono: "+55 11 98765 4321",
      lat: -23.5505,
      lng: -46.6333,
    },
    {
      nombre: t("sede3_nombre"),
      direccion: t("sede3_direccion"),
      telefono: "+57 1 234 5678",
      lat: 4.7110,
      lng: -74.0721,
    },
    {
      nombre: t("sede4_nombre"),
      direccion: t("sede4_direccion"),
      telefono: "+54 11 4567 8901",
      lat: -34.6037,
      lng: -58.3816,
    },
    {
      nombre: t("sede5_nombre"),
      direccion: t("sede5_direccion"),
      telefono: "+56 2 2345 6789",
      lat: -33.4489,
      lng: -70.6693,
    },
    {
      nombre: t("sede6_nombre"),
      direccion: t("sede6_direccion"),
      telefono: "+51 1 345 6789",
      lat: -12.0464,
      lng: -77.0428,
    },
  ];

  return (
    <main className="pt-20 bg-[#0e0e0e]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1800&h=1000&fit=crop&auto=format"
            alt="Centro de capacitación"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/85 to-[#0e0e0e]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/30" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f5b800]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <p className="font-['Barlow_Condensed'] font-bold tracking-[0.3em] uppercase text-[#f5b800] text-lg mb-6">
            {t("hero_subtitle")}
          </p>
          <h1 className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white mb-8"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
            {t("hero_title1")}<br />
            <span className="text-[#f5b800]">{t("hero_title2")}</span><br />
            {t("hero_title3")}
          </h1>
          <p className="font-['Barlow'] text-[#c8c0b0] text-lg leading-relaxed max-w-2xl mb-10">
            {t("hero_desc")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#programas" className="inline-block bg-[#f5b800] hover:bg-[#ffc900] text-[#0e0e0e] px-8 py-4 font-['Barlow_Condensed'] font-bold tracking-widest uppercase transition-colors">
              {t("hero_cta")}
            </Link>
            <Link href="#sedes" className="inline-block border border-[#f5b800] text-[#f5b800] hover:bg-[#f5b800] hover:text-[#0e0e0e] px-8 py-4 font-['Barlow_Condensed'] font-bold tracking-widest uppercase transition-colors">
              {t("hero_cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programas" className="py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-['Barlow_Condensed'] font-bold tracking-[0.3em] uppercase text-[#f5b800] text-lg mb-4">
              {t("programas_subtitle")}
            </p>
            <h2 className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white"
                style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
              {t("programas_title1")} <span className="text-[#f5b800]">{t("programas_title2")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {programas.map((p, i) => (
              <div key={i} className={`bg-gradient-to-br ${p.bg} p-10 group hover:brightness-110 transition-all`}>
                <div className="w-14 h-14 border border-[#f5b800]/40 flex items-center justify-center mb-6 group-hover:bg-[#f5b800] transition-colors">
                  <p.icon size={24} className="text-[#f5b800] group-hover:text-[#0e0e0e] transition-colors" />
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-white uppercase tracking-wide text-2xl mb-3">
                  {p.title}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-[#f5b800] font-['Barlow_Condensed'] text-xs tracking-widest uppercase">
                    <Clock size={12} /> {p.duracion}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#9a9a8a] font-['Barlow_Condensed'] text-xs tracking-widest uppercase">
                    <BarChart3 size={12} /> {p.nivel}
                  </span>
                </div>
                <p className="font-['Barlow'] text-[#9a9a8a] text-sm leading-relaxed mb-6">{p.desc}</p>
                <a href="#contacto" className="inline-flex items-center gap-2 font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase text-[#f5b800] border-b border-[#f5b800]/40 hover:border-[#f5b800] pb-0.5 transition-colors group-hover:gap-3">
                  {t("cta_inscribir")} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Simulation */}
      <section className="py-28 bg-[#0f1319]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-['Barlow_Condensed'] font-bold tracking-[0.3em] uppercase text-[#f5b800] text-lg mb-4">
              {t("3d_subtitle")}
            </p>
            <h2 className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white mb-8"
                style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
              {t("3d_title1")}<br />
              <span className="text-[#f5b800]">{t("3d_title2")}</span>
            </h2>
            <p className="font-['Barlow'] text-[#9a9a8a] text-base leading-relaxed mb-10">
              {t("3d_desc")}
            </p>
            <div className="space-y-4">
              {[t("3d_feat1"), t("3d_feat2"), t("3d_feat3"), t("3d_feat4"), t("3d_feat5")].map((feat) => (
                <div key={feat} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#f5b800] flex-shrink-0 mt-0.5" />
                  <span className="font-['Barlow'] text-[#c8c0b0] text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#f5b800]/30" />
            <div className="relative z-10 overflow-hidden rounded-lg bg-[#1a1a1a]">
              <ModelViewer
                src="/models/maquinaria/excavator_3d_model.glb"
                alt="Simulador 3D de maquinaria pesada"
                className="h-[400px] w-full"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#f5b800] p-4 z-20">
              <Monitor size={28} className="text-[#0e0e0e]" />
            </div>
          </div>
        </div>
      </section>

      {/* More 3D models grid */}
      <section className="py-20 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: t("model1_title"),
                src: "/models/maquinaria/excavator_1.glb",
              },
              {
                title: t("model2_title"),
                src: "/models/maquinaria/massey_ferguson_1525_tractor.glb",
              },
              {
                title: t("model3_title"),
                src: "/models/maquinaria/komatsu_sk820_skid_steer_loader.glb",
              },
            ].map((model) => (
              <div key={model.title} className="group cursor-pointer">
                <div className="bg-[#0f1319] rounded-lg overflow-hidden border border-white/5 group-hover:border-[#f5b800]/40 transition-colors">
                  <ModelViewer
                    src={model.src}
                    alt={model.title}
                    className="h-56 w-full"
                  />
                  <div className="p-5">
                    <h4 className="font-['Barlow_Condensed'] font-bold text-white uppercase tracking-wide text-lg">
                      {model.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Locations */}
      <section id="sedes" className="py-28 bg-[#0f1319] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-['Barlow_Condensed'] font-bold tracking-[0.3em] uppercase text-[#f5b800] text-lg mb-4">
              {t("map_subtitle")}
            </p>
            <h2 className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white"
                style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
              {t("map_title1")} <span className="text-[#f5b800]">{t("map_title2")}</span>
            </h2>
            <p className="font-['Barlow'] text-[#9a9a8a] text-base mt-6 max-w-xl mx-auto">
              {t("map_desc")}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {sedes.map((sede) => (
                <div key={sede.nombre} className="bg-[#0e0e0e] border border-white/5 p-5 hover:border-[#f5b800]/40 transition-colors group">
                  <h4 className="font-['Barlow_Condensed'] font-bold text-white uppercase tracking-wide text-lg mb-2">
                    {sede.nombre}
                  </h4>
                  <p className="font-['Barlow'] text-[#9a9a8a] text-sm flex items-start gap-2 mb-1">
                    <MapPin size={14} className="text-[#f5b800] flex-shrink-0 mt-0.5" />
                    {sede.direccion}
                  </p>
                  <p className="font-['Barlow'] text-[#9a9a8a] text-sm flex items-center gap-2">
                    <Phone size={14} className="text-[#f5b800] flex-shrink-0" />
                    <a href={`tel:${sede.telefono}`} className="hover:text-[#f5b800] transition-colors">{sede.telefono}</a>
                  </p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              <LocationMap sedes={sedes} className="h-[500px] w-full rounded-lg overflow-hidden" />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="#contacto" className="inline-block bg-[#f5b800] hover:bg-[#ffc900] text-[#0e0e0e] px-8 py-4 font-['Barlow_Condensed'] font-bold tracking-widest uppercase transition-colors">
              {t("cta_agendar")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-[#f5b800]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Barlow_Condensed'] font-extrabold uppercase text-[#0e0e0e] leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            {t("cta_contacto")}
          </h2>
          <p className="font-['Barlow'] text-[#0e0e0e]/70 text-lg mb-10 max-w-xl mx-auto">
            {t("hero_desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+1234567890" className="inline-block bg-[#0e0e0e] text-[#f5b800] px-8 py-4 font-['Barlow_Condensed'] font-bold tracking-widest uppercase hover:bg-[#1a1a1a] transition-colors">
              <Phone size={16} className="inline mr-2" />+1 (800) 123-4567
            </a>
            <Link href="/#contacto" className="inline-block border-2 border-[#0e0e0e] text-[#0e0e0e] px-8 py-4 font-['Barlow_Condensed'] font-bold tracking-widest uppercase hover:bg-[#0e0e0e] hover:text-[#f5b800] transition-colors">
              {t("cta_contacto")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function WrenchIcon({ size, className }: { size?: number; className?: string }) {
  return (
    <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
