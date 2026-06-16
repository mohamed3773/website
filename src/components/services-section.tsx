"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, RefreshCw, Bot } from "lucide-react";

const SERVICES = [
  {
    title: "Web Sitesi Geliştirme",
    description:
      "Modern, responsive ve dönüşüm odaklı web siteleri geliştiriyoruz. İşletmeler ve bireyler için özel tasarımlar ile markanızı dijital dünyada öne çıkarıyoruz.",
    image: "/images/service-webdev.png",
    icon: Globe,
    href: "#iletisim",
  },
  {
    title: "Web Sitesi Yenileme ve Düzenleme",
    description:
      "Mevcut web sitelerinizi modernize ediyor, yeniden tasarlıyor, performansı optimize ediyor ve kullanıcı deneyimini iyileştiriyoruz.",
    image: "/images/service-redesign.png",
    icon: RefreshCw,
    href: "#iletisim",
  },
  {
    title: "AI Chatbot Kurulumu",
    description:
      "Web sitelerinize entegre edilen yapay zeka destekli chatbot'lar ile müşteri desteği, lead toplama ve otomasyon çözümleri sunuyoruz.",
    image: "/images/service-chatbot.png",
    icon: Bot,
    href: "#iletisim",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-muted/30">
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
            Hizmetlerimiz
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Profesyonel Dijital Çözümler
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            İşletmenizin dijital dönüşümü için ihtiyacınız olan tüm hizmetleri sunuyoruz.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <div className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <a
                        href={service.href}
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(service.href)?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <Button
                          variant="outline"
                          className="group/btn border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          Detaylı Bilgi
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
