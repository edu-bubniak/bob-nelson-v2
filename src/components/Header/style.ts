import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    z-index: 9990;
    height: 5.5rem;
    width: 100%;
    background-color: ${props => props.theme.colors.navbar};
    color: ${props => props.theme.colors.titleLight};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Nav = styled.div`
    @media (max-width: 850px) {
        display: none;
    }

    width: 33.3%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .selected {
        border-bottom: 3px solid ${props => props.theme.colors.primary}
    }
`

interface NavItemProps {
    selected?: boolean
}

export const NavItem = styled.div<NavItemProps>`
    font-weight: 600;
    height: 5.5rem;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    &:hover {
        background-color: ${props => props.theme.colors.navbarHover};
    }  
`

export const Logo = styled.div`
    width: 33.3%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: 0.3s;
    cursor: pointer;

    img {
        width: 400px;
        height: 80px;
        object-fit: contain;
        z-index: 1000;
    }

    &:hover {
        transform: scale(1.1);
    }
`

export const LogoFaculdade = styled.div`
    width: 33.3%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
        width: 80px;
        height: 200px;
        object-fit: contain;
    }
`