import aspectRatio from '@tailwindcss/aspect-ratio';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'text-elegant-gold',
    'bg-deep-charcoal',
    'bg-rich-burgundy',
    'bg-cream',
    'hover:bg-warm-charcoal',
    'border-rich-burgundy',
    'text-a11y-blue',
    'text-a11y-blue-dark',
    'text-a11y-pink',
    'text-a11y-pink-dark',
    'text-a11y-gray',
    'hover:text-a11y-blue-dark',
    'hover:text-a11y-pink-dark',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'yuji': ['Yuji Syuku', 'Yu Mincho', 'serif'],
        'kanteiryuu': ['Yuji Syuku', 'Yu Mincho', 'Kanteiryuu', 'HGP行書体', 'HGS行書体', 'cursive'],
      },
      colors: {
        'japanese-red': '#A6324D',
        'japanese-indigo': '#1B315E',
        'japanese-gold': '#B4A582',
        'japanese-brown': '#8E7437',
        // Accessibility-compliant colors (WCAG AA compliant)
        'a11y-blue': '#0066CC',        // 4.5:1 contrast on white
        'a11y-blue-dark': '#004499',   // 7.2:1 contrast on white  
        'a11y-pink': '#C2185B',        // 4.5:1 contrast on white
        'a11y-pink-dark': '#880E4F',   // 7.1:1 contrast on white
        'a11y-gray': '#555555',        // 7.0:1 contrast on white
        'a11y-gray-light': '#666666',  // 5.7:1 contrast on white
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'japanese-pattern': 'linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)',
      },
      spacing: {
        '128': '32rem',
      },
      transitionDuration: {
        '10000': '10000ms',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [aspectRatio, animate],
};