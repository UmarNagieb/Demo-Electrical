import { ImageIcon } from "lucide-react";

export default function PhotoPlaceholder({ label, sublabel, className = "", icon: Icon = ImageIcon }) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-xl border border-border bg-card/40 bg-grid text-center ${className}`}
    >
      <div className="px-6 py-8">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <p className="mt-3 font-heading text-sm font-semibold text-foreground">{label}</p>
        {sublabel && <p className="mt-1 text-xs text-muted-foreground">{sublabel}</p>}
      </div>
    </div>
  );
}