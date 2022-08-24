import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PageLayout from '../components/PageLayout';
import Title from '../components/Title';

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  return (
    <PageLayout>
      <Wrapper>
        <Title name="Click Counter" />
        <div>
          <Btn btn="-" onClick={decrease} />
          <h2>{counter}</h2>
          <Btn btn="+" onClick={increase} />
        </div>
      </Wrapper>
    </PageLayout>
  );
};

export default ClickCounter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: 0 7rem;
    margin: 2.5rem;
    border: 0.2rem solid #286fc7;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 40vh;
    font-size: 2rem;
  }
`;

const Btn = styled(Button)`
  font-size: 1.5rem;
`;
