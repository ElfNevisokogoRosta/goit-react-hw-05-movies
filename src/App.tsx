import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MoviesLayout } from "./pages/MoviesLayout";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Movie } from "./pages/Movie/Movie";
import { Reviews } from "./pages/Reviews/Reviews";
import { Cast } from "./pages/Cast/Cast";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route path="/movies/:movieId" element={<Movie />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
