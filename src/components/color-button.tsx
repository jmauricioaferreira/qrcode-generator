import React from "react";

interface ColorButtonProps {
  color: string;
  label: string;
  currentColor: string;
  onClick: (color: string) => void;
}

export default function ColorButton({
  color,
  label,
  currentColor,
  onClick,
}: ColorButtonProps) {
  const isActive = currentColor === color;

  return (
    <button
      onClick={() => onClick(color)}
      className={`w-6 h-6 cursor-pointer rounded-full border-2 transition-all ${
        isActive
          ? "ring-2 ring-primary border-primary ring-offset-1"
          : "border-textSecondary hover:border-primary"
      }`}
      style={{ backgroundColor: color }}
      aria-label={label}
    />
  );
}
