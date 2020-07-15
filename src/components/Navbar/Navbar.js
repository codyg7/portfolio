import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  background-color: #403f4c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding: 15px 0;
  }
  @media (max-width: 768px) {
    width: 94.8%;
  }
  @media (max-width: 320px) {
    width: 87.4%;
  }

  a {
    color: rgb(226, 226, 226);
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
    padding: 10px 10px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link className='nav-links' to='/'>
          Cody Gilliam
        </Link>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
