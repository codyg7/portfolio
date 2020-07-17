import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #403f4c;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
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
        <a className='nav-links' href='/Cody-Gilliam-Resume.pdf' download>
          Resume
        </a>
      </li>
      <li>
        <Link className='nav-links' to='/contact'>
          {" "}
          Contact Me{" "}
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
