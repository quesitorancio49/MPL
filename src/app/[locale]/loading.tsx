export default function LocaleLoading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0e0e0e] text-center px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[#f5b800] border-t-transparent rounded-full animate-spin" />
        <p className="font-['Barlow'] text-[#9a9a8a] text-sm">Cargando...</p>
      </div>
    </main>
  );
}
