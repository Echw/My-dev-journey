import React from 'react';
import LinkButton from '../components/LinkButton';
import styled from 'styled-components';
import Title from '../components/Title';

const Home = () => {
  return (
    <Wrapper>
      <Title name="My Dev Journey" />
      <LinkButton btn="FormApp" />
      {/* formularz */}
      <LinkButton btn="2" />
      {/* todolist */}
      <LinkButton btn="3" />
      {/* licznik kliknięć */}
      <LinkButton btn="4" />
      {/* wyszukiwarka */}
      <LinkButton btn="5" />
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
