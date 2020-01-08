import styled from "styled-components";

import BackImg from "../../img/back.jpg";

import { COLORS, SHADOWS } from "../../scss/_variables.style";

export const StoryImgGalleryContainer = styled.div`
    // background-color: ${COLORS.primary};
    grid-column: full-start / col-end 4;
    background-image: url(${BackImg});

    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
`;

export const StoryImgLarge = styled.img`
    width: 100%;
    grid-row: 2 / 6;
    grid-column: 2 / 6;
    box-shadow: ${ SHADOWS.light };
`;

export const StoryImgOffsetRight = styled.img`
    width: 115%;
    grid-row: 4 / 6;
    grid-column: 4 / 7;
    z-index: 10;
    box-shadow: ${ SHADOWS.light };
`;