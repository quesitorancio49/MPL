"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: t("inicio"), href: "#inicio" },
    { label: t("nosotros"), href: "#nosotros" },
    { label: t("maquinaria"), href: "#maquinaria" },
    { label: t("ventajas"), href: "#ventajas" },
    { label: t("centroEducacion"), href: "/centro-educacion" },
    { label: t("contacto"), href: "#contacto" },
  ];

  const switchLocale = (locale: string) => {
    setLangOpen(false);
    router.replace(pathname, { locale });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0e0e0e]/95 backdrop-blur-sm shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <img src="/logo_normal.webp" alt="MAQUIPRO" className="h-16 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-['Barlow_Condensed'] font-semibold text-[15px] tracking-widest uppercase text-[#c8c0b0] hover:text-[#f5b800] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-[#c8c0b0] hover:text-[#f5b800] transition-colors border border-white/20 px-3 py-1.5"
            >
              <Globe size={14} />
              <span className="font-['Barlow_Condensed'] font-semibold text-[13px] tracking-widest uppercase">
                {t("idioma")}
              </span>
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute z-20 top-full right-0 mt-1 bg-[#0e0e0e] border border-white/20 shadow-lg">
                  <button
                    onClick={() => switchLocale("es")}
                    className="w-full text-left px-4 py-2 font-['Barlow_Condensed'] text-sm tracking-wider text-[#c8c0b0] hover:text-[#f5b800] hover:bg-white/5 transition-colors"
                  >
                    Español
                  </button>
                  <button
                    onClick={() => switchLocale("en")}
                    className="w-full text-left px-4 py-2 font-['Barlow_Condensed'] text-sm tracking-wider text-[#c8c0b0] hover:text-[#f5b800] hover:bg-white/5 transition-colors"
                  >
                    English
                  </button>
                </div>
              </>
            )}
          </div>
        </nav>

        <a
          href="tel:+1234567890"
          className="hidden lg:flex items-center gap-2 bg-[#f5b800] hover:bg-[#ffc900] text-[#0e0e0e] px-5 py-2.5 transition-colors"
        >
          <Phone size={14} strokeWidth={2.5} />
          <span className="font-['Barlow_Condensed'] font-bold tracking-wider uppercase text-sm">{t("llamanos")}</span>
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
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-['Barlow_Condensed'] font-semibold text-lg tracking-widest uppercase text-[#c8c0b0] hover:text-[#f5b800] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          {/* Mobile language switcher */}
          <div className="flex gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => { switchLocale("es"); setOpen(false); }}
              className="font-['Barlow_Condensed'] text-sm tracking-widest uppercase text-[#c8c0b0] hover:text-[#f5b800] px-3 py-1.5 border border-white/20 transition-colors"
            >
              ES
            </button>
            <button
              onClick={() => { switchLocale("en"); setOpen(false); }}
              className="font-['Barlow_Condensed'] text-sm tracking-widest uppercase text-[#c8c0b0] hover:text-[#f5b800] px-3 py-1.5 border border-white/20 transition-colors"
            >
              EN
            </button>
          </div>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-[#f5b800] text-[#0e0e0e] px-5 py-3 w-fit"
          >
            <Phone size={14} strokeWidth={2.5} />
            <span className="font-['Barlow_Condensed'] font-bold tracking-wider uppercase">{t("llamanos")}</span>
          </a>
        </div>
      )}
    </header>
  );
}
