import "styled-components";

interface Colors {
  dark: string;
  darkGreen: string;
  green: string;
  lightGreen: string;
  light: string;
  gray: string;
}

interface SecondaryColors {
  warning?: string;
  info?: string;
  success?: string;
  danger?: string;
}

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: Colors;
      secondary: SecondaryColors;
    };
  }
}
