import styled from "styled-components";

import hero from "../../img/hero.jpeg";

import { COLORS, FONT } from "../../scss/_variables.style";

export const HeaderContainer = styled.div`
    background-color: ${ COLORS.greyDark1 };
    grid-column: full-start / col-end 6;
    background-image: url(${hero});
    padding: 8rem;
    padding-top: 4rem;

    display: grid;
    grid-template-rows: 1fr min-content 6rem 1fr;
    grid-template-columns: max-content;
    grid-row-gap: 1.5rem;
    justify-content: center;
`;

export const HeaderLogo = styled.img`
    height: 3rem;
    justify-self: center;
`;

export const SeenOnText = styled.div`

`;

export const SeenOnLogoContainer = styled.div`

`;

export const SeenOnLogo = styled.img`
    height: 2.5rem;
`;

export const HeaderButton = styled.button`
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

    align-self: start;
    justify-self: start;

    &:hover {
        background-color: ${ COLORS.primaryDark };
    };
`;