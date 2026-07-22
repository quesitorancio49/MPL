"use client";
import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Sede {
  nombre: string;
  direccion: string;
  telefono: string;
  lat: number;
  lng: number;
}

interface LocationMapProps {
  sedes: Sede[];
  className?: string;
}

export function LocationMap({ sedes, className = "" }: LocationMapProps) {
  const t = useTranslations("EducationCenter");
  const mapRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

  useEffect(() => {
    let mapInstance: L.Map | null = null;
    let cancelled = false;

    const loadMap = async () => {
      try {
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
          document.head.appendChild(link);
        }

        const L = await import("leaflet");

        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });

        if (cancelled || !mapRef.current) return;

        const map = L.map(mapRef.current, {
          center: [4.0, -60.0],
          zoom: 4,
          zoomControl: true,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        sedes.forEach((sede) => {
          const marker = L.marker([sede.lat, sede.lng]).addTo(map);
          marker.bindPopup(`
            <div style="font-family: 'Barlow', sans-serif; font-size: 13px;">
              <strong>${sede.nombre}</strong><br/>
              ${sede.direccion}<br/>
              <a href="tel:${sede.telefono}" style="color: #f5b800;">${sede.telefono}</a>
            </div>
          `);
        });

        mapInstance = map;
        if (!cancelled) setState("loaded");
      } catch (err) {
        console.error("Failed to load map:", err);
        if (!cancelled) setState("error");
      }
    };

    loadMap();

    return () => {
      cancelled = true;
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full h-full z-0 rounded-lg" />
      {state === "loading" && (
        <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center rounded-lg z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-[#f5b800] border-t-transparent rounded-full animate-spin" />
            <p className="font-['Barlow'] text-[#9a9a8a] text-sm">Cargando mapa...</p>
          </div>
        </div>
      )}
      {state === "error" && (
        <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center rounded-lg z-10">
          <div className="flex flex-col items-center gap-3 text-center px-6">
            <AlertTriangle size={24} className="text-[#f5b800]" />
            <p className="font-['Barlow'] text-[#9a9a8a] text-sm">
              No se pudo cargar el mapa.
            </p>
            <button
              onClick={() => {
                setState("loading");
                window.location.reload();
              }}
              className="flex items-center gap-2 font-['Barlow_Condensed'] text-[#f5b800] text-sm font-bold tracking-widest uppercase cursor-pointer hover:underline"
            >
              <RefreshCw size={14} />
              Intentar de nuevo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
