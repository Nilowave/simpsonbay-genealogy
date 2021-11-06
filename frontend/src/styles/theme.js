import hexToRgba from "hex-to-rgba";

export const colors = {
  white: "#ffffff",
  offwhite: "#FFFAF7",
  black: "#000000",
  grey: "#888888",
  green: "#175c4c",
  darkgreen: "#0F4A3C",
  cream: "#efdbce",
};

export const theme = {
  colors,
  fonts: {
    baskerville: "baskerville-display-pt",
    gillSans: "gill-sans-nova",
  },
  sitePaddings: {
    mobile: "3rem",
    desktop: "10.2rem",
  },
  utils: {
    hexToRgba,
  },
};
