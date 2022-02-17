import styled from "styled-components";

export const ButtonContainer = styled.button`
background-color: var(--orange);
border: none;
color: var(--cream);
cursor: pointer;
font-family: Unica One, sans-serif;
font-size: 5rem;
position: absolute;
bottom: 15rem;
text-align: center;
padding: 20px;

@media screen and (max-width: 576px) {
    font-size: 3rem;
    padding: 15px;

}

`;