import React, { useEffect, useState, Suspense } from "react";
import { usePopular } from "../../utils/usePopular";
import { Container, FilmList, HomeTitle, Btn } from "./Home.styled";
import { MutatingDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
export interface Film {
  id: number;
  original_name: string;
  poster_path: string;
  title: string;
}
const FilmElementWithSuspense = React.lazy(
  () => import("./components/FilmElement")
);

export const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [popular, setPopular] = useState<Film[]>([]);
  const [loading, error, response, totalPages] = usePopular(page);
  const navigate = useNavigate();
  useEffect(() => {
    if (page === 1) {
      setPopular(response);
    } else if (page <= totalPages) {
      setPopular((prevState) => [...prevState, ...response]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);
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
      <HomeTitle>Popular</HomeTitle>
      <FilmList>
        {popular.length > 0 &&
          popular.map((film, id: number) => {
            return (
              <Suspense
                key={`${film.id}-${id}`}
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
                <FilmElementWithSuspense film={film} />
              </Suspense>
            );
          })}
        {loading ? <MutatingDots /> : ""}
      </FilmList>
      {page < totalPages && <Btn onClick={handleNextPage}>Next Page</Btn>}
    </Container>
  );
};
