import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const sections = [
  {
    title: "Responsable del tratamiento",
    content:
      "QSP Heavy Equipment. Contacto: info@qspheavyequipment.com.",
  },
  {
    title: "Finalidades del tratamiento",
    items: [
      "Gestionar solicitudes de contacto, cotización y postulación de distribuidores.",
      "Atender requerimientos de servicio y soporte.",
      "Enviar comunicaciones comerciales relacionadas con nuestros productos y servicios.",
      "Mejorar nuestras plataformas y experiencia de usuario.",
      "Cumplir obligaciones legales y requerimientos de autoridades.",
    ],
  },
  {
    title: "Base legal",
    content:
      "El tratamiento se realiza con su consentimiento, ejecución de medidas precontractuales y contractuales, interés legítimo en mejorar nuestros servicios y cumplimiento de obligaciones legales.",
  },
  {
    title: "Datos tratados",
    content:
      "Identificación y contacto (nombre, correo, teléfono, ciudad y país), intereses y mensajes. Podremos tratar datos técnicos de uso del sitio (p. ej., cookies) conforme a esta política.",
  },
  {
    title: "Derechos de los titulares",
    items: [
      "Acceder, actualizar, rectificar y suprimir sus datos.",
      "Revocar su consentimiento y oponerse al tratamiento cuando proceda.",
      "Solicitar prueba del consentimiento y conocer el uso dado a sus datos.",
    ],
  },
  {
    title: "Canales para ejercer derechos",
    content:
      "Para ejercer sus derechos, escriba a info@qspheavyequipment.com. Incluya su nombre completo, documento de identidad (si aplica) y la solicitud concreta.",
  },
  {
    title: "Encargados y transferencias",
    content:
      "Podremos compartir datos con proveedores (encargados) que prestan servicios de infraestructura, analítica, gestión de formularios y mensajería, bajo acuerdos que garantizan la seguridad y confidencialidad.",
  },
  {
    title: "Conservación",
    content:
      "Conservamos los datos únicamente durante el tiempo necesario para las finalidades indicadas o exigido por la normativa aplicable.",
  },
  {
    title: "Seguridad",
    content:
      "Implementamos medidas técnicas y organizativas razonables para proteger la integridad y confidencialidad de los datos personales.",
  },
  {
    title: "Cookies y tecnologías similares",
    content:
      "Utilizamos cookies para mejorar el funcionamiento del sitio y la experiencia de usuario. Puede configurar su navegador para bloquear o eliminar cookies; algunas funciones podrían verse afectadas.",
  },
  {
    title: "Cambios a esta política",
    content:
      "QSP podrá actualizar esta política en cualquier momento. La versión vigente se publicará en esta página con su fecha de última actualización.",
  },
];

export default function PoliticaDeDatos() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#0e0e0e]">
        {/* Hero */}
        <section className="border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <p className="font-['Barlow_Condensed'] font-semibold tracking-[0.3em] uppercase text-[#f5b800] text-sm mb-4">
              Legal
            </p>
            <h1 className="font-['Barlow_Condensed'] font-extrabold uppercase leading-[0.9] text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Política de Tratamiento<br />
              <span className="text-[#f5b800]">de Datos Personales</span>
            </h1>
            <p className="font-['Barlow'] text-[#9a9a8a] text-sm mt-6">
              Última actualización: 15 de noviembre de 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#f5f0e8]">
          <div className="max-w-4xl mx-auto px-6 py-20">
            <div className="space-y-12">
              {sections.map((s, i) => (
                <div key={i}>
                  <h2 className="font-['Barlow_Condensed'] font-bold text-[#1a1a1a] uppercase tracking-wider text-xl mb-3">
                    {i + 1}. {s.title}
                  </h2>
                  {s.content && (
                    <p className="font-['Barlow'] text-[#555] text-base leading-relaxed">
                      {s.content}
                    </p>
                  )}
                  {s.items && (
                    <ul className="list-disc list-inside space-y-1.5">
                      {s.items.map((item, j) => (
                        <li key={j} className="font-['Barlow'] text-[#555] text-base leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
