"use client";
import { useEffect, useRef } from "react";

interface ModelViewerProps {
  src: string;
  alt: string;
  className?: string;
}

export function ModelViewer({ src, alt, className = "" }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let viewer: HTMLElement | null = null;

    const init = async () => {
      try {
        await import("@google/model-viewer");
        if (!containerRef.current) return;

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

        containerRef.current.appendChild(el);
        viewer = el;
      } catch {
        // fallback: show placeholder image
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full bg-[#1a1a1a] text-[#9a9a8a] font-['Barlow'] text-sm">
              <div class="text-center p-8">
                <div class="text-4xl mb-4">🚜</div>
                <p>Modelo 3D no disponible<br/><span class="text-xs">${alt}</span></p>
              </div>
            </div>
          `;
        }
      }
    };

    init();

    return () => {
      if (viewer && containerRef.current?.contains(viewer)) {
        containerRef.current.removeChild(viewer);
      }
    };
  }, [src, alt]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} />
  );
}
