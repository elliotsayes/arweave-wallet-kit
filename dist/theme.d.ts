/// <reference types="react" />
export declare const lightTheme: DisplayTheme;
export declare const darkTheme: DisplayTheme;
export interface DisplayTheme {
    background: string;
    primaryText: string;
    secondaryText: string;
    light: string;
}
export interface ThemeConfig {
    displayTheme: "dark" | "light";
    accent: RGBObject;
    titleHighlight: RGBObject;
    radius: Radius;
    font: Font;
}
export interface DefaultTheme extends DisplayTheme {
    displayTheme: "dark" | "light";
    theme: string;
    themeConfig: ThemeConfig;
}
export interface RGBObject {
    r: number;
    g: number;
    b: number;
}
export declare type Radius = "default" | "minimal" | "none";
export interface Font {
    fontFamily: string;
}
export declare const ThemeProvider: import("react").ComponentType<{
    theme?: DefaultTheme | undefined;
}> & import("react").ComponentType<import("react").PropsWithChildren<{
    theme?: DefaultTheme | undefined;
}>>, useTheme: <T = DefaultTheme>(overrides?: import("@callstack/react-theme-provider").$DeepPartial<T> | undefined) => T;
export declare const withTheme: <Props extends {
    theme: DefaultTheme;
}, C>(WrappedComponent: import("react").ComponentType<Props> & C) => import("react").ComponentType<import("@callstack/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<DefaultTheme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Props> & C, {}>;
