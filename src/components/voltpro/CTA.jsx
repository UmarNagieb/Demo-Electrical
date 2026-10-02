import { useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Zap } from "lucide-react";
import { waLink } from "@/lib/voltpro";

export default function CTA() {
  const btnRef = useRef(null);

  const onMove = (e) => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    const dist = Math.hypot(x, y);
    if (dist > 80) {
      el.style.transform = "translate(0,0)";
      return;
    }
    el.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  };
  const onLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0,0)";
  };

  return (
    <section id="contact" onMouseMove={onMove} className="relative overflow-hidden py-28 lg:py-40">
      {/* watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none font-heading text-[22vw] font-bold leading-none tracking-tighter text-foreground/[0.03] lg:text-[16rem]">
          VOLTPRO
        </span>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Zap className="h-3.5 w-3.5" strokeWidth={2.5} /> Siap Membantu
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Masalah Listrik? <span className="text-primary text-glow">Kami Siap Membantu.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Konsultasi gratis & estimasi harga transparan. Tim teknisi bersertifikat
            kami siap datang ke lokasi Anda.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              ref={btnRef}
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onMouseLeave={onLeave}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground transition-[box-shadow,filter] duration-300 hover:glow-yellow hover:brightness-105"
              style={{ transition: "transform 0.15s ease-out, box-shadow 0.3s, filter 0.3s" }}
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}