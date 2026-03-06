import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <--- This tells Tailwind exactly where your files actually are
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: { primary: '#0b0f19', secondary: '#111827' },
        accent: { blue: '#3b82f6', cyan: '#22d3ee' },
        status: { danger: '#ef4444', success: '#22c55e', warning: '#f59e0b' }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(34, 211, 238, 0.5)',
        'neon-red': '0 0 15px rgba(239, 68, 68, 0.5)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;