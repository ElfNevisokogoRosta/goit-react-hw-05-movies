import React, { useEffect, useState } from "react";
import { useSearch } from "../../utils/useSearch";
import { Film } from "../Home/Home";
import { FilmList, Container, Btn } from "../Home/Home.styled";
import FilmElement from "../Home/components/FilmElement";
import { useNavigate, useParams } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
export const SearchResult: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [searcherd, setSearched] = useState<Film[]>([]);
  const params = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();
  const query = params.query;
  const [loading, error, result, totalPages] = useSearch(query || "", page);
  useEffect(() => {
    setSearched([]);
  }, [query]);
  useEffect(() => {
    setSearched((prevState) => [...prevState, ...result]);
  }, [result]);
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  if (error) {
    navigate("/error_page");
  }
  return (
    <Container>
      {result.length > 0 ? (
        <FilmList>
          {searcherd.map((film: Film, id) => (
            <FilmElement key={`${film.id}-${id}`} film={film} />
          ))}
        </FilmList>
      ) : (
        <div>Database has no data for this query</div>
      )}
      {loading ? <MutatingDots /> : ""}
      {page < totalPages && <Btn onClick={handleNextPage}>Next Page</Btn>}
    </Container>
  );
};
