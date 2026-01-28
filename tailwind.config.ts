import type { Config } from "tailwindcss";

/**
 * Design System Configuration
 * Single source of truth for all design tokens
 *
 * This configuration centralizes:
 * - Color palette (semantic & brand colors)
 * - Typography (font families)
 * - Spacing & sizing
 * - Border radius
 * - Shadows (Neo-Brutalism style)
 * - Animations
 */

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ============================================
      // COLOR PALETTE
      // ============================================
      colors: {
        // Semantic colors that change with theme (via CSS variables)
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Primary brand color - Indigo
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          // Static values for reference/fallback
          light: "#818cf8", // indigo-400
          dark: "#4f46e5",  // indigo-600
        },

        // Secondary color
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },

        // Accent color - Cyan/Sky
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          light: "#22d3ee", // cyan-400
          dark: "#0ea5e9",  // sky-500
        },

        // Muted/subtle elements
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        // Card backgrounds
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        // Form elements
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        // Semantic status colors
        success: {
          DEFAULT: "var(--success)",
          light: "#34d399", // emerald-400
          dark: "#10b981",  // emerald-500
        },
        warning: {
          DEFAULT: "var(--warning)",
          light: "#fbbf24", // amber-400
          dark: "#f59e0b",  // amber-500
        },
        error: {
          DEFAULT: "var(--error)",
          light: "#f87171", // red-400
          dark: "#ef4444",  // red-500
        },

        // Neo-Brutalism shadow color
        shadow: "var(--shadow-color)",
      },

      // ============================================
      // TYPOGRAPHY
      // ============================================
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Consolas", "monospace"],
      },

      fontSize: {
        // Custom sizes for headings
        "display-1": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-1": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-2": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-3": ["1.875rem", { lineHeight: "1.3" }],
        "heading-4": ["1.5rem", { lineHeight: "1.4" }],
      },

      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        // Neo-Brutalism typically uses sharp corners
        none: "0",
        sm: "0.125rem",   // 2px - subtle rounding
        DEFAULT: "0.25rem", // 4px
        md: "0.375rem",   // 6px
        lg: "0.5rem",     // 8px
        xl: "0.75rem",    // 12px
        "2xl": "1rem",    // 16px
        full: "9999px",
      },

      // ============================================
      // SPACING
      // ============================================
      spacing: {
        // Custom spacing for consistent layouts
        "4.5": "1.125rem",  // 18px
        "13": "3.25rem",    // 52px
        "15": "3.75rem",    // 60px
        "18": "4.5rem",     // 72px
        "22": "5.5rem",     // 88px
        "26": "6.5rem",     // 104px
        "30": "7.5rem",     // 120px
      },

      // ============================================
      // BOX SHADOWS - Neo-Brutalism Style
      // ============================================
      boxShadow: {
        // Neo-Brutalism hard shadows (light mode)
        "neo-sm": "2px 2px 0px 0px var(--shadow-color)",
        "neo": "4px 4px 0px 0px var(--shadow-color)",
        "neo-md": "4px 4px 0px 0px var(--shadow-color)",
        "neo-lg": "6px 6px 0px 0px var(--shadow-color)",
        "neo-xl": "8px 8px 0px 0px var(--shadow-color)",

        // Hover state shadows
        "neo-hover": "6px 6px 0px 0px var(--shadow-color)",
        "neo-active": "2px 2px 0px 0px var(--shadow-color)",
      },

      // ============================================
      // TRANSITIONS
      // ============================================
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "400": "400ms",
      },

      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // ============================================
      // ANIMATIONS
      // ============================================
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-down": "slide-down 0.6s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "draw": "draw-in 1.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "draw-in": {
          "0%": { strokeDashoffset: "var(--path-length, 100)" },
          "100%": { strokeDashoffset: "0" },
        },
      },

      // ============================================
      // Z-INDEX SCALE
      // ============================================
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },

      // ============================================
      // CONTAINER
      // ============================================
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
