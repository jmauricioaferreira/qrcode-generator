import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Analytics from "@/components/analytics";
import "./globals.css";
import Script from "next/script";

const dm_sans = DM_Sans({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "QR Creator - Gerador de QR Code Gratuito e Personalizado",
    template: "%s | QR Creator",
  },
  description:
    "Crie QR Codes personalizados gratuitamente! Gerador de QR Code para URL, WhatsApp, Wi-Fi e texto. Interface simples, download em PNG, cores e tamanhos personalizáveis.",
  keywords: [
    "gerador qr code",
    "criar qr code",
    "qr code gratuito",
    "qr code personalizado",
    "gerador qr code online",
    "qr code whatsapp",
    "qr code wifi",
    "criar qr code url",
    "qr code png",
    "gerador qr code brasil",
  ],
  authors: [{ name: "QR Creator" }],
  creator: "QR Creator",
  publisher: "QR Creator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://qrcode-generator.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://qrcode-generator.vercel.app",
    title: "QR Creator - Gerador de QR Code Gratuito e Personalizado",
    description:
      "Crie QR Codes personalizados gratuitamente! Gerador de QR Code para URL, WhatsApp, Wi-Fi e texto. Interface simples, download em PNG, cores e tamanhos personalizáveis.",
    siteName: "QR Creator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QR Creator - Gerador de QR Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Creator - Gerador de QR Code Gratuito e Personalizado",
    description:
      "Crie QR Codes personalizados gratuitamente! Gerador de QR Code para URL, WhatsApp, Wi-Fi e texto.",
    images: ["/og-image.png"],
    creator: "@qrcreator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dm_sans.variable} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
