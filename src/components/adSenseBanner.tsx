"use client";
import { useEffect, useState } from "react";

// Declaração global para o TypeScript
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseBannerProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  adStyle?: React.CSSProperties;
  className?: string;
}

const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  adSlot,
  adFormat = "auto",
  adStyle = { display: "block" },
  className = "",
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("Erro ao carregar anúncio AdSense:", err);
    }
  }, [isClient]);

  // Don't render the ad on the server to prevent hydration mismatch
  if (!isClient) {
    return (
      <div
        className={`ad-container ${className}`}
        style={{ minHeight: "250px" }}
      >
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
      </div>
    );
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-1113577441435329"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseBanner;
