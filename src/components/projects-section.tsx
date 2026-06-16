"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "Diş Kliniği Web Sitesi",
    description:
      "Modern ve temiz tasarım ile hastaların kolayca randevu alabileceği, hizmetlerin detaylı olarak sunulduğu profesyonel bir diş kliniği web sitesi.",
    image: "/images/project-dental.png",
    tags: ["Sağlık", "Randevu Sistemi", "Responsive"],
  },
  {
    title: "Emlak Ofisi Web Sitesi",
    description:
      "İlan yönetimi, gelişmiş filtreleme ve detaylı mülk sayfaları ile emlak ofislerinin dijital ihtiyaçlarına özel tasarlanmış bir platform.",
    image: "/images/project-realestate.png",
    tags: ["Emlak", "İlan Yönetimi", "Filtreleme"],
  },
  {
    title: "Restoran Web Sitesi",
    description:
      "Menü sergileme, online rezervasyon ve müşteri yorumları ile restoranların dijital varlığını güçlendiren şık bir web sitesi tasarımı.",
    image: "/images/project-restaurant.png",
    tags: ["Yeme-İçme", "Rezervasyon", "Menü"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projeler" className="py-20 md:py-28 bg-muted/30">
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
            Örnek Projeler
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Örnek Projelerimiz
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Farklı sektörlerden örnek proje tasarım ve geliştirme çalışmalarımız.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <div className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-4 w-4 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          * Yukarıdaki projeler örnek çalışma tasarımlarıdır, gerçek müşteri projelerini temsil etmez.
        </p>
      </div>
    </section>
  );
}
