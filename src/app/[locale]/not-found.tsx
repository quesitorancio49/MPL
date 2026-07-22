import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0e0e0e] text-center px-6">
      <div className="max-w-md">
        <h1 className="font-['Barlow_Condensed'] text-[#f5b800] font-extrabold text-[8rem] leading-none mb-4">
          404
        </h1>
        <h2 className="font-['Barlow_Condensed'] text-white font-bold text-3xl uppercase mb-4">
          Página no encontrada
        </h2>
        <p className="font-['Barlow'] text-[#9a9a8a] text-base mb-10">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#f5b800] text-[#0e0e0e] px-8 py-3.5 font-['Barlow_Condensed'] font-bold tracking-widest uppercase rounded-lg hover:bg-[#e0a800] transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
