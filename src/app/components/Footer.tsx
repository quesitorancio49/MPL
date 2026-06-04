"use client";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");

  return (
    <footer className="bg-[#090909] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/logo_normal.webp" alt="MAQUIPRO" className="h-24 w-auto" />
            </div>
            <p className="font-['Barlow'] text-[#9a9a8a] text-sm leading-relaxed mb-6">
              {t("description")}
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#9a9a8a] hover:border-[#f5b800] hover:text-[#f5b800] transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-white uppercase tracking-widest text-sm mb-6">
              {t("nav_title")}
            </h4>
            <ul className="space-y-3">
              {[
                { label: tNav("inicio"), href: "#inicio" },
                { label: tNav("nosotros"), href: "#nosotros" },
                { label: tNav("maquinaria"), href: "#maquinaria" },
                { label: tNav("ventajas"), href: "#ventajas" },
                { label: tNav("centroEducacion"), href: "/centro-educacion" },
                { label: tNav("contacto"), href: "#contacto" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-['Barlow'] text-[#9a9a8a] text-sm hover:text-[#f5b800] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-white uppercase tracking-widest text-sm mb-6">
              {t("equip_title")}
            </h4>
            <ul className="space-y-3">
              {[
                t("equip1"),
                t("equip2"),
                t("equip3"),
                t("equip4"),
                t("equip5"),
                t("equip6"),
              ].map((e) => (
                <li key={e}>
                  <Link
                    href="#maquinaria"
                    className="font-['Barlow'] text-[#9a9a8a] text-sm hover:text-[#f5b800] transition-colors"
                  >
                    {e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-white uppercase tracking-widest text-sm mb-6">
              {t("contact_title")}
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, val: "+1 (800) 123-4567" },
                { icon: Mail, val: "ventas@maquipro.com" },
                { icon: MapPin, val: "Av. Industrial 4500, Zona Norte" },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <c.icon size={14} className="text-[#f5b800] mt-0.5 flex-shrink-0" />
                  <span className="font-['Barlow'] text-[#9a9a8a] text-sm">{c.val}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/18001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 bg-[#25D366] hover:bg-[#1ebe5c] text-white px-5 py-3 font-['Barlow_Condensed'] font-bold tracking-wider uppercase text-sm transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Barlow'] text-[#555] text-xs">
            © {new Date().getFullYear()} MAQUIPRO. {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link href="/politica-de-datos" className="font-['Barlow'] text-[#555] text-xs hover:text-[#f5b800] transition-colors">
              {t("privacy")}
            </Link>
            <a href="#" className="font-['Barlow'] text-[#555] text-xs hover:text-[#f5b800] transition-colors">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
