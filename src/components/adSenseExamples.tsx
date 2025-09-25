"use client";
import AdSenseBanner from "./adSenseBanner";

// Exemplo de como usar o AdSense em diferentes locais
export default function AdSenseExamples() {
  return (
    <div className="space-y-8">
      {/* Anúncio Banner no topo */}
      <section className="w-full">
        <h3 className="text-lg font-semibold mb-4">Anúncio Banner</h3>
        <AdSenseBanner adSlot="2960169125" adFormat="auto" className="w-full" />
      </section>

      {/* Anúncio Retangular */}
      <section className="w-full max-w-md mx-auto">
        <h3 className="text-lg font-semibold mb-4">Anúncio Retangular</h3>
        <AdSenseBanner
          adSlot="2960169125"
          adFormat="rectangle"
          className="w-full"
        />
      </section>

      {/* Anúncio Vertical (para sidebar) */}
      <section className="w-48">
        <h3 className="text-lg font-semibold mb-4">Anúncio Vertical</h3>
        <AdSenseBanner
          adSlot="2960169125"
          adFormat="vertical"
          className="w-full"
        />
      </section>

      {/* Anúncio Horizontal */}
      <section className="w-full">
        <h3 className="text-lg font-semibold mb-4">Anúncio Horizontal</h3>
        <AdSenseBanner
          adSlot="2960169125"
          adFormat="horizontal"
          className="w-full"
        />
      </section>
    </div>
  );
}
