import React from "react";
import { Film } from "../Home";
import {
  Img,
  ImgWrpaer,
  FilmElementContainer,
  FilmTitlte,
} from "./FilmElement.styled";
interface FilmElementProps {
  film: Film;
}
export const FilmElement: React.FC<FilmElementProps> = ({ film }) => {
  return (
    <FilmElementContainer>
      <FilmTitlte>{film.original_name || film.title}</FilmTitlte>
      <ImgWrpaer>
        <Img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt=""
        />
      </ImgWrpaer>
    </FilmElementContainer>
  );
};
