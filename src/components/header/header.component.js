import React from "react";

import logoBBC from "../../img/logo-bbc.png";
import logoForbes from "../../img/logo-forbes.png";
import logoTC from "../../img/logo-techcrunch.png";
import logoBI from "../../img/logo-bi.png";
import logo from "../../img/logo.png";

import { Heading1, Heading3 } from "../../scss/_typography.style";

import { 
    HeaderContainer, HeaderLogo, SeenOnText,
    SeenOnLogoContainer, SeenOnLogo, HeaderButton
} from "./header.style.js";

import "./header.style.scss"; // multiple background images not supported by styled-components yet

const Header = () => (
    <HeaderContainer className="header">
        <HeaderLogo src={logo} alt="header logo"/>
        <Heading3>Your own home:</Heading3>
        <Heading1>The ultimate personal freedom</Heading1>
        <HeaderButton>View our properties</HeaderButton>
        <SeenOnText>Seen On</SeenOnText>
        <SeenOnLogoContainer>
            <SeenOnLogo src={logoBBC}/>
            <SeenOnLogo src={logoForbes}/>
            <SeenOnLogo src={logoTC}/>
            <SeenOnLogo src={logoBI}/>
        </SeenOnLogoContainer>
    </HeaderContainer>
);

export default Header;