import { PropsWithChildren } from "react";
import { Font } from "../theme";
import type { Config } from "../context/faces";
export declare function ArweaveWalletKit({ children, theme, config }: PropsWithChildren<Props>): JSX.Element;
interface Props {
    theme?: Partial<ThemeConfig>;
    config?: Config;
}
export interface ThemeConfig {
    displayTheme: "dark" | "light";
    accent: RGBObject;
    titleHighlight: RGBObject;
    radius: Radius;
    font: Font;
}
export interface RGBObject {
    r: number;
    g: number;
    b: number;
}
export declare type Radius = "default" | "minimal" | "none";
export {};
