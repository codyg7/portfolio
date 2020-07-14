import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// using style components which is a css in js library basically make a function and grab the tag which allows me to style it
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: #403F4C;
  font-family: "Poppins", sans-serif;
  list-style: none
}

  .logo--img {
    height: 10%;
    width: 10%;
    border-radius: 50%;
    display: flex;
    align-content: center;
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
    <header>
      {/* replace the nav tag with the variable */}
      {/* generated a class to be able to target the specific elements */}
      <Nav>
        <div>
          <Link className='nav-links' to='/'>
            {" "}
            Cody Gilliam{" "}
          </Link>
        </div>
        <li>
          {/* Link is a react router attribute that replaces anchor tag */}
          <Link className='nav-links' to='/'>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className='nav-links' to='/projects'>
            {" "}
            Projects{" "}
          </Link>
        </li>
        <li>
          <Link className='nav-links' to='/resume'>
            {" "}
            Resume{" "}
          </Link>
        </li>
      </Nav>
    </header>
  );
};

export default Navbar;
