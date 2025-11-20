import React from "react";
import Button from "./ui/button";

interface SizeButtonProps {
  size: number;
  label: string;
  currentSize: number;
  onClick: (size: number) => void;
}

export default function SizeButton({
  size,
  label,
  currentSize,
  onClick,
}: SizeButtonProps) {
  return (
    <Button
      isActive={currentSize === size}
      onClick={() => onClick(size)}
      size="sm"
      variant="primary"
      role="radio"
      ariaChecked={currentSize === size}
      ariaLabel={`Tamanho ${label}`}
    >
      {label}
    </Button>
  );
}
