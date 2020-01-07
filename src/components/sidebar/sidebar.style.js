import styled from "styled-components";

import { COLORS } from "../../scss/_variables.style";

export const SidebarContainer = styled.div`
    background-color: ${ COLORS.primary };
    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1;
`;