import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { SectionHeading } from "./Services";

const AREAS = [
  { name: "Jakarta Selatan", pos: "bottom-[28%] right-[18%]" },
  { name: "Jakarta Timur", pos: "bottom-[30%] right-[6%]" },
  { name: "Jakarta Pusat", pos: "top-[42%] left-[42%]" },
  { name: "Jakarta Barat", pos: "top-[44%] left-[24%]" },
  { name: "Jakarta Utara", pos: "top-[20%] left-[40%]" },
  { name: "Bekasi", pos: "bottom-[18%] right-[2%]" },
  { name: "Depok", pos: "bottom-[10%] right-[20%]" },
];

export default function ServiceArea() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Area Pelayanan"
          title="Melayani Wilayah Jakarta & Sekitarnya"
          desc="Tim kami siap menjangkau lokasi Anda di seluruh wilayah Jakarta, Bekasi, dan Depok."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Abstract map */}
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-2xl border border-border/60 bg-grid opacity-40" />
            <div className="absolute inset-6 rounded-xl border border-border/40 bg-card/30" />
            {/* pulsing center node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-primary" />
              </span>
            </div>
            {AREAS.map((a) => (
              <motion.div
                key={a.name}
                className={`absolute ${a.pos}`}
                animate={{
                  scale: hovered === a.name ? 1.4 : 1,
                  opacity: hovered === a.name ? 1 : 0.55,
                }}
                transition={{ duration: 0.25 }}
              >
                <span className={`block h-2.5 w-2.5 rounded-full ${hovered === a.name ? "bg-primary glow-yellow-sm" : "bg-primary/60"}`} />
              </motion.div>
            ))}
            {/* conduit lines from center */}
            <svg className="absolute inset-0 h-full w-full" style={{ overflow: "visible" }}>
              {AREAS.map((a) => {
                const cx = 50, cy = 50;
                const map = {
                  "Jakarta Selatan": { x: 72, y: 62 },
                  "Jakarta Timur": { x: 88, y: 60 },
                  "Jakarta Pusat": { x: 42, y: 42 },
                  "Jakarta Barat": { x: 24, y: 44 },
                  "Jakarta Utara": { x: 40, y: 20 },
                  "Bekasi": { x: 92, y: 72 },
                  "Depok": { x: 70, y: 80 },
                };
                const p = map[a.name];
                return (
                  <line
                    key={a.name}
                    x1={`${cx}%`} y1={`${cy}%`} x2={`${p.x}%`} y2={`${p.y}%`}
                    stroke={hovered === a.name ? "hsl(48 100% 50%)" : "hsl(220 24% 28%)"}
                    strokeWidth={hovered === a.name ? 1.5 : 1}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>
            <div className="absolute left-1/2 top-1/2 mt-6 -translate-x-1/2 text-center">
              <div className="mt-10 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Navigation className="h-3.5 w-3.5 text-primary" /> Jakarta Coverage
              </div>
            </div>
          </div>

          {/* Area list */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {AREAS.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onMouseEnter={() => setHovered(a.name)}
                onMouseLeave={() => setHovered(null)}
                className={`group flex items-center gap-3 rounded-xl border px-4 py-4 transition-all duration-300 ${
                  hovered === a.name
                    ? "border-primary/60 bg-card glow-yellow-sm"
                    : "border-border bg-card/30 hover:border-primary/40"
                }`}
              >
                <MapPin className={`h-5 w-5 transition-colors ${hovered === a.name ? "text-primary" : "text-muted-foreground"}`} />
                <span className="font-medium">{a.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}