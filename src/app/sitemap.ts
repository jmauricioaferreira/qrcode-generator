import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://meuqrcode.online";
  const now = new Date();
  const pages = [
    "/",
    "/qr-code-url",
    "/qr-code-whatsapp",
    "/qr-code-wifi",
    "/qr-code-texto",
    "/qr-code-vcard",
    "/qr-code-instagram",
    "/qr-code-youtube",
    "/qr-code-pix",
    "/qr-code-localizacao",
    "/faq",
    "/como-usar",
    "/sobre",
  ];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}