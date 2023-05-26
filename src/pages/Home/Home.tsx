import React, { useEffect, useState } from "react";
import { usePopular } from "../../utils/usePopular";
import { FilmElement } from "./components/FilmElement";
import { Container, FilmList, HomeTitle, Btn } from "./Home.styled";
export interface Film {
  id: number;
  original_name: string;
  poster_path: string;
  title: string;
}

export const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [popular, setPopular] = useState<Film[]>([]);
  const [loading, error, response, totalPages] = usePopular(page);

  useEffect(() => {
    if (page === 1) {
      setPopular(response);
    } else if (page <= totalPages) {
      setPopular((prevState) => [...prevState, ...response]);
    }
  }, [response]);
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Container>
      <HomeTitle>Popular</HomeTitle>
      <FilmList>
        {popular.length > 0 &&
          popular.map((film, id: number) => {
            return <FilmElement key={`film.id-${id}`} film={film} />;
          })}
      </FilmList>

      {page < totalPages && <Btn onClick={handleNextPage}>Next Page</Btn>}
    </Container>
  );
};
