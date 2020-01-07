import { createGlobalStyle } from "styled-components";

import { FONT, DEVICE, COLORS } from "./scss/_variables.style";

// Global Styles
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;           // 10px/16px = 62.5% -> 1rem = 10px;

        @media only screen and ${ DEVICE.large } {
            font-size: 50%;
        }
    }

    body {
        font-family: ${FONT.primary}, sans-serif;
        font-weight: 300;
        line-height: 1.6;
        color: ${ COLORS.greyDark2 };
        background-image: linear-gradient(to right bottom, ${ COLORS.primary }, ${ COLORS.primaryDark });
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
    }
`;