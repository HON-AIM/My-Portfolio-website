/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // "Ink & Ember: a near-black graphite base signals technical seriousness;
      // ember-orange is a warm, high-contrast CTA color that stands out against
      // dark UI (tested to convert better than blue/purple on dark backgrounds);
      // signal-green marks proof, tech stack, and completed states; electric-blue
      // is reserved for ambient gradient glows only, never for buttons or text, so
      // the palette never drifts back into generic 'purple SaaS' territory."
      colors: {
        ink: {
          DEFAULT: "#0A0A0F",   // primary background — near-black, not pure black
          soft: "#0F0F16",      // secondary background (alternating sections)
        },
        surface: {
          DEFAULT: "#14141C",   // card / panel background
          raised: "#1C1C27",    // hover / elevated card state
          border: "#2A2A38",    // hairline borders, dividers
        },
        ember: {
          DEFAULT: "#FF7A3D",   // PRIMARY accent — CTAs, links, highlights
          hover: "#FF9159",
          muted: "#E8622B",
        },
        signal: {
          DEFAULT: "#35E0A1",   // SECONDARY accent — tags, tech badges, success/proof
          muted: "#26A67A",
        },
        electric: {
          DEFAULT: "#6C8CFF",   // TERTIARY accent — used ONLY in gradients/glows, never solid buttons
        },
        paper: {
          DEFAULT: "#F5F5F7",   // primary text on dark backgrounds
          muted: "#9B9BAE",     // secondary/body text
          faint: "#828294",     // tertiary text, timestamps, captions — tuned for 4.5:1 AA
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(255,122,61,0.35)",
        card: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(255,122,61,0.15), transparent 40%), radial-gradient(circle at 80% 30%, rgba(108,140,255,0.12), transparent 40%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}
