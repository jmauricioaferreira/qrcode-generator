import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Metadata } from "next";

// Declaração global para o TypeScript
declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

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
    google: "seu-codigo-verificacao-google",
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
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113577441435329"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* High Performance Format Script */}
        <Script
          id="hpf-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.atOptions = {
                'key': 'fa9730f7de22053acc5e430b64a5ba84',
                'format': 'iframe',
                'height': 250,
                'width': 300,
                'params': {}
              };
            `,
          }}
        />
        <Script
          id="hpf-script"
          src="//www.highperformanceformat.com/fa9730f7de22053acc5e430b64a5ba84/invoke.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${dm_sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
