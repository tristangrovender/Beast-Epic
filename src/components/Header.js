import React from "react";
import StyledHeader from "../StyledComponents/StyledHeader";

const Header = () => {
    return (
        <StyledHeader>
            <div className="header-container">
                <div className="header">
                    <h1>BON IVER</h1>
                    <a href="index.html">NEWS</a>
                    <a href="index.html">TOUR</a>
                    <a href="index.html">DISCOGRAPHY</a>
                    <a href="index.html">STORE</a>
                    <a href="index.html">COMMUNITY</a>
                </div>
            </div>
        </StyledHeader>
    );
};

export default Header;
