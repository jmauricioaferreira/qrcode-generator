"use client";
import { useEffect, useRef, useState } from "react";

interface Nap5kPushProps {
  zone?: string; // default 10211479
  className?: string;
  style?: React.CSSProperties;
}

// Componente Inpage Push: injeta https://nap5k.com/tag.min.js com dataset.zone
export default function Nap5kPush({
  zone = "10211479",
  className = "",
  style = { minHeight: "250px", width: "100%" },
}: Nap5kPushProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Evitar múltiplas injeções (StrictMode/dev)
    const alreadyInjected = Array.from(
      el.querySelectorAll<HTMLScriptElement>("script")
    ).some((sc) => sc.src.includes("nap5k.com/tag.min.js"));
    if (alreadyInjected) return;

    try {
      const s = document.createElement("script");
      s.dataset.zone = zone;
      s.src = "https://nap5k.com/tag.min.js";
      s.async = true;
      s.onload = () => setLoaded(true);
      el.appendChild(s);
    } catch (err) {
      console.error("Erro ao injetar script Nap5k Inpage Push:", err);
    }

    return () => {
      if (!el) return;
      const scripts = Array.from(el.querySelectorAll<HTMLScriptElement>("script"));
      scripts.forEach((sc) => {
        if (sc.src.includes("nap5k.com/tag.min.js")) {
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