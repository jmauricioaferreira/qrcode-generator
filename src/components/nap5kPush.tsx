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

  // Após carregar, reposiciona o iframe do push para o rodapé
  useEffect(() => {
    if (!loaded) return;

    const isHighFixed = (el: Element): el is HTMLElement => {
      if (!(el instanceof HTMLElement)) return false;
      const cs = getComputedStyle(el);
      const z = parseInt(cs.zIndex || "0", 10);
      // Muitos pushes usam z-index extremamente alto e position fixed
      return cs.position === "fixed" && z >= 99999;
    };

    const applyBottomRight = (el: HTMLElement) => {
      try {
        el.style.setProperty("top", "auto", "important");
        el.style.setProperty("bottom", "0px", "important");
        el.style.setProperty("right", "0px", "important");
        el.style.setProperty("left", "auto", "important");
        el.style.setProperty("inset", "auto 0 0 auto", "important");
      } catch (err) {
        console.warn("Falha ao aplicar estilo bottom-right:", err);
      }
    };

    const reposition = () => {
      // Verifica tanto iframes quanto containers que podem encapsular o iframe
      const candidates = Array.from(document.querySelectorAll("iframe, div, section"));
      for (const el of candidates) {
        if (isHighFixed(el)) {
          applyBottomRight(el);
        }
      }
    };

    // Reposiciona imediatamente e observa novas inserções
    reposition();
    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of Array.from(m.addedNodes)) {
          if (node instanceof Element) {
            if (isHighFixed(node)) {
              applyBottomRight(node as HTMLElement);
            }
            // Também verifica elementos internos (iframes aninhados)
            const inner = node.querySelectorAll?.("iframe, div, section") ?? [];
            inner.forEach((child) => {
              if (isHighFixed(child)) {
                applyBottomRight(child as HTMLElement);
              }
            });
          }
        }
      }
    });
    obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class"] });

    // Em alguns criativos o posicionamento é reanimado; garantimos reaplicação por alguns segundos
    const interval = setInterval(reposition, 500);
    const timeout = setTimeout(() => clearInterval(interval), 8000);

    return () => {
      obs.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loaded]);

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