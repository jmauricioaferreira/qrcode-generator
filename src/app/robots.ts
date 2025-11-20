import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://meuqrcode.online";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}