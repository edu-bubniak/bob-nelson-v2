import "styled-components"

import theme from "../styles/themes/defaut";

export type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme{}
}