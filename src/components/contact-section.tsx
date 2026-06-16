"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="iletisim" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            İletişim
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Bizimle İletişime Geçin
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Projenizi konuşmak veya ücretsiz danışmanlık almak için bize ulaşın.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6">İletişim Bilgileri</h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Telefon</p>
                  <a
                    href="tel:+905067565708"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +90 506 756 57 08
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">E-posta</p>
                  <a
                    href="mailto:contact@mohamedtech.me"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@mohamedtech.me
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Konum</p>
                  <p className="text-muted-foreground">Ankara, Türkiye</p>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Çalışma Saatleri:</span> Pazartesi - Cumartesi, 09:00 - 18:00
              </p>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-primary rounded-2xl p-8 text-primary-foreground flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Ücretsiz Danışmanlık Alın
              </h3>
              <p className="opacity-90 leading-relaxed mb-8">
                Projenizi değerlendirelim ve size en uygun çözümü belirleyelim.
                İlk görüşme tamamen ücretsizdir.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/905067565708"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  className="w-full bg-background text-foreground hover:bg-background/90 font-medium"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp ile İletişime Geç
                </Button>
              </a>
              <a
                href="mailto:contact@mohamedtech.me"
                className="block"
              >
                <button
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-8 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  E-posta Gönder
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
