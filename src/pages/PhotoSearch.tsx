import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import Title from '../components/Title';

type Photo = {
  id: number;
  photographer: string;
  src: { large: string; original: string };
};

const PhotoSearch = () => {
  const [state, setState] = useState<Photo[]>([]);
  const [enteredSearch, setEnteredSearch] = useState('');
  const [page, setPage] = useState(1);

  const url = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
  const auth = {
    headers: {
      Authorization:
        ' 563492ad6f917000010000015a6a84e181aa4f3caff12a5a2208fc66',
    },
  };

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredSearch(event.currentTarget.value);
  };

  const searchSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredSearch.trim() === '') {
      return;
    }

    axios
      .get(
        `https://api.pexels.com/v1/search?query=${enteredSearch}&per_page=15&page=${1}`,
        auth
      )
      .then((res) => {
        const persons = res.data;

        setState(persons.photos);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios.get(url, auth).then((res) => {
      const persons = res.data;
      setState(persons.photos);
    });
  }, []);

  const loadMore = () => {
    let newUrl = '';
    if (enteredSearch.trim() === '') {
      newUrl = `https://api.pexels.com/v1/curated?page=1&per_page=15&page=${
        page + 1
      }`;
    } else {
      newUrl = `https://api.pexels.com/v1/search?query=${enteredSearch}&per_page=15&page=${
        page + 1
      }`;
    }

    axios.get(newUrl, auth).then((res) => {
      const persons = res.data;
      setState((prevValue) => [...prevValue, ...persons.photos]);
    });
    setPage((prevValue) => prevValue + 1);
  };

  return (
    <PageLayout>
      <Header>
        <Title name="Photo Search"></Title>
        <form onSubmit={searchSubmitHandler}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={enteredSearch}
            onChange={searchChangeHandler}
          />
          <Btn type="submit">Search</Btn>
        </form>
      </Header>
      <main>
        <Gallery>
          {state.map((photo) => (
            <GalleryInfo key={photo.id}>
              <div>
                <p>{photo.photographer}</p>
                <a href={photo.src.original}>Download</a>
              </div>
              <img alt="photogallery" src={photo.src.large}></img>
            </GalleryInfo>
          ))}
        </Gallery>
      </main>
      <MoreWrapper>
        <Btn onClick={loadMore}>More</Btn>
      </MoreWrapper>
    </PageLayout>
  );
};

export default PhotoSearch;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 30vh;
  justify-content: center;
  align-items: center;

  input {
    padding: 1rem 2rem;
    border-radius: 3rem;
    border: 0.2rem solid #286fc7;
    text-transform: capitalize;
  }
`;
const MoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 2rem 0rem;
  width: 80%;
  margin: auto;
  row-gap: 5rem;
  column-gap: 3rem;
`;

const GalleryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #286fc7;
  font-weight: 600;
  padding: 0.5rem 0rem;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
