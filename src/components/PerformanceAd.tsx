"use client";
import { JSX, useEffect, useRef, useState } from "react";

export default function ProfitableDisplayAd(): JSX.Element {
  const banner = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const atOptions = {
      key: "fa9730f7de22053acc5e430b64a5ba84",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.highperformanceformat.com/fa9730f7de22053acc5e430b64a5ba84/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      script.onload = () => {
        setIsLoaded(true);
      };

      script.onerror = () => {
        setHasError(true);
        setIsLoaded(true);
      };

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);

  return (
    <div
      className="w-full max-w-[300px] h-[250px] mx-2 my-5 text-center flex flex-col justify-center items-center border border-gray-200 bg-gray-50 rounded-lg"
      ref={banner}
    >
      {!isLoaded ? (
        <div className="text-gray-500 text-sm">Carregando anúncio...</div>
      ) : hasError ? (
        <div className="text-gray-400 text-xs">Anúncio indisponível</div>
      ) : (
        <div className="text-gray-400 text-xs">Anúncio carregado</div>
      )}
    </div>
  );
}
