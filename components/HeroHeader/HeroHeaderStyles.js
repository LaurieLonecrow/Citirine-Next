import styled from "styled-components";

export const HeroTitle = styled.h1`
    color: var(--lightorange);
    text-shadow: 2px 5px 5px var(--orange);
    font-size: 10rem;
    font-family: Inspiration, cursive;
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
    position: absolute;
    bottom: 1rem;

    @media screen and (max-width: 576px) {
        font-size: 5rem;

    }
`;