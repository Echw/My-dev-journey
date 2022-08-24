import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = (props: PageLayoutProps) => {
  return (
    <Wrapper>
      <Burger>
        <GiHamburgerMenu />
      </Burger>
      {props.children}
    </Wrapper>
  );
};

export default PageLayout;

const Wrapper = styled.div``;
const Burger = styled.button`
  position: absolute;
  right: 5%;
  top: 5%;

  padding: 1rem 1.5rem;
  border-radius: 3rem;
  border: 0.3rem solid #286fc7;
  background: transparent;
  cursor: pointer;
  transition: 0.5s;
  text-decoration: none;
  color: #286fc7;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;

  :hover {
    background: #286fc7;
    color: white;
    transition: 0.5s;
  }
`;
