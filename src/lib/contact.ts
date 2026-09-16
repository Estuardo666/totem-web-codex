import { BUSINESS } from "@/lib/seo";

export const CONTACT_EMAIL = "totemmassmedia@gmail.com";

/** Digits only, no plus sign — the format wa.me expects. */
const WHATSAPP_NUMBER = BUSINESS.telephone.replace(/\D/g, "");

const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Tótem, quiero contarles sobre mi proyecto.";

/**
 * A wa.me link opens WhatsApp on mobile and WhatsApp Web on desktop, so it is
 * the one form that works everywhere without an app-specific scheme.
 */
export const whatsappUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const mailtoUrl = (subject = "Consulta desde totemmassmedia.com") =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
