module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  important: true,
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
  theme: {
    extend: {
      backgroundImage: {
        "onDark-icon-share": "var(--arrow-ondark-icon-url)",
        "onLight-icon-share": "var(--arrow-onlight-icon-url)",
        "grannary-effect": "var(--filter-grannary-image-url)",
      },
      fontFamily: {
        notion: [
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI Variable Display"',
          '"Segoe UI"',
          "Helvetica",
          '"Apple Color Emoji"',
          "Arial",
          "sans-serif",
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      colors: {
        primary: "rgb(255 84 47)",
        darkMode: "rgb(25, 25, 25)",
      },

      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: "" },
            "code::after": { content: "" },
          },
        },
      },
      fontSize: {
        xsm: "clamp(0.6rem, 0.09vi + 0.56rem, 0.69rem)",
        sm: "clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vi + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vi + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vi + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vi + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vi + 2.9rem, 8.88rem)",
      },
      lineHeight: {
        sm: "clamp(1rem, 0.17vi + 0.76rem + 0.3rem, 1.1rem)",
        base: "clamp(1.4rem, 0.34vi + 0.91rem + 0.4rem, 1.55rem)",
        lg: "clamp(1.7rem, 0.61vi + 1.1rem + 0.45rem, 1.85rem)",
        xl: "clamp(1.85rem, 1vi + 1.31rem + 0.3rem, 2.2rem)",
        "2xl": "clamp(2.2rem, 1.56vi + 1.56rem + 0.35rem, 2.5rem)",
        "3xl": "clamp(2.55rem, 2.38vi + 1.85rem + 0.35rem, 2.75rem)",
        "4xl": "clamp(3.15rem, 3.54vi + 2.17rem + 0.35rem, 3.4rem)",
        "5xl": "clamp(3.85rem, 5.18vi + 2.52rem + 0.3rem, 4.1rem)",
        "6xl": "clamp(4.5rem, 7.48vi + 2.9rem + 0.35rem, 4.9rem)",
      },
      container: {
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
  plugins: [require("@tailwindcss/typography")],
};
