import styled from "styled-components";

export const Container = styled.div`
background-color: var(--cream);
padding: 40px;
    
@media screen and (max-width: 576px) {
    padding: 20px;
    }
`;

export const PolicyCard = styled.div`
`;

export const PolicyHeader = styled.h1`
font-family: Unica One, sans-serif;
text-decoration: underline;
`;

export const PolicyContent = styled.p`
font-family: Montserrat, sans-serif;
font-size: 1.25rem;
white-space: break-spaces;
`;

