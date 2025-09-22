"use client";
// components/Adsense.tsx
import { useEffect } from "react";

// Define a interface para as props do nosso componente.
// Neste caso, ele espera apenas uma string chamada 'adSlot'.
interface AdsenseProps {
  adSlot: string;
}

const Adsense = ({ adSlot }: AdsenseProps) => {
  useEffect(() => {
    // A tipagem 'any' é usada aqui para evitar erros de tipagem do TypeScript,
    // já que o objeto 'adsbygoogle' é injetado globalmente pelo script do Google
    // e não tem uma definição de tipo.
    console.log("adsbygoogle", window.adsbygoogle);
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1113577441435329"
      data-ad-slot="2960169125"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Adsense;
