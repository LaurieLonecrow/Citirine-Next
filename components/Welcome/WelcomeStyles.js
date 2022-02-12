import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(180deg, var(--rose) 0%, var(--lightrose) 100%);
    position: relative;
    padding: 150px 40px 80px;
`;

export const Content = styled.div`
    color: var(--cream);
    font-family: Sansburg;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.65em;
    text-indent: 50px;
`;

export const Heading = styled.h1`
    color: var(--cream);
    font-family: Agreable;
    font-size: 4rem;
    position: absolute;
    top: 20px;
    left: 50px;    
    transform: rotate(-10deg);
    letter-spacing: .3rem;
`;

