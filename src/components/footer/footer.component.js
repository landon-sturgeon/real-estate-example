import React from "react";

import { 
    FooterContainer, FooterNavigation, NavItem, NavLink,
    LegalText
} from "./footer.style";

const Footer = () => (
    <FooterContainer>
        <FooterNavigation>
            <NavItem>
                <NavLink href="#">Find your dream home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Request proposal</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Download home planner</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Contact us</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Submit your property</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Come work </NavLink>
            </NavItem>
        </FooterNavigation>
        <LegalText>&copy; Copyright 2020 by Landon Sturgeon. Feel free to use this project template for yourself!</LegalText>
    </FooterContainer>
);

export default Footer;