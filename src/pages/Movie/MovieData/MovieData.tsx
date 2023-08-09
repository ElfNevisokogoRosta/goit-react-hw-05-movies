import React, { useEffect, useRef, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useMovie } from "../../../utils/customHooks/useMoive";
import DetailsI from "../../../utils/interfaces/DetailsI";
import {
  Img,
  ImgWrpaer,
} from "../../MoviesHome/components/PopularElement/PopularElement.styled";
import {
  Genres,
  NavLinkContainer,
  OverviewDis,
  MovieTitle,
  MovieScore,
  DetailsContainer,
  MovieDetailsContainer,
} from "./MovieData.styled";
import { Container } from "../../MoviesHome/MovieHome.styled";
import { Loader } from "../../../components/Loader";
import { PrevLink } from "../../../components/PrevLink";
const placeholder = require("../../../images/placeholder.jpg");

const MovieData: React.FC = () => {
  const [movie, setMovie] = useState<DetailsI>({
    title: "",
    poster: "",
    vote: 0,
    overview: "",
    genre: [{ name: "" }],
  });
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [loading, error, result] = useMovie(movieId || "000");
  useEffect(() => {
    setMovie({
      id: movieId,
      title: result.title,
      poster: result.poster_path,
      vote: result.vote_average,
      overview: result.overview,
      genre: result.genres,
    });
  }, [result, movieId]);
  if (error) {
    navigate("/error");
  }
  const location = useLocation();
  const prevAdressRef = useRef(location);
  console.log(prevAdressRef);
  return (
    <Container>
      <div>
        {loading && <Loader />}
        <PrevLink state={prevAdressRef && prevAdressRef.current} />
        <MovieTitle>{movie && movie.title}</MovieTitle>
        <MovieDetailsContainer>
          <ImgWrpaer>
            <Img
              src={
                movie.poster
                  ? `https://image.tmdb.org/t/p/w500${movie.poster}`
                  : placeholder
              }
              alt={movie.title}
            />
          </ImgWrpaer>
          <DetailsContainer>
            {" "}
            <MovieScore>{Math.round(movie.vote)}</MovieScore>
            <OverviewDis>{movie.overview}</OverviewDis>
            <Genres>
              {" "}
              {movie.genre.map((genre: { name: string }, id) => (
                <li key={`${genre.name}-${id}`}>{genre.name}</li>
              ))}
            </Genres>
          </DetailsContainer>
        </MovieDetailsContainer>
        <NavLinkContainer>
          <NavLink className="movie-link" to={`/movie/${movieId}/cast`}>
            Cast
          </NavLink>
          <NavLink className="movie-link" to={`/movie/${movieId}/review`}>
            Review
          </NavLink>
        </NavLinkContainer>
      </div>

      <Outlet />
    </Container>
  );
};
export default MovieData;
