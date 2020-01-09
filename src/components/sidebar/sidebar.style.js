import styled from "styled-components";

import { COLORS } from "../../scss/_variables.style";

export const SidebarContainer = styled.div`
    background-color: ${ COLORS.primary };
    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1;

    display: flex;
    justify-content: center;
`;

export const NavButton = styled.button`
    border: none;
    border-radius: 0;

    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    margin-top: 4rem;

    &::before,
    &::after {
        background-color: #fff;
        height: 2px;
        width: 4.5rem;
        content: "";
        display: block;
    }

    &::before {
        transform: translateY(-1.5rem);
    }

    &::after {
        transform: translateY(1.5rem);
    }
`;