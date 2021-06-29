import React from 'react';
import NavBar from './NavBar';
import logo from '../assets/fiverr-logo.png'
import { Link } from "react-router-dom"
import styled from 'styled-components';

export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 100px;
`

export const FiverrLogo = styled.img`
height: 45px;
padding: 13px;
`

const Header = () => {
  return (
    <NavContainer>
      <Link to='/'>
        <FiverrLogo src={logo} alt="fiverr-logo" />
      </Link>
      <NavBar />
    </NavContainer>
  );
};

export default Header;