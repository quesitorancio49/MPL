import { Globe, Wrench, ShieldCheck, Headphones, Zap } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Cobertura Latinoamericana",
    desc: "Presencia en 18 países de América Latina con una red de distribuidores y talleres autorizados listos para atenderte.",
  },
  {
    icon: Wrench,
    title: "Asesoría Técnica Especializada",
    desc: "Nuestro equipo de ingenieros te ayuda a seleccionar el equipo ideal para tu proyecto, evitando sobrecostos y errores.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía y Calidad Certificada",
    desc: "Todos nuestros equipos cuentan con garantía de fábrica y certificación internacional. Cero compromisos con la calidad.",
  },
  {
    icon: Headphones,
    title: "Soporte Post-Venta 24/7",
    desc: "Centro de asistencia técnica disponible las 24 horas, los 7 días de la semana para minimizar tiempos muertos.",
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    desc: "Amplio stock disponible para entrega inmediata. Logística especializada en equipos de gran tonelaje a todo el territorio.",
  },
];

export function ValueProps() {
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
            Por qué elegirnos
          </p>
          <h2
            className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white"
            style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
          >
            Nuestras <span className="text-[#f5b800]">Ventajas</span>
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
                ¿Listo para potenciar tu proyecto?
              </p>
              <p className="font-['Barlow'] text-[#0e0e0e]/70 text-sm leading-relaxed">
                Habla con nuestros asesores y recibe una cotización personalizada en menos de 24 horas.
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-8 inline-block bg-[#0e0e0e] text-[#f5b800] px-6 py-3 font-['Barlow_Condensed'] font-bold tracking-widest uppercase text-sm hover:bg-[#1a1a1a] transition-colors w-fit"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
