// src/components/highPerformanceAd.tsx
"use client";
import { useEffect } from "react";

export default function HighPerformanceAd() {
  useEffect(() => {
    // Carrega o script diretamente
    const script = document.createElement("script");
    script.innerHTML = `
      atOptions = {
        'key': 'fa9730f7de22053acc5e430b64a5ba84',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    `;
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.src =
      "//www.highperformanceformat.com/fa9730f7de22053acc5e430b64a5ba84/invoke.js";
    script2.async = true;
    document.head.appendChild(script2);
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div
        id="highperformanceformat-250x250"
        className="w-full max-w-[300px] h-[250px] flex items-center justify-center bg-gray-100 rounded-lg border border-gray-200"
        style={{ minHeight: "250px" }}
      >
        <div className="text-gray-500 text-sm">Carregando anúncio...</div>
      </div>
    </div>
  );
}
