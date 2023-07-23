import React from "react";
import { Link } from "react-router-dom";
import {
  Img,
  ImgWrpaer,
  FilmTitlte,
  FilmElementContainer,
} from "./PopularElement.styled";
import { PopularElelementProps } from "../../../../utils/interfaces";
const placeholder = require("../../../../images/placeholder.jpg") as any;

export const PopularElement: React.FC<PopularElelementProps> = ({ film }) => {
  const { id, title, poster } = film;
  return (
    <Link to={`/movie/${id}`}>
      <FilmElementContainer>
        <FilmTitlte>{title}</FilmTitlte>
        <ImgWrpaer>
          <Img
            src={
              poster ? `https://image.tmdb.org/t/p/w500${poster}` : placeholder
            }
            alt={title}
          />
        </ImgWrpaer>
      </FilmElementContainer>
    </Link>
  );
};
