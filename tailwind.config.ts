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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'shadow-pulse-bottom': 'shadowPulseBottom 4s ease-in-out infinite',
        'pop': 'pop 0.6s ease-in-out',
        'shadow-fix': 'shadowFix 0.15s ease forwards ',
        'TypeWriter': 'typing 4s, cursor 0.6s steps(1) infinite',
      },
      keyframes: {
        shadowPulseBottom: {
          '0%, 100%': { boxShadow: '0 4px 10px -2px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 8px 20px -2px rgba(139, 92, 246, 0.6)' },
        },
        pop: {'50%': {transform: 'scale(1.1)'} , '100%': {transform: 'scale(1)'}},
        shadowFix: {
          '0%': { boxShadow: '0 4px 10px -2px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 8px 18px -2px rgba(139, 92, 246, 0.4)' },
          '100%': { boxShadow: '0 8px 20px -2px rgba(139, 92, 246, 0.6)' },
        },
        cursor: {
          '0%, 50%': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(139, 92, 246, 0.6)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        
      },
      
    },
  },
  plugins: [],
};
export default config;
