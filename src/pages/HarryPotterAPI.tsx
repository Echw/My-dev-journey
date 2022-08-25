import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import Title from '../components/Title';

const HarryPotterAPI = () => {
  return (
    <PageLayout>
      <Wrapper>
        <Title name="Harry Potter Search" />
        <Search>
          <form>
            <input type="text" name="search" placeholder="Search Character" />
            <Btn type="submit">Search</Btn>
          </form>
        </Search>
        <DataWrapper>
          <InfoWrapper>
            <span>Species:</span>
            <span>Gender:</span>
            <span>House:</span>
            <span>Wizard:</span>
            <span>Ancestry:</span>
            <span>Patronus:</span>
            <span>Student/Staff:</span>
            <span>Date Of Birth:</span>
            <span>Alive:</span>
          </InfoWrapper>
          <div>
            <div>image</div>
            <WandWrapper>
              <h3>Wand</h3>
              <span>Wood:</span>
              <span>Core:</span>
              <span>Length:</span>
            </WandWrapper>
          </div>
        </DataWrapper>
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

const DataWrapper = styled.div`
  padding: 2rem 4rem;
  margin: 2.5rem;
  background-color: beige;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Search = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    padding: 1rem 2rem;
    border-radius: 3rem;
    border: 0.2rem solid #286fc7;
    text-transform: capitalize;
  }
`;

const Btn = styled.button`
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 3rem;
  border: 0.2rem solid #286fc7;
  background: transparent;
  cursor: pointer;
  transition: 0.5s;
  text-decoration: none;
  color: #286fc7;
  font-weight: 600;
  font-size: 0.75rem;
  text-align: center;

  :hover {
    background: #286fc7;
    color: white;
    transition: 0.5s;
  }
`;

const InfoWrapper = styled.div`
  padding: 2rem 3rem;
  border: 0.2rem solid #286fc7;
  background-color: white;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const WandWrapper = styled.div`
  padding: 1rem;
  border: 0.2rem solid #286fc7;
  background-color: white;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h3 {
    margin: 0;
  }
`;
