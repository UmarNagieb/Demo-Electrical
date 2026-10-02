import { Zap, MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import {
  waLink, PHONE_DISPLAY, EMAIL_DISPLAY, HOURS_DISPLAY,
} from "@/lib/voltpro";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = ["Instalasi Listrik", "Perbaikan Listrik", "Instalasi Lampu", "Perbaikan Panel", "Instalasi CCTV", "Emergency Service"];
const AREAS = ["Jakarta Selatan", "Jakarta Timur", "Jakarta Pusat", "Jakarta Barat", "Jakarta Utara", "Bekasi", "Depok"];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="group flex items-center gap-2">
              <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-heading text-xl font-bold tracking-tight">
                Volt<span className="text-primary">Pro</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Jasa listrik profesional untuk rumah & bisnis. Aman, cepat, dan
              terpercaya di Jakarta dan sekitarnya.
            </p>
            <p className="mt-6 text-xs text-muted-foreground/70">
              *Website ini adalah demo/portfolio untuk keperluan presentasi.
              Data bersifat fiktif.
            </p>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">Navigasi</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">Layanan</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-muted-foreground">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">Kontak</h4>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground">
                  <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" /> {EMAIL_DISPLAY}
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {HOURS_DISPLAY}
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {AREAS.map((a) => (
                <span key={a} className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/50 px-2 py-1 text-[11px] text-muted-foreground">
                  <MapPin className="h-2.5 w-2.5 text-primary" />{a}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-4 w-4 animate-pulse" strokeWidth={2.5} />
            </span>
            <span className="font-heading font-semibold text-foreground">VoltPro Electrical</span>
            <span className="text-muted-foreground/60">— Always On</span>
          </div>
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} VoltPro Electrical (Demo). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}