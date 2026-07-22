"use client";
import { useEffect, useRef, useState } from "react";

interface ModelViewerProps {
  src: string;
  alt: string;
  className?: string;
}

export function ModelViewer({ src, alt, className = "" }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let viewer: HTMLElement | null = null;
    let cancelled = false;

    const init = async () => {
      try {
        await import("@google/model-viewer");
        if (cancelled || !containerRef.current) return;

        const el = document.createElement("model-viewer");
        el.setAttribute("src", src);
        el.setAttribute("alt", alt);
        el.setAttribute("camera-controls", "");
        el.setAttribute("auto-rotate", "");
        el.setAttribute("rotation-per-second", "30deg");
        el.setAttribute("ar", "");
        el.setAttribute("shadow-intensity", "1");
        el.setAttribute("exposure", "0.8");
        el.style.width = "100%";
        el.style.height = "100%";
        el.style.display = "block";

        el.addEventListener("load", () => {
          if (!cancelled) setLoading(false);
        });
        el.addEventListener("error", () => {
          if (!cancelled) {
            setLoading(false);
            setFailed(true);
          }
        });

        containerRef.current.appendChild(el);
        viewer = el;
      } catch (err) {
        if (!cancelled) {
          console.error("Failed to load model-viewer library:", err);
          setLoading(false);
          setFailed(true);
        }
      }
    };

    init();

    return () => {
      cancelled = true;
      if (viewer && containerRef.current?.contains(viewer)) {
        containerRef.current.removeChild(viewer);
      }
    };
  }, [src, alt]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] z-10">
          <div className="w-8 h-8 border-2 border-[#f5b800] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] text-[#9a9a8a] font-['Barlow'] text-sm z-10">
          <div className="text-center p-8">
            <div className="text-4xl mb-4">🚜</div>
            <p>Modelo 3D no disponible<br /><span className="text-xs">{alt}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}
