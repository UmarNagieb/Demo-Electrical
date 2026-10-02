import { motion } from "framer-motion";

const STATS = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "500+", label: "Proyek Selesai" },
  { value: "4.9", label: "Rating Pelanggan", suffix: "/5" },
  { value: "24/7", label: "Respon Cepat" },
];

export default function TrustSection() {
  return (
    <section className="relative border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border/40 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-background px-6 py-8 text-center transition-colors hover:bg-card/60"
            >
              <div className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {s.value}
                {s.suffix && <span className="text-2xl text-muted-foreground">{s.suffix}</span>}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}