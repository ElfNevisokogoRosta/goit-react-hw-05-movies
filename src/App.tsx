import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MoviesLayout } from "./pages/MoviesLayout";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { SearchResult } from "./pages/SearchResult/SearhcResult";
import { Movie } from "./pages/Movie/Movie";
import { Cast } from "./pages/Cast/Cast";
import { ReviewsPage } from "./pages/Reviews/Reviews";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route path="searh/:query" element={<SearchResult />} />
            <Route path="movie/:movieID" element={<Movie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
          </Route>
          <Route path="/error_page" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
