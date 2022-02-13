import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(180deg, var(--rose) 0%, var(--lightrose) 150%);
    position: relative;
    padding: 100px 40px 80px;
`;

export const Content = styled.div`
    // color: var(--cream);
    font-family: Montserrat;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.65em;
    text-indent: 50px;

    background: linear-gradient(180deg, var(--cream) 0%, #FFFFFF 100%);
    -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;

export const Heading = styled.h1`
    color: var(--cream);
    font-family: Inspiration, sans-serif;
    font-size: 3.5rem;
    position: absolute;
    top: 1.5rem;
    left: 40px;    
    transform: rotate(-10deg);
    letter-spacing: .2rem;
    margin-block-start: 0;
    margin-block-end: 0;
`;

