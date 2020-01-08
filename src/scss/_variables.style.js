export const COLORS = {
    primary: "#C69963",
    primaryDark: "#B28451",
    secondary: "#101D2C",
    greyLight1: "#F9F7F6",
    greyLight2: "#aaa",
    greyDark1: "#54483A",
    greyDark2: "#6D5D4B"
}

export const FONT = {
    primary: "Nunito",
    display: "Josefin Sans"
}

export const SHADOWS = {
    dark: "0 2rem 6rem rgba(0,0,0,0.7)",
    light: "0 2rem 5rem rgba(0,0,0,0.2)"
}

const size = {
    largest: "75em",        // 1200px
    large: "68.75em",       // 1100px
    medium: "56.25em",      // 900px
    small: "37.5em",        // 600px
    smaller: "31.25em"      // 500px
}

export const DEVICE = {
    largest: `(max-width: ${ size.largest })`,
    large: `(max-width: ${ size.large })`,
    medium: `(max-width: ${ size.medium })`,
    small: `(max-width: ${ size.small })`,
    smaller: `(max-width: ${ size.smaller })`,
}