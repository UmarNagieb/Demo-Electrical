// Shared VoltPro demo constants (fictional demo data)
export const WHATSAPP_NUMBER = "6281234567890";
export const WHATSAPP_MESSAGE =
  "Halo VoltPro Electrical, saya ingin konsultasi mengenai jasa listrik.";

export const waLink = (msg = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const PHONE_DISPLAY = "+62 812-3456-7890";
export const EMAIL_DISPLAY = "halo@voltpro.id";
export const HOURS_DISPLAY = "Senin – Sabtu, 08.00 – 21.00 • Darurat 24/7";