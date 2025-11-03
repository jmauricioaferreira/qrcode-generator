"use client";
import { useEffect, useState } from "react";
import { adConfig } from "@/config/ads";

// Declaração global para o TypeScript
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseBannerProps {
  adSlot?: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  adStyle?: React.CSSProperties;
  className?: string;
}

const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  adSlot = adConfig.slot,
  adFormat = adConfig.format as
    | "auto"
    | "rectangle"
    | "vertical"
    | "horizontal",
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
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Erro ao carregar anúncio AdSense:", err);
    }
  }, [isClient]);

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
        data-ad-client={adConfig.client}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseBanner;
