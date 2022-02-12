import styled from 'styled-components';

export const Nav = styled.nav`
    background: var(--orange);
    opacity: .8;
    display: flex;
    justify-content: space-between;
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
    }
`;

export const NavLinkList = styled.ul`
    background: var(--orange);
    opacity: .8;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 80px 20px;
    margin-block-start: 0;
    margin-block-end: 0;

    display: ${({ visible }) => visible ? 'flex' : 'none'};

    
`;

export const NavLink = styled.li`
    color: var(--cream);
    font-family: Montserrat;
    font-size: 3rem;
    list-style: none;

    &:hover {
        color: var(--black);
    }
`;