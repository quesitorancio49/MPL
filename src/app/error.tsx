"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center bg-[#0e0e0e] text-center px-6">
          <div className="max-w-md">
            <h1 className="font-['Barlow_Condensed'] text-[#f5b800] font-extrabold text-[6rem] leading-none mb-4">
              Error
            </h1>
            <h2 className="font-['Barlow_Condensed'] text-white font-bold text-3xl uppercase mb-4">
              Algo salió mal
            </h2>
            <p className="font-['Barlow'] text-[#9a9a8a] text-base mb-6">
              Ocurrió un error inesperado. Por favor intenta de nuevo.
            </p>
            {process.env.NODE_ENV === "development" && (
              <p className="font-['Barlow'] text-[#666] text-xs mb-10 max-w-sm mx-auto break-all">
                {error.message}
              </p>
            )}
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 bg-[#f5b800] text-[#0e0e0e] px-8 py-3.5 font-['Barlow_Condensed'] font-bold tracking-widest uppercase rounded-lg hover:bg-[#e0a800] transition-colors cursor-pointer"
            >
              Intentar de nuevo
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
