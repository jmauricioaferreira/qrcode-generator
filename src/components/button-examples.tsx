import React, { useState } from "react";
import Button from "./ui/button";

// Exemplo de uso do componente Button
export default function ButtonExamples() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Exemplos de Uso do Button</h2>

      {/* Botões com estado ativo/normal */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          Botões com Estado Ativo/Normal:
        </h3>
        <div className="flex gap-2">
          <Button
            isActive={activeButton === "opcao1"}
            onClick={() =>
              setActiveButton(activeButton === "opcao1" ? null : "opcao1")
            }
            variant="primary"
          >
            Opção 1
          </Button>
          <Button
            isActive={activeButton === "opcao2"}
            onClick={() =>
              setActiveButton(activeButton === "opcao2" ? null : "opcao2")
            }
            variant="primary"
          >
            Opção 2
          </Button>
          <Button
            isActive={activeButton === "opcao3"}
            onClick={() =>
              setActiveButton(activeButton === "opcao3" ? null : "opcao3")
            }
            variant="primary"
          >
            Opção 3
          </Button>
        </div>
      </div>

      {/* Diferentes variantes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Diferentes Variantes:</h3>
        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </div>

      {/* Diferentes tamanhos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Diferentes Tamanhos:</h3>
        <div className="flex gap-2 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Botões desabilitados */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Botões Desabilitados:</h3>
        <div className="flex gap-2">
          <Button disabled>Desabilitado</Button>
          <Button disabled isActive>
            Ativo + Desabilitado
          </Button>
        </div>
      </div>

      {/* Botões com classes customizadas */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Classes Customizadas:</h3>
        <div className="flex gap-2">
          <Button className="bg-red-500 hover:bg-red-600 border-red-500">
            Customizado
          </Button>
          <Button className="rounded-full">Arredondado</Button>
        </div>
      </div>
    </div>
  );
}
