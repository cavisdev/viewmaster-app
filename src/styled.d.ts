import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme{
        colors: Color;
    }
}

type Color = {
    [key: string]: string;
}