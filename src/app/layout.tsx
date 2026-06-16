```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora Digital | Ankara Web Tasarım ve AI Chatbot Çözümleri",
  description:
    "Ankara'da işletmeler ve bireyler için web sitesi geliştirme, web sitesi yenileme ve yapay zeka chatbot kurulumu hizmetleri.",

  verification: {
    google: "becMhwk6glbkjifc-CcALu_w_HYMBF5kEO1nx5OxBn8",
  },

  keywords: [
    "Ankara Web Tasarım",
    "Web Sitesi Yaptırma",
    "Web Sitesi Yenileme",
    "Yapay Zeka Chatbot",
    "Profesyonel Web Sitesi",
    "İşletme Web Sitesi",
  ],

  authors: [{ name: "Nexora Digital" }],

  icons: {
    icon: "/logo.svg",
  },

  openGraph: {
    title: "Nexora Digital | Ankara Web Tasarım ve AI Chatbot Çözümleri",
    description:
      "Ankara'da işletmeler ve bireyler için web sitesi geliştirme, web sitesi yenileme ve yapay zeka chatbot kurulumu hizmetleri.",
    siteName: "Nexora Digital",
    type: "website",
    locale: "tr_TR",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexora Digital | Ankara Web Tasarım ve AI Chatbot Çözümleri",
    description:
      "Ankara'da işletmeler ve bireyler için web sitesi geliştirme, web sitesi yenileme ve yapay zeka chatbot kurulumu hizmetleri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

