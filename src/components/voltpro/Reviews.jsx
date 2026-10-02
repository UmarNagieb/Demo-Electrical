import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./Services";

const REVIEWS = [
  { name: "Andi Pratama", area: "Jakarta Selatan", rating: 5, text: "Responnya cepat banget. Teknisinya rapi dan jelas menjelaskan kerusakannya. Listrik di rumah aman lagi dalam waktu singkat." },
  { name: "Siti Rahmawati", area: "Depok", rating: 5, text: "Pasang lampu dan stop kontak baru. Pengerjaannya rapi, harga transparan, dan tidak ada biaya tersembunyi. Recommended!" },
  { name: "Budi Santoso", area: "Bekasi", rating: 5, text: "Upgrade panel listrik untuk toko saya. Kerjanya profesional dan sesuai standar. Klien saya juga merasa lebih aman." },
  { name: "Dewi Lestari", area: "Jakarta Barat", rating: 4, text: "Minta tolong pasang CCTV. Hasilnya jernih dan kabelnya tertata rapi. Teknisi sopan dan tepat waktu." },
];

function Avatar({ name }) {
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 font-heading text-base font-bold text-primary">
      {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa Kata Pelanggan Kami"
          desc="Kepercayaan pelanggan adalah prioritas utama. Berikut beberapa pengalaman mereka bersama VoltPro."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card/30 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`h-4 w-4 ${s < r.rating ? "fill-primary text-primary" : "text-muted-foreground/40"}`}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-border/60 pt-4">
                <Avatar name={r.name} />
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.area}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}