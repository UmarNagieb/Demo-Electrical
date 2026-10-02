import { motion } from "framer-motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./Services";

const FAQS = [
  { q: "Apakah teknisi bisa datang ke lokasi?", a: "Ya. Tim kami melayani area Jakarta Selatan, Timur, Pusat, Barat, Utara, Bekasi, dan Depok. Cukup hubungi via WhatsApp dan kami akan menjadwalkan kunjungan sesuai kebutuhan Anda." },
  { q: "Apakah melayani keadaan darurat?", a: "Tentu. Kami menyediakan layanan Emergency Service 24 jam untuk gangguan listrik mendadak seperti korsleting, mati total, atau panel bermasalah yang butuh penanganan segera." },
  { q: "Apakah bisa memberikan estimasi harga sebelumnya?", a: "Bisa. Setelah mengetahui jenis pekerjaan dan kondisi lapangan, kami akan memberikan estimasi biaya yang transparan tanpa biaya tersembunyi sebelum pengerjaan dimulai." },
  { q: "Area mana saja yang dilayani?", a: "Kami menjangkau seluruh wilayah Jakarta, Bekasi, dan Depok. Untuk lokasi di luar area tersebut, silakan konsultasikan via WhatsApp untuk penjadwalan khusus." },
  { q: "Apakah pekerjaan memiliki garansi?", a: "Ya. Setiap pekerjaan kami berikan garansi pengerjaan. Jika ada masalah pada hasil pekerjaan dalam masa garansi, kami akan memperbaikinya tanpa biaya tambahan." },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative border-y border-border/60 bg-card/20 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          desc="Jawaban singkat untuk pertanyaan umum seputar layanan listrik kami."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border/60 bg-background px-5 transition-colors data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}