import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
    width: 100%;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
    background: #ffffff;
    border-bottom: 1px solid #e8edf2;
    position: relative;
    z-index: 100;

    @media screen and (max-width: 768px) {
        height: 70px;
        padding: 0 24px;
    }
`;


export const NavLogo = styled(LinkR)`
    color: #12345b;
    cursor: pointer;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.3px;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s ease;
    &:hover {
        color: #2476b9;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;

    @media screen and (max-width: 500px) {
        gap: 2px;
    }
`;


export const NavItems = styled.li`
    margin: 0;
    padding: 0;
`;


export const NavLinks = styled(LinkR)`
    display: block;
    padding: 10px 18px;
    color: #526477;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    border-radius: 6px;

    transition:
        color 0.2s ease,
        background 0.2s ease;
    &:hover {
        color: #12345b;
        background: #f3f7fa;
    }

    @media screen and (max-width: 500px) {
        padding: 8px 9px;
        font-size: 13px;
    }
`;