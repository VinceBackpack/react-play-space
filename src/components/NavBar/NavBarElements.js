import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: #bce8ec;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 0px 0px;
    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavLogo = styled(LinkR)`
    color: #0731b8;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    margin-left: 25px;
    text-decoration: none;
    font-weight: bold;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 10px;
    list-style: none;
`;

export const NavItems = styled.li`
    width: 80px;
`;

export const NavLinks = styled(LinkR)`
    cursor: pointer;
    `