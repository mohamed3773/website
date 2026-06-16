"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Bir web sitesi yaptırmak ne kadar sürer?",
    answer:
      "Proje kapsamına göre değişmekle birlikte, basit bir tanıtım sitesi 1-2 hafta, daha kapsamlı projeler 3-6 hafta arasında teslim edilir. Sürecin her aşamasında bilgilendirilirsiniz.",
  },
  {
    question: "Web sitesi geliştirme fiyatlarınız nedir?",
    answer:
      "Fiyatlandırma proje kapsamına, özelliklere ve tasarım detaylarına göre belirlenir. Ücretsiz danışmanlık görüşmemizde projenizi değerlendirip size özel bir teklif sunuyoruz.",
  },
  {
    question: "Mevcut web sitemi yenileyebilir misiniz?",
    answer:
      "Evet! Mevcut web sitenizi modernize edebilir, tasarımını yenileyebilir, performansını artırabilir ve SEO uyumluluğunu iyileştirebiliriz. Mevcut içeriğinizi de koruyarak bu geçişi yapabiliriz.",
  },
  {
    question: "AI chatbot web siteme nasıl entegre edilir?",
    answer:
      "Chatbot çözümümüz web sitenize özel olarak tasarlanır ve entegre edilir. Müşteri destek, lead toplama ve otomasyon senaryolarına göre özelleştirilir. Eğitim ve kurulum sürecinde size tam destek sağlıyoruz.",
  },
  {
    question: "Web sitem mobil uyumlu olacak mı?",
    answer:
      "Tüm web sitelerimiz responsive tasarım ile geliştirilir. Mobil, tablet ve masaüstü dahil tüm cihazlarda mükemmel görünecek ve sorunsuz çalışacak şekilde tasarlıyoruz.",
  },
  {
    question: "Proje sonrası destek sağlıyor musunuz?",
    answer:
      "Evet! Proje tesliminden sonra da uzun vadeli teknik destek ve bakım hizmeti sunuyoruz. Güncellemeler, hata düzeltmeleri ve yeni özellik eklemeleri konusunda yanınızdayız.",
  },
  {
    question: "SEO optimizasyonu yapıyor musunuz?",
    answer:
      "Tüm web sitelerimiz SEO dostu altyapı ile geliştirilir. Sayfa hızı, meta etiketler, yapılandırılmış veri, semantik HTML ve teknik SEO optimizasyonlarını standart olarak uyguluyoruz.",
  },
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer:
      "Havale/EFT, kredi kartı ve online ödeme yöntemleri ile çalışıyoruz. Proje başlangıcında anlaşılan ödeme planına göre taksitli ödeme imkanı da sunuyoruz.",
  },
];

export function FAQSection() {
  return (
    <section id="sss" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Sıkça Sorulan Sorular
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            SSS
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Hizmetlerimiz hakkında merak edilenleri yanıtlıyoruz.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md data-[state=open]:shadow-primary/5 transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
