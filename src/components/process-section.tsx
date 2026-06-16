"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, ClipboardList, Code2, TestTube2, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Analiz",
    description:
      "İşletmenizin ihtiyaçlarını, hedeflerinizi ve hedef kitlenizi detaylı bir şekilde analiz ediyoruz.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Planlama",
    description:
      "Proje kapsamını, tasarım konseptini ve geliştirme sürecini planlıyoruz.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Geliştirme",
    description:
      "Modern teknolojiler ile responsive, hızlı ve SEO dostu web sitenizi kodluyoruz.",
  },
  {
    number: "04",
    icon: TestTube2,
    title: "Test",
    description:
      "Tüm cihazlarda ve tarayıcılarda kapsamlı testler yaparak sorunsuz çalıştığından emin oluyoruz.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Yayınlama",
    description:
      "Web sitenizi canlıya alıyoruz ve uzun vadeli teknik destek ile yanınızda oluyoruz.",
  },
];

export function ProcessSection() {
  return (
    <section id="surec" className="py-20 md:py-28 bg-muted/30">
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
            Çalışma Sürecimiz
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Şeffaf ve düzenli bir süreç ile projelerinizi hayata geçiriyoruz.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-primary/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="h-16 w-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mx-auto shadow-md hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
