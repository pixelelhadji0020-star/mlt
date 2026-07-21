/**
 * ════════════════════════════════════════════════════════════
 *  SITE CONFIG — Seul fichier à modifier pour chaque client.
 *  Tout le site (composants, couleurs Tailwind, manifest,
 *  index.html, message WhatsApp) se met à jour depuis ici.
 * ════════════════════════════════════════════════════════════
 */

const siteConfig = {

  /* ──────────────────────────────────────────
     1. BRANDING
  ────────────────────────────────────────── */
  branding: {
    brandName:    "MLT",
    brandSuffix:  "Services VTC",
    slogan:       "Service de chauffeur privé premium à Dakar.",
    sloganAccent: "Discrétion. Élégance. Ponctualité.",

    siteTitle:       "MLT Services VTC — Transport Privé à Dakar",
    siteDescription: "Chauffeur privé haut de gamme à Dakar. Trajets urbains, hors Dakar et navettes AIBD. Réservation instantanée par WhatsApp.",

    logoPath:   "/icons/logo-mlt.png",
    favicon192: "/icons/icon-192.png",
    favicon512: "/icons/icon-512.png",

    colors: {
      primary: {
        50:  "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e3a8a",
        900: "#1a3a6b",
        950: "#0f2347",
      },
      secondary: {
        50:  "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f5a623",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03",
      },
      surface: {
        50:  "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
    },

    theme: "dark", // ✅ CORRIGÉ — "white" n'existe pas, seules valeurs valides : "dark" | "light"
  },

  /* ──────────────────────────────────────────
     PWA — alimente manifest.json + index.html
  ────────────────────────────────────────── */
  pwa: {
    shortName:       "MLT VTC",
    themeColor:      "#0f2347",
    backgroundColor: "#0f2347",
    startUrl:        "/",
    display:         "standalone",
    orientation:     "portrait",
    lang:            "fr",
    categories:      ["travel", "lifestyle"],
    shortcut: {
      name:      "Réserver maintenant",
      shortName: "Réserver",
      url:       "/#reservation",
    },
  },

  /* ──────────────────────────────────────────
     2. COORDONNÉES
  ────────────────────────────────────────── */
  contact: {
    phoneDisplay: "+221 76 367 85 01",
    phoneE164:    "221763678501", // ✅ CORRIGÉ — 76 367 85 01 → commence par 76, pas 77

    email:   "",
    address: "Dakar, Sénégal",

    whatsapp: {
      number: "221763678501", // ✅ CORRIGÉ — cohérent avec phoneDisplay

      messageTemplate: [
        "🚘 *Demande de Réservation — {{brandFull}}*",
        "",
        "👤 *Nom :* {{nom}}",
        "📱 *Téléphone :* {{telephone}}",
        "🗂️ *Type de trajet :* {{service}}",
        "📅 *Date :* {{date}}",
        "⏰ *Heure souhaitée :* {{heure}}",
        "📍 *Départ :* {{depart}}",
        "🏁 *Arrivée :* {{arrivee}}",
        "{{notesLine}}",
        "",
        "Bonjour {{brandFull}}, je souhaite réserver ce trajet selon les informations ci-dessus. Merci de confirmer la disponibilité et le tarif.",
      ].join("\n"),
    },
  },

  /* ──────────────────────────────────────────
     3. CONTENUS
  ────────────────────────────────────────── */
  content: {
    services: [
      {
        id:          "dakar",
        label:       "Trajets à Dakar",
        tagline:     "Prestige urbain, ponctualité absolue",
        description: "Déplacements d'affaires, rendez-vous VIP, shopping haut de gamme, sorties nocturnes. Votre chauffeur privé au cœur de la capitale.",
        features: [
          "Prise en charge domicile/hôtel",
          "Attente sur place incluse",
          "Discrétion garantie",
        ],
        icon:      "City",
        accent:    "primary",
        priceFrom: null,
      },
      {
        id:          "hors-dakar",
        label:       "Trajets Hors Dakar",
        tagline:     "Sénégal sur-mesure, confort premium",
        description: "Excursions vers Saly, Saint-Louis, Ziguinchor, Touba et toutes destinations. Voyages longue distance dans un confort d'exception.",
        features: [
          "Itinéraires personnalisés",
          "Pauses sur demande",
          "Véhicule climatisé 24/7",
        ],
        icon:      "Route",
        accent:    "secondary",
        priceFrom: null,
      },
      {
        id:          "aibd",
        label:       "Navettes AIBD",
        tagline:     "Aéroport sans stress, accueil personnalisé",
        description: "Transferts sécurisés vers l'Aéroport International Blaise Diagne. Accueil panneau nominatif, assistance bagages, ponctualité garantie.",
        features: [
          "Suivi vol en temps réel",
          "Accueil personnalisé",
          "Transfert retour assuré",
        ],
        icon:      "Plane",
        accent:    "primary",
        priceFrom: null,
      },
    ],

    coverageZones: [
      "Plateau", "Almadies", "Ngor", "Mermoz", "Sacré-Cœur",
      "Point E", "Yoff", "AIBD", "Rufisque", "Saly",
    ],

    trustBadges: [
      { label: "Service 5★", icon: "Star"   },
      { label: "Sécurisé",   icon: "Shield" },
      { label: "24h/7j",     icon: "Clock"  },
    ],

    currency: "FCFA",
  },
};

export default siteConfig;
