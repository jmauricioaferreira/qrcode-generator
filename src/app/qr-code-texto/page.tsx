import MainShell from "@/components/main-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code para Texto | QR Creator",
  description: "Crie QR Code com texto livre. Personalize cor do QR e fundo, escolha tamanho e baixe em PNG.",
  keywords: "qr code texto, criar qr code texto, qr code mensagem",
  alternates: { canonical: "https://meuqrcode.online/qr-code-texto" },
};

export default function Page() {
  return (
    <MainShell initialType="text" />
  );
}