import hexToRgba from "hex-to-rgba";

export const colors = {
  white: "#ffffff",
  offwhite: "#FFFAF7",
  metawhite: "#f7f7f7",
  black: "#000000",
  lightgrey: "#e6e6e6",
  grey: "#888888",
  midgrey: "#707070",
  darkgrey: "#666666",
  green: "#175c4c",
  darkgreen: "#0F4A3C",
  cream: "#efdbce",
  red: "#aa0000",
  crimson: "#673333",
};

export const theme = {
  colors,
  fonts: {
    baskerville: "baskerville-display-pt",
    gillSans: "gill-sans-nova",
  },
  sitePaddings: {
    mobile: "2rem",
    desktop: "2rem",
  },
  utils: {
    hexToRgba,
  },
};
