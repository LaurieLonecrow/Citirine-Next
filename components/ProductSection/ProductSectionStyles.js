import styled from "styled-components";

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px;

    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;

    }
`;

export const ProductLogo = styled.img`
    width: 40%;
    margin: auto;
    padding: 20px;


    @media screen and (max-width: 576px) {
        width: 80%;
    }
`;