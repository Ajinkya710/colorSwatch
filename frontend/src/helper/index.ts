import { COLOR_SCHEMES, ColorType } from "../Pages/ColorSwatch/store/types";

export const getColorString = (color: { [key: string]: any; type: ColorType }) => {
  const scheme = COLOR_SCHEMES[color.type];
  if (!scheme) {
    throw new Error(`Unsupported color type: ${color.type}`);
  }

  return scheme.formatter(color);
};
