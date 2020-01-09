import styled from "styled-components";

import { COLORS } from "../../scss/_variables.style";

export const RealtorListContainer = styled.div`
    background-color: ${ COLORS.secondary };
    grid-column: col-start 7 / full-end;

    display: grid;
    align-items: center;
`;

export const Realtors = styled.div`
    display: grid;
    justify-content: center;
    grid-gap: 2rem;

    & > h3 {
        justify-self: center;
    }
`;

export const RealtorContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
`;

export const RealtorImage = styled.img`
    height: 6rem;
    border-radius: 50%;
    margin-right: 1.5rem;
`;

export const RealtorInfoBox = styled.div`
    display: grid;
    color: #fff;
`;

export const RealtorName = styled.span`
    font-size: 1.6rem;
    font-weight: 400;
`;

export const HomesSold = styled.span`
    font-size: 1.4rem;
`;