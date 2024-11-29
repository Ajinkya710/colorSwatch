export interface Color {
  type: ColorType;
}

export type ColorType = "rgb" | "hsl";

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
};

