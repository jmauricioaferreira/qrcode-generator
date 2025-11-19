"use client";
import { useEffect, useRef, useState } from "react";

interface ActBannerProps {
  zone?: string; // z=10211431
  className?: string;
  style?: React.CSSProperties;
}

// Componente para injetar a tag:
// <script src="https://3nbf4.com/act/files/tag.min.js?z=10211431" data-cfasync="false" async></script>
export default function ActBanner({
  zone = "10211431",
  className = "",
  style = { minHeight: "250px", width: "100%" },
}: ActBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Evitar múltiplas injeções em StrictMode/dev
    const alreadyInjected = Array.from(
      el.querySelectorAll<HTMLScriptElement>("script")
    ).some((sc) => sc.src.includes("3nbf4.com/act/files/tag.min.js"));
    if (alreadyInjected) return;

    try {
      const s = document.createElement("script");
      s.src = `https://3nbf4.com/act/files/tag.min.js?z=${zone}`;
      s.async = true;
      s.setAttribute("data-cfasync", "false");
      s.onload = () => setLoaded(true);
      el.appendChild(s);
    } catch (err) {
      console.error("Erro ao injetar script ACT banner:", err);
    }

    // Cleanup sem alterar estado para evitar loops
    return () => {
      if (!el) return;
      const scripts = Array.from(
        el.querySelectorAll<HTMLScriptElement>("script")
      );
      scripts.forEach((sc) => {
        if (sc.src.includes("3nbf4.com/act/files/tag.min.js")) {
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