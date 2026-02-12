export const Color = {
  pink: "pink",
  mint: "mint",
  lavender: "lavender",
  yellow: "yellow",
  peach: "peach",
  sky: "sky",
  white: "white",
};
export type Color = (typeof Color)[keyof typeof Color];

export const FontSize = {
  xs: "xs",
  s: "s",
  base: "base",
  l: "l",
  xl: "xl",
};
export type FontSize = (typeof FontSize)[keyof typeof FontSize];
