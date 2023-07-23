import React from "react";
import { PopularElement } from "../PopularElement/PopularElement";
import { FilmList } from "../../MovieHome.styled";
import { PopularListProps } from "../../../../utils/interfaces";

export const PopularList: React.FC<PopularListProps> = ({ filmList }) => {
  return (
    <FilmList>
      {filmList.map((film, id) => (
        <PopularElement key={`${film.id}-${id}`} film={film} />
      ))}
    </FilmList>
  );
};
