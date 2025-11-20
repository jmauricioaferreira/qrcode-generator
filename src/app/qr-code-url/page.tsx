import MainShell from "@/components/main-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code para URL | QR Creator",
  description: "Crie QR Codes para links e páginas web. Personalize cor do QR e fundo, tamanho e baixe em PNG.",
  keywords: "qr code url, criar qr code link, qr code para site, qr code personalizado",
  alternates: { canonical: "https://meuqrcode.online/qr-code-url" },
};

export default function Page() {
  return (
    <MainShell initialType="url" />
  );
}