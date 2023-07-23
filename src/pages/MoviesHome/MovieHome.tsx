import React, { useEffect, useState } from "react";
import { PopularList } from "./components/PopularList/PopularList";
import { LoadMoreBtn } from "./components/LoadMoreBTN/LoadMoreBtn";
import { usePopular } from "../../utils/customHooks/usePopular";
import { MovieI } from "../../utils/interfaces";
import { Container, HomeTitle } from "./MovieHome.styled";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
const MovieHome: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [films, setFilms] = useState<MovieI[]>([]);
  const navigate = useNavigate();
  const [loading, error, response, totalPages] = usePopular(page);
  useEffect(() => {
    const filtredFilms = response.map(
      (film: { id: number; title: string; poster_path: string }) => ({
        id: film.id,
        title: film.title,
        poster: film.poster_path,
      })
    );
    setFilms((prevState) => [...prevState, ...filtredFilms]);
  }, [response]);

  const nextPage = (
    func: (
      arg0: number,
      arg1: React.Dispatch<React.SetStateAction<number>>
    ) => void
  ) => {
    func(page, setPage);
  };
  if (error) {
    navigate("/error");
  }
  return (
    <Container>
      <HomeTitle>Popular</HomeTitle>
      <PopularList filmList={films} />
      {loading && <Loader />}
      {page < totalPages ? <LoadMoreBtn onClick={nextPage} /> : null}
    </Container>
  );
};
export default MovieHome;
