export interface Color {
  type: ColorType;
}

export const COLOR_TYPES = ["rgb", "hsl"]; // add 'brgb' to color types

export type ColorType = typeof COLOR_TYPES[number];
 
// COLOR_SCHEME based on the backend response
// type of color scheme and properties
export const COLOR_SCHEMES: Record<ColorType, { 
  properties: string[]; 
  formatter: (color: any) => string 
}> = {
  rgb: {
    properties: ["red", "green", "blue"],
    formatter: (color: { red: number; green: number; blue: number }) =>
      `rgb(${color.red}, ${color.green}, ${color.blue})`,
  },
  hsl: {
    properties: ["hue", "saturation", "lightness"],
    formatter: (color: { hue: number; saturation: number; lightness: number }) =>
      `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`,
  },
  // brgb: {
  //   properties: ["red", "green", "blue"],
  //   formatter: (color: { red: number; green: number; blue: number }) =>
  //     `rgb(${color.red}, ${color.green}, ${color.blue})`,
  // },
};

