import React from "react";
import { PopularElement } from "../../../MoviesHome/components/PopularElement/PopularElement";
import { Container, FilmList } from "../../../MoviesHome/MovieHome.styled";
import { SearchResultsProps } from "../../../../utils/interfaces";

export const SearchResults: React.FC<SearchResultsProps> = ({ films }) => {
  return (
    <Container>
      <FilmList>
        {films.map((film, id: number) => (
          <PopularElement key={`${film.id}-${id}`} film={film} />
        ))}
      </FilmList>
    </Container>
  );
};
