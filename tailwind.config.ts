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
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        "chart-1": "var(--chart-1)",
        "chart-2": "var(--chart-2)",
        "chart-3": "var(--chart-3)",
        "chart-4": "var(--chart-4)",
        "chart-5": "var(--chart-5)",
        sidebar: "var(--sidebar)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        "sidebar-primary": "var(--sidebar-primary)",
        "sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
        "sidebar-accent": "var(--sidebar-accent)",
        "sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
        "sidebar-border": "var(--sidebar-border)",
        "sidebar-ring": "var(--sidebar-ring)",
      },
      animation: {
        "shadow-pulse-bottom": "shadowPulseBottom 4s ease-in-out infinite",
        pop: "pop 0.6s ease-in-out",
        "shadow-fix": "shadowFix 0.15s ease forwards",
        TypeWriter: "typing 4s, cursor 0.6s steps(1) infinite",
      },
      keyframes: {
        shadowPulseBottom: {
          "0%, 100%": {
            boxShadow: "0 4px 10px -2px rgba(214, 48, 58, 0.3)",
          },
          "50%": {
            boxShadow: "0 8px 20px -2px rgba(214, 48, 58, 0.6)",
          },
        },
        pop: {
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        shadowFix: {
          "0%": { boxShadow: "0 4px 10px -2px rgba(214, 48, 58, 0.3)" },
          "50%": { boxShadow: "0 8px 18px -2px rgba(214, 48, 58, 0.4)" },
          "100%": { boxShadow: "0 8px 20px -2px rgba(214, 48, 58, 0.6)" },
        },
        cursor: {
          "0%, 50%": { borderColor: "transparent" },
          "50%": { borderColor: "rgba(214, 48, 58, 0.6)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;