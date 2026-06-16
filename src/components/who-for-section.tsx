"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Home,
  UserCog,
  User,
  Rocket,
} from "lucide-react";

const TARGETS = [
  {
    icon: Building2,
    title: "Küçük İşletmeler",
    description: "Dijital varlığınızı güçlendirin ve yeni müşterilere ulaşın.",
  },
  {
    icon: Stethoscope,
    title: "Klinikler",
    description: "Hastalarınızın size kolayca ulaşmasını sağlayan profesyonel siteler.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restoranlar",
    description: "Menülerinizi sergileyin ve online siparişlerinizi artırın.",
  },
  {
    icon: Home,
    title: "Emlak Ofisleri",
    description: "İlanlarınızı etkileyici bir şekilde sergileyin ve lead toplamayı artırın.",
  },
  {
    icon: UserCog,
    title: "Danışmanlar",
    description: "Uzmanlığınızı vurgulayan profesyonel bir dijital kimlik oluşturun.",
  },
  {
    icon: User,
    title: "Kişisel Markalar",
    description: "Kendi markanızı dijital dünyada güçlü bir şekilde konumlandırın.",
  },
  {
    icon: Rocket,
    title: "Girişimler",
    description: "Yeni iş fikrinizi hayata geçirmek için ihtiyacınız olan dijital altyapı.",
  },
];

export function WhoForSection() {
  return (
    <section id="kimler-icin" className="py-20 md:py-28">
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
            Hedef Kitle
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Kimler İçin Uygun?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Hizmetlerimiz, çeşitli sektörlerdeki işletmeler ve bireyler için özelleştirilmiştir.
          </p>
        </motion.div>

        {/* Target Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TARGETS.map((target, index) => {
            const Icon = target.icon;
            return (
              <motion.div
                key={target.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{target.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {target.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
