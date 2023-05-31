import React, { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import { useMovie } from "../../utils/useMoive";
import { MutatingDots } from "react-loader-spinner";
import { Container, NavLinkContainer } from "./Movie.styled";
export interface MovieI {
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  genres: [{ name?: string }];
}
const MovieDetails = React.lazy(() => import("./components/MovieDetails"));
export const Movie: React.FC = () => {
  const [movie, setMovie] = useState<MovieI>({
    title: "",
    poster_path: "",
    vote_average: 0,
    overview: "",
    genres: [{ name: "" }],
  });

  const params = useParams<Record<string, string | undefined>>();
  const id = params.movieID;
  const navigate = useNavigate();
  const [loading, error, result] = useMovie(id || "000");

  useEffect(() => {
    setMovie(result);
  }, [result]);
  if (error) {
    navigate("/error_page");
  }
  return (
    <Container>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <MutatingDots />
          </div>
        }
      >
        <MovieDetails movie={movie} />
      </Suspense>
      <NavLinkContainer>
        <NavLink
          className="movie-link"
          to={`/movies/movie/${params.movieID}/cast`}
        >
          Cast
        </NavLink>
        <NavLink
          className="movie-link"
          to={`/movies/movie/${params.movieID}/reviews`}
        >
          Reviews
        </NavLink>
      </NavLinkContainer>
      <Outlet />
    </Container>
  );
};
