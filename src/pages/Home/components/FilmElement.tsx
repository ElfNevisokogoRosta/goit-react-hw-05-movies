import React from "react";
import { Film } from "../Home";
import {
  Img,
  ImgWrpaer,
  FilmElementContainer,
  FilmTitlte,
} from "./FilmElement.styled";
import { useNavigate } from "react-router-dom";
import placeholder from "../../../images/placeholder.jpg";
interface FilmElementProps {
  film: Film;
}

const FilmElement: React.FC<FilmElementProps> = ({ film }) => {
  const navigate = useNavigate();
  const filmHandler = (e: React.PointerEvent<HTMLLIElement>) => {
    navigate(`/movies/movie/${film.id}`);
  };

  return (
    <FilmElementContainer onClick={filmHandler}>
      <FilmTitlte>{film.original_name || film.title}</FilmTitlte>
      <ImgWrpaer>
        {film.poster_path === null ? (
          <Img src={placeholder} />
        ) : (
          <Img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={`${film.title}-poster`}
          />
        )}
      </ImgWrpaer>
    </FilmElementContainer>
  );
};
export default FilmElement;
