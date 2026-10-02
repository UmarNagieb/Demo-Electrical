import { motion } from "framer-motion";
import {
  Zap, Wrench, Lightbulb, Plug, ShieldAlert, Video, Fan, Siren, ArrowUpRight,
} from "lucide-react";
import { waLink } from "@/lib/voltpro";

const SERVICES = [
  { icon: Zap, title: "Instalasi Listrik", desc: "Pemasangan instalasi listrik baru untuk rumah, kantor, dan bisnis sesuai standar SNI & PUIL." },
  { icon: Wrench, title: "Perbaikan Listrik", desc: "Diagnosa dan perbaikan gangguan listrik, korsleting, hingga penurunan daya." },
  { icon: Lightbulb, title: "Instalasi Lampu", desc: "Pemasangan lampu pusat, downlight, dan sistem pencahayaan dekoratif yang estetik." },
  { icon: Plug, title: "Stop Kontak & Saklar", desc: "Penambahan atau penggantian stop kontak dan saklar dengan material aman dan rapi." },
  { icon: ShieldAlert, title: "Perbaikan Panel Listrik", desc: "Service & upgrade panel MCB, distribusi daya, hingga pengamanan beban berlebih." },
  { icon: Video, title: "Instalasi CCTV", desc: "Pemasangan kamera pengawas dengan kabel rapi, resolusi jernih, dan akses remote." },
  { icon: Fan, title: "Instalasi Kipas", desc: "Pemasangan kipas angin dinding & plafon, exhaust, hingga kipas industri." },
  { icon: Siren, title: "Emergency Service", desc: "Layanan darurat 24 jam untuk gangguan listrik mendadak yang butuh penanganan cepat." },
];

export default function Services() {
  return (
    <section id="layanan" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Keahlian Teknis untuk Setiap Kebutuhan Listrik"
          desc="Tim teknisi bersertifikat menangani instalasi, perbaikan, dan perawatan listrik dengan standar keamanan tinggi."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group relative bg-background p-7 transition-colors duration-300 hover:bg-card"
            >
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary/60 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-yellow-sm">
                <s.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a
                href={waLink(`Halo, saya tertarik dengan layanan: ${s.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                Pesan Sekarang <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, desc, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{desc}</p>}
    </motion.div>
  );
}