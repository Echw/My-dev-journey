import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import Title from '../components/Title';

const HarryPotterAPI = () => {
  return (
    <PageLayout>
      <Wrapper>
        <Title name="Harry Potter Search" />
      </Wrapper>
    </PageLayout>
  );
};

export default HarryPotterAPI;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
