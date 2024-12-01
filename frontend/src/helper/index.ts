import { COLOR_SCHEMES, ColorType } from "../Pages/ColorSwatch/store/types";

// Default color in case of any issues
const DEFAULT_COLOR = 'rgb(255, 255, 255)';

export const normalizeColor = (color: { [key: string]: number }, type: string) => {
  switch(type) {
    case 'rgb':
      // RGB is usually normalized
      return color;

    case 'hsl':
      // Normalize hsl values
      return {
        hue: Math.min(Math.max(color.hue, 0), 360),
        saturation: Math.min(Math.max(color.saturation, 0), 100), 
        lightness: Math.min(Math.max(color.lightness, 0), 100),
      };

    case 'brgb':
      // Normalize BRGB values to RGB (0-255)
      return {
        red: Math.round((color.red / 10000) * 255),
        green: Math.round((color.green / 10000) * 255),
        blue: Math.round((color.blue / 10000) * 255),
      };

    default:
      return color;
  }
};

// Generate the color
export const getColorString = (color: { [key: string]: any; type: ColorType }) => {
  const scheme = COLOR_SCHEMES[color.type];
  if (!scheme) {
    return DEFAULT_COLOR;
  }

  // Normalize the color based on its type before formatting
  const normalizedColor = normalizeColor(color, color.type);

  return scheme.formatter(normalizedColor);
};
