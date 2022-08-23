import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  name: string;
}

const Title = (props: TitleProps) => {
  return <H1>{props.name}</H1>;
};

const H1 = styled.h1`
  color: #286fc7;
  padding: 1rem;
`;
export default Title;
