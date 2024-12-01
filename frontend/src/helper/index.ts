import { COLOR_SCHEMES, ColorType } from "../Pages/ColorSwatch/store/types";

const DEFAULT_COLOR = 'rgb(255, 255, 255)';
export const getColorString = (color: { [key: string]: any; type: ColorType }) => {
  const scheme = COLOR_SCHEMES[color.type];
  if (!scheme) {
    return DEFAULT_COLOR;
  }

  return scheme.formatter(color);
};
