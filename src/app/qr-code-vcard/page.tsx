import MainShell from "@/components/main-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code para VCard | QR Creator",
  description: "Crie QR Code com contato VCard (Nome;Telefone;Email). Personalize cores e baixe em PNG.",
  keywords: "qr code vcard, contato qr code, criar qr code contato",
  alternates: { canonical: "https://meuqrcode.online/qr-code-vcard" },
};

export default function Page() {
  return (
    <MainShell initialType="vcard" />
  );
}