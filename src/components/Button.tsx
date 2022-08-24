import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  btn: string;
  onClick?: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Btn className={props.className} onClick={props.onClick}>
      {props.btn}
    </Btn>
  );
};

const Btn = styled.button`
  margin: 1rem;
  padding: 1rem 3rem;
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
