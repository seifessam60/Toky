"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, Search, Heart } from "lucide-react";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/products", label: "المنتجات" },
  { href: "/trending", label: "الأكثر مبيعاً" },
  { href: "/branches", label: "الفروع" },
  { href: "/about", label: "من نحن" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // الشفافية بس في الرئيسية (اللي فيها هيرو غامق)
  const isHome = pathname === "/";
  // الـ navbar أبيض لو: نزلت سكرول، أو إنت في صفحة غير الرئيسية، أو القائمة مفتوحة
  const solid = scrolled || !isHome || isOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // عشان لو الصفحة اتفتحت وهي منزّلة
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // اقفل القائمة لما تتنقل لصفحة تانية
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const iconColor = solid ? "text-gray-600" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-blur ${
        solid ? "bg-white/95 shadow-lg shadow-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-lg leading-none">
                T
              </span>
            </div>
            <span
              className={`font-black text-2xl tracking-tight transition-colors ${
                solid ? "text-gray-900" : "text-white"
              }`}
            >
              Toky
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-orange-500 hover:text-white ${
                    active
                      ? "bg-orange-500 text-white"
                      : solid
                        ? "text-gray-700"
                        : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button
              className={`p-2 rounded-lg transition-colors hover:bg-orange-100 hover:text-orange-500 ${iconColor}`}
              aria-label="بحث"
            >
              <Search size={20} />
            </button>
            <button
              className={`p-2 rounded-lg transition-colors hover:bg-orange-100 hover:text-orange-500 ${iconColor}`}
              aria-label="المفضلة"
            >
              <Heart size={20} />
            </button>
            <button
              className={`relative p-2 rounded-lg transition-colors hover:bg-orange-100 hover:text-orange-500 ${iconColor}`}
              aria-label="السلة"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center badge-pulse">
                3
              </span>
            </button>
            {/* Hamburger */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                solid ? "text-gray-700" : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="القائمة"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-semibold transition-colors hover:bg-orange-50 hover:text-orange-500 ${
                  pathname === link.href
                    ? "bg-orange-50 text-orange-500"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
