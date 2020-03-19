import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;

    /* sudo selector works here like sass */
    &:hover {
        background: midnightblue;
    }

    /* adding primary prop css to Button */
    ${props =>
        props.primary &&
        css`
            background: palevioletred;
            color: white;
        `};
`;

const Learning = () => {
    return (
        <div>
            <h1>Styled Components</h1>
            <form action="">
                <input type="text" />
                <Button>Normal Button</Button>
                <Button primary>Primary Button</Button>
            </form>
        </div>
    );
};

export default Learning;
