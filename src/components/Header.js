import React from "react";
import StyledHeader from "../StyledComponents/StyledHeader";
import StyledNavBar from "../StyledComponents/StyledNavBar";
import StyledBonIver from "../StyledComponents/StyledBonIver";

const Header = () => {
    return (
        <StyledHeader>
            <StyledBonIver>
                <h1>
                    <a href="index.html">BON IVER</a>
                </h1>
            </StyledBonIver>
            <StyledNavBar>
                <a href="index.html">NEWS</a>
                <a href="index.html">TOUR</a>
                <a href="index.html">DISCOGRAPHY</a>
                <a href="index.html">STORE</a>
                <a href="index.html">COMMUNITY</a>
            </StyledNavBar>
        </StyledHeader>
    );
};

export default Header;
