import styled from 'styled-components';

export const Nav = styled.nav`
    background: var(--orange);
    display: flex;
    justify-content: space-around;
    width: 100vw;
`;

export const NavButton = styled.button`
    color: var(--cream);
    display: block;
    position: absolute;
    background-color: transparent;
    border: none;
    font-size: 2.5rem;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    @media screen and (max-width: 576px) {
        font-size: 2rem;
        position: absolute;
        top: .15rem;
        right: .15rem;
    }

`;

export const NavLinkList = styled.ul`
    background: var(--orange);
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 20px;
    margin-block-start: 0;
    margin-block-end: 0;

    display: ${({ visible }) => visible ? 'flex' : 'none'};

    
`;

export const NavLink = styled.li`
    color: var(--cream);
    font-family: Montserrat, sans-serif;
    font-size: 3rem;
    list-style: none;

    &:hover {
        color: var(--black);
    }
`;