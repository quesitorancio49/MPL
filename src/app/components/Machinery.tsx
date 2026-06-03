import { useState } from "react";
import { ArrowRight } from "lucide-react";

const machines = [
  {
    id: 1,
    name: "Excavadora Hidráulica",
    category: "Excavación",
    specs: "20–35 ton | 120–200 HP",
    desc: "Excavadoras de oruga de alto rendimiento para minería, construcción y obra civil. Brazos de largo alcance disponibles.",
    img: "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?w=600&h=420&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Bulldozer D6–D9",
    category: "Movimiento de tierra",
    specs: "180–430 HP | Hoja semiuniversal",
    desc: "Topadoras de alta potencia para empuje masivo de material, nivelación de terrenos y trabajos de gran envergadura.",
    img: "https://images.unsplash.com/photo-1680463990599-9d318aaecf71?w=600&h=420&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Motoniveladora",
    category: "Nivelación",
    specs: "150–200 HP | Hoja 3.66 m",
    desc: "Precisión milimétrica para la conformación y mantenimiento de vías, plataformas y taludes. Sistema GPS disponible.",
    img: "https://images.unsplash.com/photo-1605289355446-7aafcd144fc2?w=600&h=420&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Cargador Frontal",
    category: "Carga y transporte",
    specs: "3.5–7 m³ | 200–350 HP",
    desc: "Cargadores de rueda para manejo eficiente de material suelto en canteras, puertos y plantas de procesamiento.",
    img: "https://images.unsplash.com/photo-1560872531-552417aded86?w=600&h=420&fit=crop&auto=format",
  },
  {
    id: 5,
    name: "Compactadora Vibrante",
    category: "Compactación",
    specs: "11–14 ton | Doble tambor",
    desc: "Rodillos compactadores para bases de carretera, asfalto y rellenos. Alta fuerza centrífuga para máxima densidad.",
    img: "https://images.unsplash.com/photo-1649017109134-f7686437a966?w=600&h=420&fit=crop&auto=format",
  },
  {
    id: 6,
    name: "Grúa Sobre Oruga",
    category: "Izaje",
    specs: "50–150 ton | Pluma reticulada",
    desc: "Grúas de alta capacidad para izaje en construcción, industria petrolera y proyectos de infraestructura.",
    img: "https://images.unsplash.com/photo-1563391017873-6e6beab67fed?w=600&h=420&fit=crop&auto=format",
  },
];

const categories = ["Todos", "Excavación", "Movimiento de tierra", "Nivelación", "Carga y transporte", "Compactación", "Izaje"];

export function Machinery() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? machines : machines.filter((m) => m.category === active);

  return (
    <section id="maquinaria" className="py-28 bg-[#0f1319] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <p className="font-['Barlow_Condensed'] font-bold tracking-[0.3em] uppercase text-[#f5b800] text-lg mb-4">
              Catálogo de equipos
            </p>
            <h2
              className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white"
              style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
            >
              Nuestra<br />
              <span className="text-[#f5b800]">Maquinaria</span>
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
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1319] via-[#0f1319]/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#f5b800] text-[#0e0e0e] font-['Barlow_Condensed'] font-bold text-xs tracking-widest uppercase px-3 py-1">
                  {m.category}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-['Barlow_Condensed'] font-bold text-white uppercase tracking-wide text-xl mb-1">
                  {m.name}
                </h3>
                <p className="font-['Barlow'] text-[#f5b800] text-xs tracking-widest uppercase mb-4">{m.specs}</p>
                <p className="font-['Barlow'] text-[#9a9a8a] text-sm leading-relaxed mb-6">{m.desc}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase text-[#f5b800] border-b border-[#f5b800]/40 hover:border-[#f5b800] pb-0.5 transition-colors group-hover:gap-3"
                >
                  Solicitar información
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
