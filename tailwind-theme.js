const theme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  colors: {
    mint: "#9cffd8",
    aqua: "#3BDFDF",
    tennis: "#DEFFB5",
    transparent: "transparent",

    black: "#000",
    white: "#fff",

    gray: {
      100: "#f7f7f7",
      200: "#ededed",
      300: "#e2e2e2",
      400: "#cbcbcb",
      500: "#a0a0a0",
      600: "#717171",
      700: "#4a4a4a",
      800: "#282828",
      900: "#1a1a1a",
    },
  },
  spacing: {
    0: "0",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    24: "24px",
    26: "26px",
    32: "32px",
    40: "40px",
    44: "44px",
    46: "46px",
    56: "56px",
    64: "64px",
    72: "72px",
    80: "80px",
    100: "100px",
    128: "128px",
    256: "256px",
    312: "312px",
    428: "428px",
    512: "512px",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
  },
  fontFamily: {
    sans: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
    serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
    mono: [
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ],
  },
  fontSize: {
    xs: "0.875rem",
    sm: "1rem",
    base: "1.125rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "1.875rem",
    "3xl": "2.25rem",
    "4xl": "3rem",
    "5xl": "4rem",
    "6xl": "5rem",
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.6",
    relaxed: "1.7",
    loose: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, .8), 0 10px 10px -5px rgba(0, 0, 0, .8)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
    "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
  },
  container: {
    center: true,
    padding: "32px",
  },
  extend: {
    backgroundImage: (theme) => ({
      "gradient-brand": "linear-gradient(-8deg, #3BDFDF, #DEFFB5)",
    }),
    backgroundSize: {
      full: "100% 100%",
      expand: "100% 300%",
    },
  },
};

module.exports = theme;