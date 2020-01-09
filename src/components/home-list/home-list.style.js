import styled from "styled-components";

import { COLORS, FONT, SHADOWS } from "../../scss/_variables.style";

export const HomeListContainer = styled.div`
    grid-column: center-start / center-end;
    margin: 15rem 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 7rem;
`;

export const HomeCard = styled.div`
    background-color: ${ COLORS.greyLight1};

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3.5rem;
`;

export const HomeImg = styled.img`
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    z-index: 1;
`;

export const HomeLikeIcon = styled.svg`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    justify-self: end;
    margin: 1rem;
    fill: ${ COLORS.primary };
    height: 2.5rem;
    width: 2.5rem;
    z-index: 2;
    box-shadow: rgba(${SHADOWS.dark});
`;

export const HomeDetailIcon = styled.svg`
    fill: ${ COLORS.primary };
    height: 2rem;
    width: 2rem;
`;

export const HomeName = styled.h5`
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    z-index: 2;
    transform: translateY(50%);

    width: 80%;
    justify-self: center;
    align-self: end;
    font-family: ${ FONT.display };
    font-size: 1.6rem;
    text-align: center;
    padding: 1.25rem;
    background-color: ${ COLORS.secondary };
    color: #fff;
    font-weight: 400;
`;

export const HomeDetail = styled.div`
    font-size: 1.5rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
`;

export const HomeDetailText = styled.p`
    margin-left: 1rem;
`;

export const HomeButton = styled.button`
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
    grid-column: 1 / -1;

    &:hover {
        background-color: ${ COLORS.primaryDark };
    };
`;