import siteConfig from "../config/siteConfig.js";

/**
 * Construit l'URL wa.me depuis le template de message dans siteConfig.
 * @param {object} formData - { nom, telephone, service, date, heure, depart, arrivee, notes }
 * @returns {string} URL prête pour window.open()
 */
export function buildWhatsAppUrl(formData) {
  const { brandName, brandSuffix } = siteConfig.branding;
  const brandFull = `${brandName} ${brandSuffix}`;
  const notesLine = formData.notes ? `📝 *Notes :* ${formData.notes}` : "";

  let message = siteConfig.contact.whatsapp.messageTemplate;

  const replacements = {
    "{{brandFull}}":  brandFull,
    "{{nom}}":        formData.nom       || "",
    "{{telephone}}":  formData.telephone || "",
    "{{service}}":    formData.service   || "",
    "{{date}}":       formData.date      || "",
    "{{heure}}":      formData.heure     || "",
    "{{depart}}":     formData.depart    || "",
    "{{arrivee}}":    formData.arrivee   || "",
    "{{notesLine}}":  notesLine,
  };

  Object.entries(replacements).forEach(([key, val]) => {
    message = message.split(key).join(val);
  });

  // Supprime les doubles lignes vides résiduelles si notes vide
  message = message
    .split("\n")
    .filter((line, i, arr) => !(line === "" && arr[i - 1] === ""))
    .join("\n");

  return `https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
