import React from 'react';
import { Nav, NavItems, NavLinks, NavLogo, NavMenu } from './NavBarElements'

export const NavBar = () => {
    return(
        <>
        <Nav>
            <NavLogo to='/'>
                UAE Real Estate
            </NavLogo>
            <NavMenu>
                <NavItems>
                    <NavLinks to="/search">Search</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="/search?purpose=for-rent">Rent</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to ="/search?purpose=for-sale">Buy</NavLinks>
                </NavItems>
            </NavMenu>
        </Nav>
        </>
    );
}