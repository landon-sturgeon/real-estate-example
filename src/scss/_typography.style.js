import styled, { css } from "styled-components";

import { FONT, COLORS } from "./_variables.style";
import { marginBottom, isLight } from "./_utilities.style";

const heading = css`
    font-family: ${FONT.display};
    font-weight: 400;
`;

export const Heading1 = styled.h1`
    ${ heading };
    ${ marginBottom };
`;

export const Heading2 = styled.h2`
    ${ heading };
    font-size: 4rem;
    font-style: italic;
    line-height: 1;

    ${ isLight };
    ${ marginBottom };
`;

export const Heading3 = styled.h3`
    ${ heading };
    font-size: 1.6rem;
    color: ${ COLORS.primary };
    text-transform: uppercase;

    ${ marginBottom };
`;

export const Heading4 = styled.h4`
    ${ heading };
    font-size: 1.9rem;

    ${ isLight };
    ${ marginBottom };
`;