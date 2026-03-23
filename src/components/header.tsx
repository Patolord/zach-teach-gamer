"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type MenuItem =
  | { title: string; href: string; children?: never }
  | { title: string; href?: never; children: { title: string; href: string }[] };

const menu: MenuItem[] = [
  { title: "Home", href: "/home" },
  { title: "About", href: "/about" },
  { title: "Training", href: "/home#courses-section" },
  { title: "Calendar", href: "/home#calendar-section" },
  { title: "Workshops", href: "/workshops" },
  { title: "Map", href: "/map" },
  {
    title: "Media",
    children: [
      { title: "Media", href: "/media" },
      { title: "Press", href: "/press" },
    ],
  },
  { title: "Shop", href: "/shop" },
  { title: "FAQ", href: "/faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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
    <div className="fixed inset-x-0 top-3 md:top-4 z-50 flex justify-end md:justify-center px-3 md:px-4">
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center gap-1.5 h-10 px-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-md hover:bg-white transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-4 h-4 text-gray-700" />
        ) : (
          <Menu className="w-4 h-4 text-gray-700" />
        )}
        <span className="text-sm text-gray-700 font-medium">Menu</span>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex h-10 items-center px-2 bg-white rounded-full border border-gray-200 shadow-lg">
        <div className="flex items-center" ref={dropdownRef}>
          {menu.map((item) =>
            item.children ? (
              <div key={item.title} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.title ? null : item.title)
                  }
                  className="hover:bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  {item.title}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${openDropdown === item.title ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === item.title && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-36 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={(e) => handleNavClick(e, child.href)}
                        className="block px-4 py-2.5 text-gray-800 hover:bg-gray-100 transition-colors text-sm font-medium"
                      >
                        {child.title}
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
                {item.title}
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
                    {child.title}
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
                  {item.title}
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
          aria-label="Close menu"
          className="fixed inset-0 bg-black/20 md:hidden -z-10 cursor-default"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
