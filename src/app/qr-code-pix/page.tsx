import MainShell from "@/components/main-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code para PIX | QR Creator",
  description: "Crie QR Code para pagamentos via PIX (chave ou payload). Personalize cores e baixe em PNG.",
  keywords: "qr code pix, criar qr code pix, pagamento pix qr",
  alternates: { canonical: "https://meuqrcode.online/qr-code-pix" },
};

export default function Page() {
  return (
    <MainShell initialType="pix" />
  );
}