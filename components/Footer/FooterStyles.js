import styled from "styled-components";

export const Container = styled.section`
background-color: var(--cream);
display: flex;
flex-direction: column;
text-align: center;
padding: 20px;
width: 100vw;
`;

export const Content = styled.div`
background-color: var(--lightrose);
border: 3px solid var(--rose);
// border-radius: 20px;
box-shadow: 0 0 0 1.5rem var(--lightrose);
color: var(--black);
display: flex;
font-family: Unica One, sans-serif;
justify-content: space-around;
margin: 20px;
text-align: center;
@media screen and (max-width: 576px) {
    flex-direction: column;}
`;

export const ContentCard = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
`;

export const ContentTitle = styled.h1`
font-family: Inspiration, sans-serif;
font-size: 2rem;
margin-block-start: 0;
margin-block-end: 0;
`;

export const Maps = styled.div`
cursor: pointer;
`;

export const SocialLink = styled.a`
font-size: 3rem;
color: var(--rose);
opacity: .8;
padding-top: 60px;
`;

export const CopyRight = styled.p`
color: var(--black);
`;