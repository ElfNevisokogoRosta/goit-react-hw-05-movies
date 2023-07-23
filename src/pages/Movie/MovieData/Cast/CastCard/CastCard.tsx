import React from "react";
import { CastCardProps } from "../../../../../utils/interfaces";
import { CastCardTitle, CastCardDis, ImgWrpaer, Img } from "./CastCard.styled";
const placeholder = require("../../../../../images/placeholder.jpg");

export const CastCard: React.FC<CastCardProps> = ({ actor }) => {
  return (
    <li>
      <CastCardTitle>{actor.name}</CastCardTitle>
      <CastCardDis>{actor.character}</CastCardDis>
      <ImgWrpaer>
        {actor.profileImg === null ? (
          <Img src={placeholder} alt="placeholder" />
        ) : (
          <Img
            src={`https://image.tmdb.org/t/p/w500${actor.profileImg}`}
            alt={actor.name}
          />
        )}
      </ImgWrpaer>
    </li>
  );
};
