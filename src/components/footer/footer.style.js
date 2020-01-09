import styled from "styled-components";

import { COLORS, FONT } from "../../scss/_variables.style";

export const FooterContainer = styled.div`
    background-color: ${ COLORS.secondary };
    grid-column: full-start / full-end;
    padding: 8rem;
`;

export const FooterNavigation = styled.ul`
    list-style: none;

    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    align-items: center;
`;

export const NavItem = styled.li`
    transition: all 0.2s;

    &:hover {
        transform: translateY(-0.7rem);
    }
`;

export const NavLink = styled.a`
    &:link,
    &:visited {
        font-size: 1.6rem;
        color: #fff;
        text-decoration: none;
        font-family: ${FONT.display };
        text-tansform: uppercase;
        text-align: center;
        padding: 1.5rem;
        display: block;
    }
`;

export const LegalText = styled.p`
    font-size: 1.4rem;
    color: ${ COLORS.greyLight2 };
    margin-top: 6rem;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    width: 70%;
`;