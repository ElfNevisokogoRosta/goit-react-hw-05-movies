import React from "react";
import { Actor } from "../../../utils/useCast";
import placeholder from "../../../images/placeholder.jpg";
import { CastCardTitle, CastCardDis, ImgWrpaer, Img } from "./CastCard.styled";
interface CastCardProps {
  actor: Actor;
}
const CastCard: React.FC<CastCardProps> = ({ actor }) => {
  return (
    <li>
      <CastCardTitle>{actor.name}</CastCardTitle>
      <CastCardDis>{actor.character}</CastCardDis>
      <ImgWrpaer>
        {actor.profile_path === null ? (
          <Img src={placeholder} alt="placeholder" />
        ) : (
          <Img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
          />
        )}
      </ImgWrpaer>
    </li>
  );
};
export default CastCard;
