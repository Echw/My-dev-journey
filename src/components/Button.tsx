import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {
  btn: string;
}

const Button = (props: ButtonProps) => {
  return <Btn to="/form">{props.btn}</Btn>;
};

const Btn = styled(Link)`
  width: 30rem;

  margin: 1rem;
  padding: 2rem;
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

export default Button;
