/**
 * Portfolio Theme
 */

export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff",
    white: "#fff",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    regular: 500,
    medium: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: "#fff",
      bg: "blue",
    },
    secondary: {
      color: "#333",
      bg: "#78b5b8",
    },
    hover: {
      color: "#333",
      bg: "#2d4a58",
    },
    disabled: {
      color: "#fff",
      bg: "#dfdfdf",
    },
  },
};
