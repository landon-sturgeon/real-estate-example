import styled, { css } from "styled-components";

import { FONT, COLORS } from "./_variables.style";

const heading = css`
    font-family: ${FONT.display};
    font-weight: 400;
`;

const isDark = (props) => {
    if (props.isDark === true) {
        return css`color: ${COLORS.greyDark1}`;
    } else {
        return css`color: ${COLORS.greyLight1}`;
    };
}

export const Heading1 = styled.h1`
    ${ heading }
`;

export const Heading2 = styled.h2`
    ${ heading }
`;

export const Heading3 = styled.h3`
    ${ heading }
`;

export const Heading4 = styled.h4`
    ${ heading };
    font-size: 1.9rem;

    ${ isDark }
`;