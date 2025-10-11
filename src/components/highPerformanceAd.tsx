"use client";
import { useEffect, useState } from "react";

// Declaração global para o TypeScript
declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

export default function HighPerformanceAd() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Verifica se o script já foi carregado
    if (typeof window !== "undefined" && window.atOptions) {
      setIsLoaded(true);
      return;
    }

    // Se não estiver carregado, aguarda um pouco e tenta novamente
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div
        id="highperformanceformat-250x250"
        className="w-full max-w-[300px] h-[250px] flex items-center justify-center bg-gray-100 rounded-lg border border-gray-200"
        style={{ minHeight: "250px" }}
      >
        {!isLoaded ? (
          <div className="text-gray-500 text-sm">Carregando anúncio...</div>
        ) : (
          <div className="text-gray-400 text-xs">Anúncio carregado</div>
        )}
      </div>
    </div>
  );
}
