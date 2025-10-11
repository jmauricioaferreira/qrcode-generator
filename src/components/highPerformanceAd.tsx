// src/components/highPerformanceAd.tsx
"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function HighPerformanceAd() {
  useEffect(() => {
    window.atOptions = {
      key: "fa9730f7de22053acc5e430b64a5ba84",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };
  }, []);

  return (
    <div
      className="w-full max-w-[300px] h-[250px] mx-2 my-5 text-center flex flex-col justify-center items-center border border-gray-200 bg-gray-50 rounded-lg"
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <Script
        id="adsterra-script"
        src="https://www.highperformanceformat.com/fa9730f7de22053acc5e430b64a5ba84/invoke.js"
        strategy="afterInteractive" // Carrega o script após a página se tornar interativa
        onError={(e) => {
          console.error("Script da Adsterra falhou ao carregar", e);
        }}
      />
    </div>
  );
}
