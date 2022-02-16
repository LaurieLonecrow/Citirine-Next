import styled from "styled-components";

export const Container = styled.div`
background-color: var(--cream);
padding-bottom: 5rem;
`;

export const Content = styled.div`

`;

export const BioCard = styled.div`
text-align: center;
position: relative;
`;

export const BioPic = styled.img`
width: 50%;
padding: 40px 40px 0;
@media screen and (max-width: 576px) {
    width: 80%;
}
`;

export const BioName = styled.h1`
font-size: 5rem;
position: absolute;
top: 5%;
left: 20%;
@media screen and (max-width: 576px) {
    font-size: 2rem;
    top: 35px;
    left: 20px;
}
`;

export const BioTagline = styled.h3`
font-size: 2rem;
@media screen and (max-width: 576px) {
    font-size: 1.2rem;
}
`;

export const BioContent = styled.p`
text-align: left;
padding: 0 40px;
white-space: pre-wrap;
font-family: Montserrat, sans-serif;
`;
