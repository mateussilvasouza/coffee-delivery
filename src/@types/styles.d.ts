import "styled-components";
import { defaultThemes } from "../styles/themes/defaultThemes";

type ThemeType = typeof defaultThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
