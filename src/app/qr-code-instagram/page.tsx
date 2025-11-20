import MainShell from "@/components/main-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code para Instagram | QR Creator",
  description: "Crie QR Code para abrir perfis ou links do Instagram. Personalize cor e baixe em PNG.",
  keywords: "qr code instagram, criar qr code instagram, perfil instagram qr",
  alternates: { canonical: "https://meuqrcode.online/qr-code-instagram" },
};

export default function Page() {
  return (
    <MainShell initialType="instagram" />
  );
}