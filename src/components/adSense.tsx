"use client";
// components/Adsense.tsx
import { useEffect } from "react";

// Define a interface para as props do nosso componente.
// Neste caso, ele espera apenas uma string chamada 'adSlot'.

const Adsense = () => {
  useEffect(() => {
    // A tipagem 'any' é usada aqui para evitar erros de tipagem do TypeScript,
    // já que o objeto 'adsbygoogle' é injetado globalmente pelo script do Google
    // e não tem uma definição de tipo.
    try {
      ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle ||
        []).push({});
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
