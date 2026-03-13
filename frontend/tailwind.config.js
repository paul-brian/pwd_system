/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      /* COLORS */
      colors: {
        primary: "#13b6ec",
        brandEmerald: "#10b981",
        brandBlue: "#3b82f6",
        darkBg: "#0f172a",
        glass: "rgba(255, 255, 255, 0.05)",
      },

      /* FONT */
      // fontFamily: {
      //   sans: ["Inter", "sans-serif"],
      // },

      /* BORDER RADIUS */
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
        twelve: "12px",
      },

      /* KEYFRAMES */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },

        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(4px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "slide-in": {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },

      /* ANIMATIONS */
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.25s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};