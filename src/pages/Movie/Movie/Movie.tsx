import React, { SetStateAction, useEffect, useState } from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { SearchResults } from "./SearchResults/SearchResults";
import { MovieI } from "../../../utils/interfaces";
import { useSearch } from "../../../utils/customHooks/useSearch";
import { LoadMoreBtn } from "../../MoviesHome/components/LoadMoreBTN/LoadMoreBtn";
import { Loader } from "../../../components/Loader";
import { useNavigate } from "react-router-dom";

const Movie: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<MovieI[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, error, result, totalPages] = useSearch(query, page);
  const navigate = useNavigate();
  useEffect(() => {
    setResponse([]);
  }, [query]);
  useEffect(() => {
    const res = result.map(
      (film: { id: number; title: string; poster_path: string }) => ({
        id: film.id,
        title: film.title,
        poster: film.poster_path,
      })
    );
    setResponse((prevState) => [...prevState, ...res]);
  }, [result]);
  const onSearhQuery = (
    func: (arg0: string, arg1: React.Dispatch<SetStateAction<string>>) => void
  ) => {
    func(query, setQuery);
  };
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
    <>
      <SearchForm onSubmit={onSearhQuery} />
      <SearchResults films={response} />
      {loading && <Loader />}
      {page < totalPages ? <LoadMoreBtn onClick={nextPage} /> : null}
    </>
  );
};
export default Movie;
