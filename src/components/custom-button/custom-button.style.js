import styled from "styled-components";

import { COLORS, FONT } from "../../scss/_variables.style";

export const CustomButtonContainer = styled.button`
    background-color: ${ COLORS.primary };
    color: #fff;
    border: none;
    border-radius: 0;
    font-family: ${ FONT.display };
    font-weight: 400;
    text-transform: uppercase;
    padding: 1.8rem 3rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${ COLORS.primaryDark };
    }
`;