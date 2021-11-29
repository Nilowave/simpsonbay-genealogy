import hexToRgba from "hex-to-rgba";
import { css } from "vue-styled-components";

function hexToHSL(t) {
  let x = 0,
    e = 0,
    h = 0;
  4 == t.length
    ? ((x = "0x" + t[1] + t[1]),
      (e = "0x" + t[2] + t[2]),
      (h = "0x" + t[3] + t[3]))
    : 7 == t.length &&
      ((x = "0x" + t[1] + t[2]),
      (e = "0x" + t[3] + t[4]),
      (h = "0x" + t[5] + t[6])),
    (x /= 255),
    (e /= 255),
    (h /= 255);
  let n = Math.min(x, e, h),
    a = Math.max(x, e, h),
    o = a - n,
    d = 0,
    i = 0,
    l = 0;
  return (
    (d =
      0 == o
        ? 0
        : a == x
        ? ((e - h) / o) % 6
        : a == e
        ? (h - x) / o + 2
        : (x - e) / o + 4),
    (d = Math.round(60 * d)) < 0 && (d += 360),
    (l = (a + n) / 2),
    `${d}deg ${(i = +(
      100 * (i = 0 == o ? 0 : o / (1 - Math.abs(2 * l - 1)))
    ).toFixed(1))}% ${(l = +(100 * l).toFixed(1))}%`
  );
}

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
  elevation: {
    low: "",
    medium: (color) => css`
      box-shadow: 0.3px 0.5px 0.7px
          hsl(${hexToHSL(color || colors.green)} / 0.36),
        0.8px 1.6px 2px -0.8px hsl(${hexToHSL(color || colors.green)} / 0.36),
        2.1px 4.1px 5.2px -1.7px hsl(${hexToHSL(color || colors.green)} / 0.36),
        5px 10px 12.6px -2.5px hsl(${hexToHSL(color || colors.green)} / 0.36);
    `,
    high: "",
  },
  sitePaddings: {
    mobile: "2rem",
    desktop: "2rem",
  },
  utils: {
    hexToRgba,
    hexToHSL,
  },
};
