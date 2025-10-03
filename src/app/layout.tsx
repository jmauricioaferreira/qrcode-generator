import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const dm_sans = DM_Sans({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Layout renderizado");
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113577441435329"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${dm_sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
