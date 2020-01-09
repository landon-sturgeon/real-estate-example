import styled, { css } from "styled-components";

import { COLORS } from "../../scss/_variables.style";

const imgModifier = (props) => {
    var outputCss = "";
    switch (props.imgNum) {
        case "one":
            outputCss = css`
                grid-row: 1 / span 2;
                grid-column: 1 / span 2;
            `;
            break;
        case "two":
            outputCss = css`
                grid-row: 1 / span 3;
                grid-column: 3 / span 3;
            `; 
            break;
        case "three":
            outputCss = css`
                grid-row: 1 / span 2;
                grid-column: 6 / 7;
            `; 
            break;
        case "four":
            outputCss = css`
                grid-row: 1 / span 2;
                grid-column: 7 / span 2;
            `; 
            break;
        case "five":
            outputCss = css`
                grid-row: 3 / span 3;
                grid-column: 1 / span 2;
            `; 
            break;
        case "six":
            outputCss = css`
                grid-row: 4 / span 2;
                grid-column: 3 / span 2;
            `; 
            break;
        case "seven":
            outputCss = css`
                grid-row: 4 / 5;
                grid-column: 5 / 6;
            `;
            break; 
        case "eight":
            outputCss = css`
                grid-row: 3 / span 2;
                grid-column: 6 / span 2;
            `; 
            break;
        case "nine":
            outputCss = css`
                grid-row: 3 / span 3;
                grid-column: 8 / 9;
            `; 
            break;
        case "ten":
            outputCss = css`
                grid-row: 6 / span 2;
                grid-column: 1 / 2;
            `;
            break; 
        case "eleven":
            outputCss = css`
                grid-row: 6 / span 2;
                grid-column: 2 / span 2;
            `;
            break; 
        case "twelve":
            outputCss = css`
                grid-row: 6 / span 2;
                grid-column: 4 / 5;
            `;
            break; 
        case "thirteen":
            outputCss = css`
                grid-row: 5 / span 3;
                grid-column: 5 / span 3;
            `;
            break; 
        case "fourteen":
            outputCss = css`
                grid-row: 6 / span 2;
                grid-column: 8 / 9;
            `;
            break;
        default:
            outputCss = "";                                                                                               
    }
    return outputCss; 
}

export const HomeImgGalleryContainer = styled.div`
    background-color: ${ COLORS.greyLight1 };
    grid-column: full-start / full-end;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 5vw);
    grid-gap: 1.5rem;
    padding: 1.5rem;
`;

export const GalleryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    ${ imgModifier }
`;