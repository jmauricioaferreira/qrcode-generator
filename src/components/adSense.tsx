"use client";

// Declaração global para o TypeScript
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdSense = () => {
  return (
    <>
      {/* Código exato fornecido pelo Google AdSense */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1113577441435329"
        data-ad-slot="2960169125"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </>
  );
};

export default AdSense;
