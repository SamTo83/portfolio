import React from "react";
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 10;
  li, a {
    padding: 18px 10px;
    font-size: 2rem;
    background-color: transparent;
    color: #fcf7f8;
    
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 60%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fcf7f8;
    }
  }
`;

const RightNav = ({open}) => {

  return (
    <Ul open={open} className="nav-links">
      <li className="nav-list">
        <a className="nav-title" href="#projects">Projects</a>
      </li>
      <li className="nav-list">
        <a className="nav-title" href="#experience">Experience</a>
      </li>
      <li className="nav-list">
        <a className="nav-title" href="#workHistory">Work History</a>
      </li >
      <li className="nav-list">
        <a className="cta nav-title" href="#contact">Contact</a>
      </li>
    </Ul>
  );
};

export default RightNav;
