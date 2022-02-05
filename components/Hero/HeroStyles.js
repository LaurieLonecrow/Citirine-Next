import styled from "styled-components";

export const HeroDiv = styled.div`
    background-attachment: fixed;
    background-image: url(${props => props.background});
    background-position: ${props => props.position};
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
`;