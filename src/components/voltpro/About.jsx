import { motion } from "framer-motion";
import { ShieldCheck, Award, HeartHandshake, Check } from "lucide-react";
import { SectionHeading } from "./Services";
import PhotoPlaceholder from "./PhotoPlaceholder";

const PILLARS = [
  { icon: ShieldCheck, title: "Keamanan Utama", desc: "Setiap pekerjaan mengikuti standar PUIL & SNI dengan pengamanan sesuai prosedur." },
  { icon: Award, title: "Kualitas Terjamin", desc: "Material berkualitas dan pengerjaan rapi oleh teknisi berpengalaman & bersertifikat." },
  { icon: HeartHandshake, title: "Kepuasan Pelanggan", desc: "Komunikasi transparan, harga jelas, dan garansi pengerjaan untuk setiap proyek." },
];

const POINTS = ["Teknisi bersertifikat & terlatih", "Estimasi harga transparan", "Garansi pengerjaan", "Respon cepat 24/7"];

export default function About() {
  return (
    <section id="tentang" className="relative border-y border-border/60 bg-card/20 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-primary/50" />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-2xl border-b-2 border-r-2 border-primary/50" />
          <PhotoPlaceholder
            label="Foto Tim Teknisi"
            sublabel="Tim profesional VoltPro Electrical"
            className="aspect-[4/3] w-full"
          />
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Tentang Kami"
            title="Mitra Listrik Profesional yang Mengutamakan Keamanan"
            desc="VoltPro Electrical adalah jasa listrik profesional yang melayani area Jakarta dan sekitarnya. Kami percaya pekerjaan listrik bukan sekadar menyambung kabel — ia soal keamanan, presisi, dan kepercayaan jangka panjang."
          />

          <div className="mt-8 space-y-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-secondary/50 text-primary">
                  <p.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {POINTS.map((pt) => (
              <div key={pt} className="flex items-center gap-2 text-sm text-foreground">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {pt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}