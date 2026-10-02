import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { waLink } from "@/lib/voltpro";
import PhotoPlaceholder from "./PhotoPlaceholder";

const BADGES = [
  { icon: BadgeCheck, label: "Profesional" },
  { icon: ShieldCheck, label: "Terpercaya" },
  { icon: Clock, label: "Responsif" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 pt-32 pb-20 lg:px-8 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              VoltPro Electrical — Demo Website
            </span>

            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Solusi Listrik <span className="text-primary text-glow">Profesional</span> untuk Rumah &amp; Bisnis
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Layanan instalasi, perbaikan, dan perawatan listrik yang aman, cepat,
              dan terpercaya.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-yellow hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                Hubungi via WhatsApp
              </a>
              <a
                href="#layanan"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-card"
              >
                Lihat Layanan
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {BADGES.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <b.icon className="h-4 w-4 text-primary" strokeWidth={2.2} />
                  {b.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-2xl border-l-2 border-t-2 border-primary/50" />
            <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-2xl border-b-2 border-r-2 border-primary/50" />
            <PhotoPlaceholder
              label="Foto utama pekerjaan nyata"
              sublabel="Teknisi saat pengerjaan lapangan"
              className="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute bottom-5 left-5 rounded-xl border border-border bg-background/90 px-5 py-3 backdrop-blur-md">
              <div className="font-heading text-2xl font-bold text-primary">10+ Tahun</div>
              <div className="text-xs text-muted-foreground">Pengalaman Lapangan</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}