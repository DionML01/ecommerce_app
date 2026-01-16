declare module "react-color" {
  import * as React from "react";

  export interface ColorResult {
    hex: string;
    rgb: { r: number; g: number; b: number; a: number };
    hsl: { h: number; s: number; l: number; a: number };
  }

  export interface ColorChangeHandler {
    (color: ColorResult): void;
  }

  export interface CirclePickerProps {
    color?: string;
    colors?: string[];
    onChange?: ColorChangeHandler;
    onChangeComplete?: ColorChangeHandler;
    className?: string;
    width?: string | number;
    circleSize?: number;
    circleSpacing?: number;
    styles?: Record<string, React.CSSProperties>;
  }

  export const CirclePicker: React.FC<CirclePickerProps>;
}
