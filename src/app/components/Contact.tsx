"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("Contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    equipment: "",
    accepted: false,
  });
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-white border border-[#d4cfc8] text-[#1a1a1a] placeholder-[#bbb] px-5 py-3.5 font-['Barlow'] text-sm rounded-lg focus:outline-none focus:border-[#f5b800] focus:ring-2 focus:ring-[#f5b800]/20";

  const equipmentOptions = [
    t("option1"),
    t("option2"),
    t("option3"),
    t("option4"),
    t("option5"),
    t("option6"),
    t("option7"),
  ];

  return (
    <section id="contacto" className="py-28 bg-[#f5f0e8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Info side */}
        <div className="lg:sticky lg:top-28">
          <h2
            className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-[#1a1a1a] mb-6"
            style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
          >
            {t("title1")}<br />
            <span className="text-[#f5b800]">{t("title2")}</span>
          </h2>
          <p className="font-['Barlow'] text-[#666] text-base leading-relaxed mb-10 max-w-md">
            {t("description")}
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Phone, label: t("phone"), val: "+1 (800) 123-4567" },
              { icon: Mail, label: t("email"), val: "ventas@maquipro.com" },
              { icon: MapPin, label: t("office"), val: "Av. Industrial 4500, Zona Norte" },
              { icon: MessageCircle, label: t("whatsapp"), val: "+1 (800) 123-4567" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#f5b800]/40 flex items-center justify-center flex-shrink-0">
                  <c.icon size={16} className="text-[#f5b800]" />
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] text-[#888] uppercase tracking-widest text-xs mb-0.5">{c.label}</p>
                  <p className="font-['Barlow'] text-[#1a1a1a] text-sm">{c.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image strip */}
          <div className="mt-10 overflow-hidden rounded-xl h-48">
            <img
              src="https://images.unsplash.com/photo-1773415314118-0dfdfb36ce36?w=700&h=300&fit=crop&auto=format"
              alt="Excavadora cargada en camión"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
        </div>

        {/* Form side */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-[#f5b800]/30 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#f5b800] flex items-center justify-center mb-6 rounded-full">
                <Send size={24} className="text-[#0e0e0e]" />
              </div>
              <h3 className="font-['Barlow_Condensed'] font-bold text-[#1a1a1a] uppercase text-2xl mb-3">
                {t("form_success_title")}
              </h3>
              <p className="font-['Barlow'] text-[#666] text-sm">
                {t("form_success_desc")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-5">
              <div>
                <label className="block font-['Barlow_Condensed'] font-semibold text-[#1a1a1a] tracking-widest text-sm mb-1.5">
                  {t("form_name")}
                </label>
                <input
                  required
                  className={inputClass}
                  placeholder={t("form_name_placeholder")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-['Barlow_Condensed'] font-semibold text-[#1a1a1a] tracking-widest text-sm mb-1.5">
                  {t("form_email")}
                </label>
                <input
                  required
                  type="email"
                  className={inputClass}
                  placeholder={t("form_email_placeholder")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-['Barlow_Condensed'] font-semibold text-[#1a1a1a] tracking-widest text-sm mb-1.5">
                  {t("form_phone")}
                </label>
                <input
                  className={inputClass}
                  placeholder={t("form_phone_placeholder")}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-['Barlow_Condensed'] font-semibold text-[#1a1a1a] tracking-widest text-sm mb-1.5">
                  {t("form_equipment")}
                </label>
                <div className="relative">
                  <div
                    className={`${inputClass} cursor-pointer appearance-none pr-11 flex items-center justify-between`}
                    onClick={() => setOpen(!open)}
                  >
                    <span className={form.equipment ? "text-[#1a1a1a]" : "text-[#bbb]"}>
                      {form.equipment || t("form_equipment_placeholder")}
                    </span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  {open && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                      <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border border-[#d4cfc8] rounded-lg shadow-lg overflow-hidden">
                        {equipmentOptions.map((o) => (
                          <button
                            key={o}
                            type="button"
                            className={`w-full text-left px-5 py-3 font-['Barlow'] text-sm transition-colors ${
                              form.equipment === o
                                ? "bg-[#f5b800] text-[#0e0e0e]"
                                : "text-[#1a1a1a] hover:bg-[#f5b800] hover:text-[#0e0e0e]"
                            }`}
                            onClick={() => {
                              setForm({ ...form, equipment: o });
                              setOpen(false);
                            }}
                          >
                            {o}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={!form.accepted}
                className="w-full bg-[#f5b800] text-[#0e0e0e] py-3.5 font-['Barlow_Condensed'] font-bold tracking-widest uppercase flex items-center justify-center gap-3 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {t("form_submit")}
              </button>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.accepted}
                  onChange={(e) => setForm({ ...form, accepted: e.target.checked })}
                  className="mt-0.5 w-4 h-4 accent-[#f5b800] rounded border-[#d4cfc8]"
                />
                <span className="font-['Barlow'] text-[#888] text-sm leading-relaxed">
                  {t("form_privacy")}{" "}
                  <a href="/politica-de-datos" target="_blank" rel="noopener noreferrer" className="text-[#f5b800] underline">
                    {t("form_privacy_link")}
                  </a>
                  {t("form_privacy_note")}
                </span>
              </label>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
