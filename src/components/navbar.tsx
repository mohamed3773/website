"use client";

import * as React from "react";
import { useState, useEffect, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "Süreç", href: "#surec" },
  { label: "Kimler İçin", href: "#kimler-icin" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mounted = useIsMounted();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-primary shrink-0"
          aria-label="Nexora Digital Ana Sayfa"
        >
          <NexoraLogoIcon />
          <span className="hidden sm:inline-flex text-lg font-bold tracking-tight">
            Nexora<span className="font-normal opacity-60 ml-1">Digital</span>
          </span>
        </a>

        {/* Desktop Navigation
            CHROME COMPATIBILITY:
            - Uses CSS class .nexora-desktop-nav with @media queries in globals.css
            - Avoids Tailwind 'hidden md:flex' which can cause Chrome rendering bugs
            - Explicit visibility:visible and opacity:1 for maximum compatibility
            - No overflow:hidden on any parent
            - z-50 on header for proper stacking
        */}
        <ul className="nexora-desktop-nav" role="navigation" aria-label="Ana navigasyon">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="nexora-nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "Açık mod" : "Koyu mod"}
              className="h-9 w-9"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}

          <a
            href="#iletisim"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#iletisim");
            }}
            className="nexora-desktop-cta"
          >
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Ücretsiz Görüşme
            </Button>
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="nexora-mobile-btn h-9 w-9"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü aç"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {mobileOpen && (
        <div className="nexora-mobile-overlay">
          <nav className="nexora-mobile-content" aria-label="Mobil navigasyon">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="nexora-mobile-link"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 px-2">
              <a
                href="#iletisim"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#iletisim");
                }}
              >
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Ücretsiz Görüşme
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NexoraLogoIcon() {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-6 text-primary shrink-0"
      aria-hidden="true"
    >
      <rect x="0" y="4" width="8" height="32" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="24" y="4" width="8" height="32" rx="2" fill="currentColor" opacity="0.9" />
      <path
        d="M8 36 L8 12 L24 36 L24 4"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      />
      <circle cx="16" cy="4" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
