import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#7B1015",
        crimsonDark: "#550B0F",
        crimsonLight: "#A01820",
        parchment: "#F5F0EA",
        parchmentDark: "#EDE5D8",
        ink: "#1A1008",
        muted: "#7A6A5A",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        canela: ['var(--font-canela)', 'Farabee', 'sans-serif'],
        sans: ['var(--font-sans)', 'Farabee Straight', 'sans-serif'],
      },
      borderRadius: {
        ornamental: '0px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
