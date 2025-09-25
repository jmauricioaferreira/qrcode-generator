import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "QR Creator - Gerador de QR Code",
    short_name: "QR Creator",
    description:
      "Crie QR Codes personalizados gratuitamente! Gerador de QR Code para URL, WhatsApp, Wi-Fi e texto.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1D1C52",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
