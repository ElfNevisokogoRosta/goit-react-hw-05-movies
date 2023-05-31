import React from "react";
import { MovieI } from "../Movie";
import {
  Container,
  MovieTitle,
  MovieScore,
  DetailsContainer,
  SubTitle,
  OverviewDis,
  Genres,
} from "./MovieDetails.styled";
interface MovieDetailsProps {
  movie: MovieI;
}
const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <Container>
      <div>
        <MovieTitle>{movie.title}</MovieTitle>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
      </div>
      <DetailsContainer>
        <MovieScore>
          User score: {Math.round(movie.vote_average * 10)}%
        </MovieScore>
        <div>
          <SubTitle>Overview</SubTitle>
          <OverviewDis>{movie.overview}</OverviewDis>
        </div>
        <div>
          <SubTitle>Genres</SubTitle>
          <Genres>
            {movie.genres.map((genre, id) => (
              <span key={`${genre.name}-${id}`}>{genre.name}</span>
            ))}
          </Genres>
        </div>
      </DetailsContainer>
    </Container>
  );
};
export default MovieDetails;
