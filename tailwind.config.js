import siteConfig from "./src/config/siteConfig.js";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:   siteConfig.branding.colors.primary,
        secondary: siteConfig.branding.colors.secondary,
        surface:   siteConfig.branding.colors.surface,
      },
    },
  },
  plugins: [],
};