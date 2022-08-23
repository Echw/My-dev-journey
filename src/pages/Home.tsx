import React from 'react';
import Button from './../components/Button';
import styled from 'styled-components';
import Title from '../components/Title';

const Home = () => {
  return (
    <Wrapper>
      <Title name="My Dev Journey" />
      <Button btn="FormApp" />
      {/* formularz */}
      <Button btn="2" />
      {/* todolist */}
      <Button btn="3" />
      {/* licznik kliknięć */}
      <Button btn="4" />
      {/* wyszukiwarka */}
      <Button btn="5" />
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
