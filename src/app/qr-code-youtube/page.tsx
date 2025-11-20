import MainShell from "@/components/main-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code para YouTube | QR Creator",
  description: "Crie QR Code para vídeos ou canais do YouTube. Personalize cor e baixe em PNG.",
  keywords: "qr code youtube, criar qr code youtube, video youtube qr",
  alternates: { canonical: "https://meuqrcode.online/qr-code-youtube" },
};

export default function Page() {
  return (
    <MainShell initialType="youtube" />
  );
}