import styled, { css } from "styled-components";

export default styled.button`
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
