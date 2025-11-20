"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import Button from "./ui/button";
import SizeButton from "./size-button";
import ColorButton from "./color-button";

export default function QRGeneratorPage() {
  const [value, setValue] = useState("url");
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [qrSize, setQrSize] = useState(200);
  const [qrColor, setQrColor] = useState("#1D1C52");
  const qrRef = useRef<HTMLDivElement | null>(null);

  const baixarPng = () => {
    if (!qrValue) return;
    // Abrir oferta em nova aba imediatamente no clique (garante não ser bloqueado)
    try {
      window.open("https://otieu.com/4/10211471", "_blank", "noopener,noreferrer");
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
      ctx.fillStyle = "#ffffff";
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
      setQrValue(`https://wa.me/${input}`);
    } else if (value === "wifi") {
      setQrValue(`WIFI:T:WPA;S=MinhaRede;P=${input};;`);
    } else {
      setQrValue(input);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full max-w-5xl border border-gray-300 bg-secondary rounded-lg p-4 lg:h-[28rem]">
        <Tabs.Root
          defaultValue="url"
          value={value}
          onValueChange={(val) => setValue(val)}
          className="lg:w-full lg:max-w-full rounded-lg p-4"
        >
          <Tabs.List className="flex border-b border-textSecondary mb-4">
            <Tabs.Trigger
              value="url"
              className={`flex-1 py-2 text-center ${
                value === "url"
                  ? "border-b-2 border-primary font-semibold"
                  : "text-textSecondary"
              }`}
            >
              URL
            </Tabs.Trigger>
            <Tabs.Trigger
              value="wpp"
              className={`flex-1 py-2 text-center ${
                value === "wpp"
                  ? "border-b-2 border-primary font-semibold"
                  : "text-textSecondary"
              }`}
            >
              WhatsApp
            </Tabs.Trigger>
            <Tabs.Trigger
              value="text"
              className={`flex-1 py-2 text-center ${
                value === "text"
                  ? "border-b-2 border-primary font-semibold"
                  : "text-textSecondary"
              }`}
            >
              Texto
            </Tabs.Trigger>
            <Tabs.Trigger
              value="wifi"
              className={`flex-1 py-2 text-center ${
                value === "wifi"
                  ? "border-b-2 border-primary font-semibold"
                  : "text-textSecondary"
              }`}
            >
              Wi-Fi
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
          <div className="flex flex-col items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row items-start  gap-6 w-full">
              <div className="flex items-start gap-2">
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
              <div className="flex items-start gap-2">
                <span className="text-sm text-textSecondary">Cor:</span>
                <ColorButton
                  color="#1d1c52"
                  label="Primária"
                  currentColor={qrColor}
                  onClick={setQrColor}
                />
                <ColorButton
                  color="#28f064"
                  label="Acento"
                  currentColor={qrColor}
                  onClick={setQrColor}
                />
                <ColorButton
                  color="#3b82f6"
                  label="Texto"
                  currentColor={qrColor}
                  onClick={setQrColor}
                />
              </div>
            </div>
            <div className="flex w-full justify-end mt-6">
              <Button
                onClick={gerarQRCode}
                variant="secondary"
                size="md"
                className="shadow-lg h-12 bg-header-start-color"
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
        <div className="flex flex-col items-center justify-center w-full lg:w-full rounded-lg p-4 lg:h-full">
          {qrValue ? (
            <div ref={qrRef} className="p-4 bg-white lg:flex-1">
              <div className="flex justify-center items-center w-full h-full">
                <QRCode
                  value={qrValue}
                  size={qrSize}
                  fgColor={qrColor}
                  bgColor="#ffffff"
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center lg:flex-1">
              <div
                className="mt-6 bg-white p-4 rounded-lg shadow"
                style={{ width: qrSize + 32, height: qrSize + 32 }}
              >
                <p>Nenhum QR Code gerado</p>
              </div>
            </div>
          )}
          <div className="flex justify-end w-full h-fit">
            <Button
              onClick={baixarPng}
              variant="accent"
              size="md"
              className="mt-4 shadow-lg h-12"
            >
              Baixar PNG
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
