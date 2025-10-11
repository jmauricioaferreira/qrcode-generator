"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-primary">
            QR Creator
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600"
              }`}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/sobre")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600"
              }`}
            >
              Sobre
            </Link>
            <Link
              href="/como-usar"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/como-usar")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600"
              }`}
            >
              Como Usar
            </Link>
            <Link
              href="/faq"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/faq")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-gray-600"
              }`}
            >
              FAQ
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-primary">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
