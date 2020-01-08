import { css } from "styled-components";

import { COLORS } from "./_variables.style";
import { MBsm, MBmd, MBlg, MBhuge } from "./_mixins.style";

export const isLight = (props) => {
    if (props.isDark === true) {
        return css`color: ${COLORS.greyLight1}`;
    } else {
        return css`color: ${COLORS.greyDark1}`;
    };
}

export const marginBottom = (props) => {
    if (props.marginBottom === "small") {
        return css`${MBsm}`;
    } else if (props.marginBottom === "medium") {
        return css`${MBmd}`;
    } else if (props.marginBottom === "large") {
        return css`${MBlg}`;
    } else if (props.marginBottom === "huge") {
        return css`${MBhuge}`;
    }
}