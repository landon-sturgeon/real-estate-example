import styled from "styled-components";

import { COLORS } from "../../scss/_variables.style";

export const SiteFeaturesContainer = styled.div`
    grid-column: center-start / center-end;

    margin: 15rem 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    grid-gap: 6rem;
`;

export const FeatureItem = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;
`;

export const FeatureIcon = styled.svg`
    fill: ${COLORS.primary};
    width: 4.5rem;
    height: 4.5rem;
    grid-row: 1 / span 2;
    transform: translateY(-1rem);
`;

export const FeatureText = styled.p`
    font-size: 1.7rem;
`;