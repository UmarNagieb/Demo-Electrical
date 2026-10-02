import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Services";
import PhotoPlaceholder from "./PhotoPlaceholder";

const PROJECTS = [
  { title: "Instalasi Listrik Rumah", cat: "Residensial" },
  { title: "Upgrade Panel Listrik", cat: "Panel & Distribusi" },
  { title: "Instalasi Lampu", cat: "Pencahayaan" },
  { title: "Instalasi CCTV", cat: "Keamanan" },
  { title: "Renovasi Sistem Listrik", cat: "Renovasi" },
];

export default function Portfolio() {
  return (
    <section id="proyek" className="relative border-y border-border/60 bg-card/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Hasil Kerja yang Berbicara"
          desc="Beberapa contoh proyek instalasi, perbaikan, dan renovasi listrik yang telah kami selesaikan."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background"
            >
              <PhotoPlaceholder
                label={`Foto: ${p.title}`}
                sublabel={p.cat}
                className="aspect-[4/3] w-full border-0 bg-card/30 transition-colors group-hover:bg-card/60"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-border/60 bg-background/80 px-5 py-4 backdrop-blur-sm">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.cat}</span>
                  <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background/70 text-primary transition-all duration-300 group-hover:border-primary group-hover:glow-yellow-sm">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}