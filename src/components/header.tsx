"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import LocaleToggle from "@/components/shared/LocaleToggle";
import { Link, usePathname } from "@/i18n/navigation";

type NavKey =
  | "home"
  | "about"
  | "training"
  | "calendar"
  | "workshops"
  | "partners"
  | "map"
  | "media"
  | "press"
  | "shop"
  | "faq";

type MenuItem =
  | { key: NavKey; href: string; children?: never }
  | { key: NavKey; href?: never; children: { key: NavKey; href: string }[] };

const menu: MenuItem[] = [
  { key: "home", href: "/home" },
  { key: "about", href: "/about" },
  { key: "training", href: "/home#courses-section" },
  { key: "calendar", href: "/home#calendar-section" },
  { key: "workshops", href: "/workshops" },
  { key: "partners", href: "/partners" },
  { key: "map", href: "/map" },
  {
    key: "media",
    children: [
      { key: "media", href: "/media" },
      { key: "press", href: "/press" },
    ],
  },
  { key: "shop", href: "/shop" },
  { key: "faq", href: "/faq" },
];

export function Header() {
  const t = useTranslations("header");
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");

      if (pathname === path || (pathname === "/" && path === "/home")) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
      }
    }
    setOpenDropdown(null);
  };

  return (
    <div className="fixed inset-x-0 top-3 md:top-4 z-50 flex items-center justify-end md:justify-center gap-2 px-3 md:px-4">
      {/* Language toggle (Canada / Brazil) */}
      <LocaleToggle />

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center gap-1.5 h-10 px-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-md hover:bg-white transition-colors"
        aria-label={t("toggleMenu")}
      >
        {isOpen ? (
          <X className="w-4 h-4 text-gray-700" />
        ) : (
          <Menu className="w-4 h-4 text-gray-700" />
        )}
        <span className="text-sm text-gray-700 font-medium">{t("menu")}</span>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex h-10 items-center px-2 bg-white rounded-full border border-gray-200 shadow-lg">
        <div className="flex items-center" ref={dropdownRef}>
          {menu.map((item) =>
            item.children ? (
              <div key={item.key} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.key ? null : item.key)
                  }
                  className="hover:bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  {t(`nav.${item.key}`)}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${openDropdown === item.key ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === item.key && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-36 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={(e) => handleNavClick(e, child.href)}
                        className="block px-4 py-2.5 text-gray-800 hover:bg-gray-100 transition-colors text-sm font-medium"
                      >
                        {t(`nav.${child.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-800 transition-colors"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ),
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 right-3 w-48 md:hidden bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl overflow-hidden">
          <nav className="py-1">
            {menu.map((item) =>
              item.children ? (
                item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={(e) => {
                      handleNavClick(e, child.href);
                      setIsOpen(false);
                    }}
                    className="block px-4 py-2.5 text-gray-800 hover:bg-gray-100 transition-colors text-sm font-medium"
                  >
                    {t(`nav.${child.key}`)}
                  </Link>
                ))
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsOpen(false);
                  }}
                  className="block px-4 py-2.5 text-gray-800 hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}

      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label={t("closeMenu")}
          className="fixed inset-0 bg-black/20 md:hidden -z-10 cursor-default"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
