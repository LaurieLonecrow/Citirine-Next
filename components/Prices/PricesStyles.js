import styled from "styled-components";

export const Container = styled.div`
padding: 40px;
// text-align: center;

@media screen and (max-width: 576px) {
    padding: 20px;
}
`;

export const Content = styled.div`

`;

export const PriceHeader = styled.h1`
font-family: Unica One, sans-serif;
text-decoration: underline;
`;

export const PriceListItem = styled.li`
font-family: Montserrat, sans-serif;
line-height: 2rem;
list-style: none;
padding-top: 2rem;
width: fit-content;
white-space: pre-line;

    @media screen and (max-width: 576px) {
    font-size: 1.25rem;
    text-align: left;
    }



`;  