import React, { useState } from 'react';
import RightNav from './RightNav';
import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 1rem;
  background-color: transparent;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 99;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  .cross {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fcf7f8' : '#fcf7f8'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className='burger-menu'>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className='cross'/>
        <div className='cross'/>
        <div className='cross'/>
      </StyledBurger>
      <RightNav open={open}/>
    </div>
  )
}

export default Burger