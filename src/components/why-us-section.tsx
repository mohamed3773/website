"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Smartphone,
  Search,
  BrainCircuit,
  MessageSquareHeart,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: Cpu,
    title: "Modern Teknolojiler",
    description: "En güncel web teknolojilerini kullanarak hızlı ve güvenli çözümler üretiyoruz.",
  },
  {
    icon: Zap,
    title: "Hızlı Teslimat",
    description: "Zamanında teslimat ile projelerinizi planladığınız tarihte yayına alıyoruz.",
  },
  {
    icon: Smartphone,
    title: "Mobil Uyumlu Yapı",
    description: "Tüm cihazlarda mükemmel görünen responsive tasarımlar oluşturuyoruz.",
  },
  {
    icon: Search,
    title: "SEO Dostu Altyapı",
    description: "Arama motorlarında üst sıralarda yer almanız için SEO optimizasyonu yapıyoruz.",
  },
  {
    icon: BrainCircuit,
    title: "Yapay Zeka Entegrasyonları",
    description: "Chatbot ve otomasyon çözümleri ile işletmenizi geleceğe hazırlıyoruz.",
  },
  {
    icon: MessageSquareHeart,
    title: "Şeffaf İletişim",
    description: "Proje süresince açık ve düzenli iletişim ile her adımda bilgilendiriyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Uzun Vadeli Destek",
    description: "Proje tesliminden sonra da teknik destek ve bakım hizmeti sunuyoruz.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function WhyUsSection() {
  return (
    <section id="neden-biz" className="py-20 md:py-28">
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
            Neden Biz
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Neden Nexora Digital?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            İşletmenizi dijital dünyada bir adım öne taşıyacak profesyonel çözümler sunuyoruz.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
