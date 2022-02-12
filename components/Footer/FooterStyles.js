import styled from "styled-components";

export const Container = styled.section`
background-color: var(--black);
color: var(--cream);
display: flex;
flex-direction: column;
text-align: center;
padding: 20px;
width: 100vw;
`;

export const Content = styled.div`
color: var(--cream);
display: flex;
justify-content: space-around;
font-family: Montserrat, sans-serif;
text-align: center;
@media screen and (max-width: 576px) {
    flex-direction: column;}
`;

export const ContentCard = styled.div`
display: flex;
flex-direction: column;
`;

export const ContentTitle = styled.h1`
font-family: Festive, sans-serif;
font-size: 2rem;

`;

export const Maps = styled.div`
cursor: pointer;
`;

export const SocialLink = styled.a`
font-size: 3rem;

`;