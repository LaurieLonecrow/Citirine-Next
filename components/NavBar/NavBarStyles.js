import styled from 'styled-components';

export const Nav = styled.nav`
    background: var(--orange);
    opacity: .8;
    display: flex;
    justify-content: space-between;
    width: 100vw;
`;

export const NavLinkList = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    padding: 20px;

    @media screen and (max-width: 576px) {
        display: none;
    }
`;

export const NavLink = styled.li`
    color: var(--cream);
    font-size: 1rem;
    list-style: none;
`;