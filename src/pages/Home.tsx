import React from 'react';
import LinkButton from '../components/LinkButton';
import styled from 'styled-components';
import Title from '../components/Title';
import { ROUTES } from './../utils/constants/routes.constant';

const Home = () => {
  return (
    <Wrapper>
      <Title name="My Dev Journey" />
      {ROUTES.map((route) => (
        <LinkButton btn={route.name} to={route.path} key={route.id} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export default Home;
