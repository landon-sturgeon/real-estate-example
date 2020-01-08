import styled from "styled-components";

import { COLORS } from "../../scss/_variables.style";

export const StoryTextContainer = styled.div`
    background-color: ${ COLORS.greyLight1 };
    grid-column: col-start 5 / full-end;

    padding: 6rem 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

export const StoryParagraph = styled.p`
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 4rem;
`;