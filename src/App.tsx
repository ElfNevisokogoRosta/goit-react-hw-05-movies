import React, { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomeTemplate = lazy(() => import("./pages/HomeTemplate"));
const MovieHome = lazy(() => import("./pages/MoviesHome/MovieHome"));
const Movie = lazy(() => import("./pages/Movie/Movie/Movie"));
const MovieData = lazy(() => import("./pages/Movie/MovieData/MovieData"));
const Cast = lazy(() => import("./pages/Movie/MovieData/Cast/Cast"));
const Review = lazy(() => import("./pages/Movie/MovieData/Review/Review"));
const MovieTemplate = lazy(() => import("./pages/Movie/MovieTemplate"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<MovieHome />} />
          <Route path="/movie" element={<MovieTemplate />}>
            <Route index element={<Movie />} />
            <Route path=":movieId" element={<MovieData />}>
              <Route path="cast" element={<Cast />} />
              <Route path="review" element={<Review />} />
            </Route>
          </Route>
          <Route path="error" element={<ErrorPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
