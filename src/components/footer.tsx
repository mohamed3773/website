"use client";

import * as React from "react";

const FOOTER_LINKS = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "Süreç", href: "#surec" },
  { label: "Kimler İçin", href: "#kimler-icin" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-primary mb-4">
              <NexoraFooterLogo />
              <span className="text-lg font-bold tracking-tight">
                Nexora<span className="font-normal opacity-60 ml-1">Digital</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Web Tasarım ve Yapay Zeka Çözümleri. İşletmeler ve bireyler için
              profesyonel dijital hizmetler sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Hızlı Bağlantılar</h4>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a
                  href="tel:+905067565708"
                  className="hover:text-primary transition-colors"
                >
                  +90 506 756 57 08
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@mohamedtech.me"
                  className="hover:text-primary transition-colors"
                >
                  contact@mohamedtech.me
                </a>
              </p>
              <p>Ankara, Türkiye</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexora Digital. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="https://wa.me/905067565708"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:contact@mohamedtech.me"
              className="hover:text-primary transition-colors"
            >
              E-posta
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NexoraFooterLogo() {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-5 text-primary shrink-0"
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
