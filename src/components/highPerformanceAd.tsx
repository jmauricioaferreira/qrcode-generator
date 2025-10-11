// src/components/highPerformanceAd.tsx
"use client";
import { useEffect, useRef } from "react";

export default function HighPerformanceAd() {
  const banner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const atOptions = {
        key: "fa9730f7de22053acc5e430b64a5ba84",
        format: "iframe",
        height: 250,
        width: 300,
        params: {},
      };
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `"//www.highperformanceformat.com/fa9730f7de22053acc5e430b64a5ba84/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);

  return (
    <div
      className="w-full max-w-[300px] h-[250px] mx-2 my-5 text-center flex flex-col justify-center items-center border border-gray-200 bg-gray-50 rounded-lg"
      ref={banner}
    >
      <div className="text-gray-500 text-sm">Carregando anúncio...</div>
    </div>
  );
}
