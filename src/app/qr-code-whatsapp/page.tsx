import MainShell from "@/components/main-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code para WhatsApp | QR Creator",
  description: "Crie QR Code para iniciar conversa no WhatsApp com número pré-preenchido. Personalize cor e baixe em PNG.",
  keywords: "qr code whatsapp, criar qr code whatsapp, link whatsapp qr",
  alternates: { canonical: "https://meuqrcode.online/qr-code-whatsapp" },
};

export default function Page() {
  return (
    <MainShell initialType="wpp" />
  );
}