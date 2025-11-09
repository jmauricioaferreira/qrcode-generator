"use client";
import { useEffect, useRef, useState } from "react";

interface Al5smBannerProps {
  zone?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Banner que injeta o script fornecido: https://al5sm.com/tag.min.js
// Usado para substituir o componente de AdSense.
export default function Al5smBanner({
  zone = "10166937",
  className = "",
  style = { minHeight: "250px", width: "100%" },
}: Al5smBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Evitar múltiplas injeções em modos de desenvolvimento/StrictMode
    const alreadyInjected = Array.from(
      el.querySelectorAll<HTMLScriptElement>("script")
    ).some((sc) => sc.src.includes("al5sm.com/tag.min.js"));
    if (alreadyInjected) return;

    try {
      const s = document.createElement("script");
      s.dataset.zone = zone;
      s.src = "https://al5sm.com/tag.min.js";
      s.async = true;
      s.onload = () => setLoaded(true);
      el.appendChild(s);
    } catch (err) {
      console.error("Erro ao injetar script de anúncio:", err);
    }

    // Não alterar estado no cleanup para evitar loops em StrictMode
    return () => {
      if (!el) return;
      const scripts = Array.from(el.querySelectorAll<HTMLScriptElement>("script"));
      scripts.forEach((sc) => {
        if (sc.src.includes("al5sm.com/tag.min.js")) {
          sc.remove();
        }
      });
    };
  }, [zone]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {!loaded && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "#666",
            fontSize: "14px",
          }}
        >
          Carregando anúncio...
        </div>
      )}
    </div>
  );
}