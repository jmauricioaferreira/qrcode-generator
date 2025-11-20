"use client";

import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import QRCode from "react-qr-code";
import Button from "./ui/button";
import SizeButton from "./size-button";
import ColorButton from "./color-button";

export type QRType =
  | "url"
  | "wpp"
  | "text"
  | "wifi"
  | "vcard"
  | "instagram"
  | "youtube"
  | "pix"
  | "localizacao";

interface Props {
  initialType?: QRType;
}

export default function QRGeneratorPage({ initialType }: Props) {
  const router = useRouter();
  const [value, setValue] = useState<QRType>(initialType ?? "url");
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [qrSize, setQrSize] = useState(180);
  const [qrColor, setQrColor] = useState("#1D1C52");
  const [qrBgColor, setQrBgColor] = useState("#ffffff");
  const qrRef = useRef<HTMLDivElement | null>(null);

  const baixarPng = () => {
    if (!qrValue) return;
    // Abrir oferta em nova aba imediatamente no clique (garante não ser bloqueado)
    try {
      window.open(
        "https://otieu.com/4/10211471",
        "_blank",
        "noopener,noreferrer"
      );
    } catch (err) {
      console.error("Falha ao abrir link promocional:", err);
    }
    const svg = qrRef.current?.querySelector("svg") as SVGSVGElement | null;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const width = qrSize;
      const height = qrSize;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = qrBgColor;
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      const safe = (s: string) =>
        s
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
      const typePart = safe(value);
      const ts = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
      const fileName = `qrcode-${typePart}-${ts}.png`;
      const link = document.createElement("a");
      link.download = fileName;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = url;
  };

  const gerarQRCode = () => {
    if (value === "wpp") {
      const digits = input.replace(/\D+/g, "");
      setQrValue(digits ? `https://wa.me/${digits}` : "");
    } else if (value === "wifi") {
      setQrValue(`WIFI:T:WPA;S=MinhaRede;P=${input};;`);
    } else if (value === "instagram") {
      const s = input.trim();
      const url = /^https?:\/\//.test(s)
        ? s
        : `https://instagram.com/${s.replace(/^@/, "")}`;
      setQrValue(url);
    } else if (value === "youtube") {
      const s = input.trim();
      const url = /^https?:\/\//.test(s) ? s : `https://youtu.be/${s}`;
      setQrValue(url);
    } else if (value === "vcard") {
      const parts = input.split(";").map((p) => p.trim());
      if (parts.length >= 3) {
        const [nome, telefone, email] = parts;
        const v = `BEGIN:VCARD\nVERSION:3.0\nFN:${nome}\nTEL;TYPE=CELL:${telefone}\nEMAIL:${email}\nEND:VCARD`;
        setQrValue(v);
      } else {
        setQrValue(input);
      }
    } else if (value === "pix") {
      setQrValue(input.trim());
    } else if (value === "localizacao") {
      const m = input.split(",").map((p) => p.trim());
      if (m.length >= 2) {
        setQrValue(`geo:${m[0]},${m[1]}`);
      } else {
        setQrValue(input);
      }
    } else {
      setQrValue(input);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full max-w-6xl border border-gray-300 bg-secondary rounded-lg p-4 lg:h-[34rem]">
        <Tabs.Root
          defaultValue={initialType ?? "url"}
          value={value}
          onValueChange={(val) => {
            const next = val as QRType;
            setValue(next);
            router.push(valueToPath(next));
          }}
          className="lg:w-full lg:max-w-full rounded-lg p-4"
        >
          <Tabs.List className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 border-b border-textSecondary mb-8">
            <Tabs.Trigger
              value="url"
              className={`py-2 text-center ${
                value === "url"
                  ? "border-b-2 p-1 box-border border-primary font-semibold"
                  : "text-textSecondary p-1 border-b-2 border-transparent"
              }`}
            >
              URL
            </Tabs.Trigger>
            <Tabs.Trigger
              value="wpp"
              className={`py-2 text-center ${
                value === "wpp"
                  ? "border-b-2 p-1 box-border border-primary font-semibold"
                  : "text-textSecondary p-1 border-b-2 border-transparent"
              }`}
            >
              WhatsApp
            </Tabs.Trigger>
            <Tabs.Trigger
              value="text"
              className={`py-2 text-center ${
                value === "text"
                  ? "border-b-2 p-1 box-border border-primary font-semibold"
                  : "text-textSecondary p-1 border-b-2 border-transparent"
              }`}
            >
              Texto
            </Tabs.Trigger>
            <Tabs.Trigger
              value="wifi"
              className={`py-2 text-center ${
                value === "wifi"
                  ? "border-b-2 p-1 box-border border-primary font-semibold"
                  : "text-textSecondary p-1 border-b-2 border-transparent"
              }`}
            >
              Wi-Fi
            </Tabs.Trigger>
            <Tabs.Trigger
              value="vcard"
              className={`py-2 text-center ${
                value === "vcard"
                  ? "border-b-2 p-1 box-border border-primary font-semibold"
                  : "text-textSecondary p-1 border-b-2 border-transparent"
              }`}
            >
              VCard
            </Tabs.Trigger>
            <Tabs.Trigger
              value="instagram"
              className={`py-2 text-center ${
                value === "instagram"
                  ? "border-b-2 p-1 box-border border-primary font-semibold"
                  : "text-textSecondary p-1 border-b-2 border-transparent"
              }`}
            >
              Instagram
            </Tabs.Trigger>
            <Tabs.Trigger
              value="youtube"
              className={`py-2 text-center ${
                value === "youtube"
                  ? "border-b-2 p-1 box-border border-primary font-semibold"
                  : "text-textSecondary p-1 border-b-2 border-transparent"
              }`}
            >
              YouTube
            </Tabs.Trigger>
            <Tabs.Trigger
              value="pix"
              className={`py-2 text-center ${
                value === "pix"
                  ? "border-b-2 p-1 box-border border-primary font-semibold"
                  : "text-textSecondary p-1 border-b-2 border-transparent"
              }`}
            >
              PIX
            </Tabs.Trigger>
            <Tabs.Trigger
              value="localizacao"
              className={`py-2 text-center ${
                value === "localizacao"
                  ? "border-b-2 p-1 box-border border-primary font-semibold"
                  : "text-textSecondary p-1 border-b-2 border-transparent"
              }`}
            >
              Localização
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="url" className=" min-h-20 sm:min-h-44">
            <input
              type="text"
              placeholder="Digite uma URL"
              className="w-full border border-textSecondary rounded-lg px-4 py-2 mb-4"
              onChange={(e) => setInput(e.target.value)}
            />
          </Tabs.Content>

          <Tabs.Content value="wpp" className=" min-h-20 sm:min-h-44">
            <input
              type="text"
              placeholder="Digite o número (ex: 5599999999999)"
              className="w-full border border-textSecondary rounded-lg px-4 py-2 mb-4"
              onChange={(e) => setInput(e.target.value)}
            />
          </Tabs.Content>

          <Tabs.Content value="text" className=" min-h-20 sm:min-h-44">
            <textarea
              placeholder="Digite o texto"
              className="w-full border border-textSecondary rounded-lg px-4 py-2 mb-4"
              onChange={(e) => setInput(e.target.value)}
            />
          </Tabs.Content>

          <Tabs.Content value="wifi" className=" min-h-20 sm:min-h-44">
            <input
              type="password"
              placeholder="Digite a senha do Wi-Fi"
              className="w-full border border-textSecondary rounded-lg px-4 py-2 mb-4"
              onChange={(e) => setInput(e.target.value)}
            />
          </Tabs.Content>
          <Tabs.Content value="vcard" className=" min-h-20 sm:min-h-44">
            <input
              type="text"
              placeholder="Nome;Telefone;Email"
              className="w-full border border-textSecondary rounded-lg px-4 py-2 mb-4"
              onChange={(e) => setInput(e.target.value)}
            />
          </Tabs.Content>
          <Tabs.Content value="instagram" className=" min-h-20 sm:min-h-44">
            <input
              type="text"
              placeholder="Usuário ou URL do Instagram"
              className="w-full border border-textSecondary rounded-lg px-4 py-2 mb-4"
              onChange={(e) => setInput(e.target.value)}
            />
          </Tabs.Content>
          <Tabs.Content value="youtube" className=" min-h-20 sm:min-h-44">
            <input
              type="text"
              placeholder="ID ou URL do YouTube"
              className="w-full border border-textSecondary rounded-lg px-4 py-2 mb-4"
              onChange={(e) => setInput(e.target.value)}
            />
          </Tabs.Content>
          <Tabs.Content value="pix" className=" min-h-20 sm:min-h-44">
            <input
              type="text"
              placeholder="Chave PIX ou payload"
              className="w-full border border-textSecondary rounded-lg px-4 py-2 mb-4"
              onChange={(e) => setInput(e.target.value)}
            />
          </Tabs.Content>
          <Tabs.Content value="localizacao" className=" min-h-20 sm:min-h-44">
            <input
              type="text"
              placeholder="Latitude,Longitude"
              className="w-full border border-textSecondary rounded-lg px-4 py-2 mb-4"
              onChange={(e) => setInput(e.target.value)}
            />
          </Tabs.Content>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-col items-start  gap-6 w-full">
              <div className="flex flex-col gap-3">
                <div
                  className="flex items-start gap-2"
                  role="radiogroup"
                  aria-label="Cor do QR"
                >
                  <span className="text-sm text-textSecondary">Cor do QR:</span>
                  {[
                    "#000000",
                    "#1d1c52",
                    "#3b82f6",
                    "#28f064",
                    "#ef4444",
                    "#f97316",
                    "#a855f7",
                    "#10b981",
                  ].map((c) => (
                    <ColorButton
                      key={c}
                      color={c}
                      label={c}
                      currentColor={qrColor}
                      onClick={setQrColor}
                      role="radio"
                      ariaChecked={qrColor === c}
                    />
                  ))}
                  <input
                    type="color"
                    value={qrColor}
                    onChange={(e) => setQrColor(e.target.value)}
                    aria-label="Escolher cor do QR"
                    className="w-8 h-8 p-0 border border-textSecondary rounded"
                  />
                </div>
                <div
                  className="flex items-start gap-2"
                  role="radiogroup"
                  aria-label="Cor de fundo"
                >
                  <span className="text-sm text-textSecondary">Fundo:</span>
                  {[
                    "#ffffff",
                    "#f8fafc",
                    "#f1f5f9",
                    "#e5e7eb",
                    "#dbeafe",
                    "#e9d5ff",
                    "#fee2e2",
                    "#dcfce7",
                  ].map((c) => (
                    <ColorButton
                      key={c}
                      color={c}
                      label={c}
                      currentColor={qrBgColor}
                      onClick={setQrBgColor}
                      role="radio"
                      ariaChecked={qrBgColor === c}
                    />
                  ))}
                  <input
                    type="color"
                    value={qrBgColor}
                    onChange={(e) => setQrBgColor(e.target.value)}
                    aria-label="Escolher cor de fundo"
                    className="w-8 h-8 p-0 border border-textSecondary rounded"
                  />
                </div>
              </div>
              <div
                className="flex items-start gap-2"
                role="radiogroup"
                aria-label="Tamanho"
              >
                <span className="text-sm text-textSecondary">Tamanho:</span>
                <SizeButton
                  size={110}
                  label="P"
                  currentSize={qrSize}
                  onClick={setQrSize}
                />
                <SizeButton
                  size={180}
                  label="M"
                  currentSize={qrSize}
                  onClick={setQrSize}
                />
                <SizeButton
                  size={250}
                  label="G"
                  currentSize={qrSize}
                  onClick={setQrSize}
                />
              </div>
            </div>
            <div className="flex w-fit justify-end">
              <Button
                onClick={gerarQRCode}
                variant="secondary"
                size="lg"
                className="shadow-lg h-fit bg-header-start-color text-nowrap p-2"
              >
                Gerar QR Code
              </Button>
            </div>
          </div>
        </Tabs.Root>
        <div
          className="hidden lg:block w-px bg-gray-300 self-stretch origin-center transform scale-y-[0.9]"
          aria-hidden="true"
        />
        <div className="flex flex-col items-center justify-center w-full lg:w-fit rounded-lg p-4 lg:h-full">
          {qrValue ? (
            <div ref={qrRef} className="p-4 bg-white lg:flex-1">
              <div className="flex justify-center items-center w-full h-full min-w-2xs">
                <QRCode
                  value={qrValue}
                  size={qrSize}
                  fgColor={qrColor}
                  bgColor={qrBgColor}
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center lg:flex-1 p-4">
              <div
                className="mt-6 bg-white p-4 rounded-lg shadow  min-w-2xs"
                style={{ width: qrSize + 32, height: qrSize + 32 }}
              >
                <p>Nenhum QR Code gerado</p>
              </div>
            </div>
          )}
          <div className="flex justify-end w-full h-fit">
            <Tooltip.Provider delayDuration={250}>
              <Tooltip.Root>
                <Tooltip.Trigger className="w-full">
                  <Button
                    onClick={baixarPng}
                    variant="accent"
                    size="full"
                    className="mt-4 shadow-lg h-12"
                    disabled={!qrValue}
                  >
                    Baixar PNG
                  </Button>
                </Tooltip.Trigger>
                {!qrValue && (
                  <Tooltip.Content
                    side="top"
                    sideOffset={8}
                    className="rounded bg-gray-900 text-white px-2 py-1 text-sm shadow"
                  >
                    Para baixar o PNG, gere o QR Code antes.
                  </Tooltip.Content>
                )}
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>
      </div>
    </>
  );
}
const valueToPath = (val: string) => {
  switch (val) {
    case "url":
      return "/qr-code-url";
    case "wpp":
      return "/qr-code-whatsapp";
    case "text":
      return "/qr-code-texto";
    case "wifi":
      return "/qr-code-wifi";
    case "vcard":
      return "/qr-code-vcard";
    case "instagram":
      return "/qr-code-instagram";
    case "youtube":
      return "/qr-code-youtube";
    case "pix":
      return "/qr-code-pix";
    case "localizacao":
      return "/qr-code-localizacao";
    default:
      return "/";
  }
};
