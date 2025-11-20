import MainShell from "@/components/main-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code para Wi‑Fi | QR Creator",
  description: "Crie QR Code para compartilhar acesso ao Wi‑Fi. Defina senha, personalize cores e baixe em PNG.",
  keywords: "qr code wifi, criar qr code wifi, compartilhar wifi qr",
  alternates: { canonical: "https://meuqrcode.online/qr-code-wifi" },
};

export default function Page() {
  return (
    <MainShell initialType="wifi" />
  );
}