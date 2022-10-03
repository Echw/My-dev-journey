import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PageLayout from '../components/PageLayout';
import Title from '../components/Title';
import { getColorByHouse } from './../helpers/getColorByHouse';

type Character = {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  wizard: boolean;
  ancestry: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  alive: boolean;
  image: string;
};

const HarryPotterAPI = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [character, setCharacter] = useState<Character | undefined>(undefined);
  const [enteredSearch, setEnteredSearch] = useState('');

  const url = 'https://hp-api.herokuapp.com/api/characters';

  useEffect(() => {
    axios.get(url).then((res) => {
      const characters = res.data;
      setCharacters(characters);
      const found = characters.find(
        (character: Character) => character.name === 'Harry Potter'
      );
      setCharacter(found);
    });
  }, []);

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredSearch(event.currentTarget.value);
  };

  const searchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredSearch.trim() === '') {
      return;
    }
    const found = characters.find((char) => char.name.includes(enteredSearch));
    setCharacter(found);
  };

  if (!character) return <div>No character found</div>;

  return (
    <PageLayout>
      <Wrapper>
        <Title name="Harry Potter Search" />
        <Search>
          <form onSubmit={searchSubmitHandler}>
            <input
              type="text"
              name="search"
              placeholder="Search Character"
              onChange={searchChangeHandler}
            />
            <Btn type="submit">Search</Btn>
          </form>
        </Search>
        <DataWrapper>
          <InfoWrapper>
            <h2>{character.name}</h2>
            <h3 style={{ color: getColorByHouse(character.house) }}>
              House: {character.house}
            </h3>
            <span>Species: {character.species}</span>
            <span>Gender: {character.gender}</span>
            <span>Wizard: </span>
            <span>Ancestry: {character.ancestry}</span>
            <span>Patronus: {character.patronus}</span>
            <span>Student/Staff:</span>
            <span>Date Of Birth: {character.dateOfBirth}</span>
            <span>Alive:</span>
          </InfoWrapper>
          <ImgWandWrapper>
            <Img>
              <img src={character.image} alt={character.name} />
            </Img>
            <WandWrapper>
              <h3>Wand</h3>
              <span>Wood: {character.wand.wood}</span>
              <span>Core: {character.wand.core}</span>
              <span>Length: {character.wand.length}"</span>
            </WandWrapper>
          </ImgWandWrapper>
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
  padding: 1rem 4rem;
  margin: 2.5rem;
  border: 0.2rem solid #286fc7;
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
  padding: 2rem;
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

const ImgWandWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Img = styled.div`
  height: 15rem;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const WandWrapper = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h3 {
    margin: 0;
  }
`;
