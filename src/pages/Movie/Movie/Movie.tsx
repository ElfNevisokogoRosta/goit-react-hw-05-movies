import React, { useEffect, useState } from "react";
import { SearchForm } from "./SearchForm/SearchForm";
import { SearchResults } from "./SearchResults/SearchResults";
import { MovieI } from "../../../utils/interfaces";
import { useSearch } from "../../../utils/customHooks/useSearch";
import { LoadMoreBtn } from "../../MoviesHome/components/LoadMoreBTN/LoadMoreBtn";
import { Loader } from "../../../components/Loader";
import {
  SetURLSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Movie: React.FC = () => {
  const [response, setResponse] = useState<MovieI[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? " ";
  const [loading, error, result, totalPages] = useSearch(searchQuery, page);
  const navigate = useNavigate();
  // useEffect(() => {
  //   setSearchParams({ query: query });
  //   setResponse([]);
  // }, [query]);
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
    func: (arg0: URLSearchParams, arg1: SetURLSearchParams) => void
  ) => {
    func(searchParams, setSearchParams);
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
