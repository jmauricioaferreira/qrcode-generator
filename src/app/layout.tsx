import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Metadata } from "next";
import { adConfig } from "@/config/ads";

const dm_sans = DM_Sans({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "QR Creator - Gerador de QR Code Gratuito | Crie QR Codes Personalizados",
  description:
    "Crie QR Codes gratuitamente! Gerador de QR Code para URL, WhatsApp, Wi-Fi e texto. Personalize cores e tamanhos. Download em PNG de alta qualidade.",
  keywords:
    "gerador qr code, criar qr code, qr code gratuito, qr code personalizado, qr code whatsapp, qr code wifi, qr code online, gerador qr code brasil",
  authors: [{ name: "QR Creator" }],
  creator: "QR Creator",
  publisher: "QR Creator",
  robots: "index, follow",
  openGraph: {
    title: "QR Creator - Gerador de QR Code Gratuito",
    description:
      "Crie QR Codes personalizados gratuitamente! Gerador para URL, WhatsApp, Wi-Fi e texto.",
    url: "https://qrcode-creator.vercel.app",
    siteName: "QR Creator",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Creator - Gerador de QR Code Gratuito",
    description: "Crie QR Codes personalizados gratuitamente!",
  },
  verification: {
    google: adConfig.googleVerification,
  },
  alternates: {
    canonical: "https://qrcode-creator.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adConfig.client}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${dm_sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
