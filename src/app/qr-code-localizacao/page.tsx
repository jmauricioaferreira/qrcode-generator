import MainShell from "@/components/main-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code para Localização | QR Creator",
  description: "Crie QR Code com coordenadas geográficas (geo:lat,lng). Personalize cor e baixe em PNG.",
  keywords: "qr code localização, criar qr code geo, mapa qr code",
  alternates: { canonical: "https://meuqrcode.online/qr-code-localizacao" },
};

export default function Page() {
  return (
    <MainShell initialType="localizacao" />
  );
}