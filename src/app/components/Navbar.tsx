"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Maquinaria", href: "#maquinaria" },
    { label: "Por qué nosotros", href: "#ventajas" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0e0e0e]/95 backdrop-blur-sm shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio">
          <img src="/logo_normal.webp" alt="MAQUIPRO" className="h-16 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-['Barlow_Condensed'] font-semibold text-[15px] tracking-widest uppercase text-[#c8c0b0] hover:text-[#f5b800] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+1234567890"
          className="hidden lg:flex items-center gap-2 bg-[#f5b800] hover:bg-[#ffc900] text-[#0e0e0e] px-5 py-2.5 transition-colors"
        >
          <Phone size={14} strokeWidth={2.5} />
          <span className="font-['Barlow_Condensed'] font-bold tracking-wider uppercase text-sm">Llámanos</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0e0e0e] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-['Barlow_Condensed'] font-semibold text-lg tracking-widest uppercase text-[#c8c0b0] hover:text-[#f5b800] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-[#f5b800] text-[#0e0e0e] px-5 py-3 w-fit"
          >
            <Phone size={14} strokeWidth={2.5} />
            <span className="font-['Barlow_Condensed'] font-bold tracking-wider uppercase">Llámanos</span>
          </a>
        </div>
      )}
    </header>
  );
}
