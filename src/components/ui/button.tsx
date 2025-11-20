import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  variant?: "primary" | "accent" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  title?: string;
}

export default function Button({
  children,
  onClick,
  isActive = false,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  title,
}: ButtonProps) {
  const baseClasses =
    "font-medium rounded transition-all duration-200 cursor-pointer border-2";

  const variantClasses = {
    primary: isActive
      ? "bg-primary text-white border-primary shadow-sm"
      : "bg-white text-text border-textSecondary hover:bg-gray-50",
    accent: isActive
      ? "bg-accent text-white border-accent shadow-sm"
      : "bg-white text-text border-textSecondary hover:bg-gray-50",
    secondary: isActive
      ? "bg-header-start-color text-white border-header-start-color shadow-sm"
      : "bg-header-start-color text-text border-textSecondary hover:bg-gray-50",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:bg-white"
    : "";

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className,
  ].join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      title={title}
    >
      {children}
    </button>
  );
}
