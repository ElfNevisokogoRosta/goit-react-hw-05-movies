import React from "react";
import { Outlet } from "react-router-dom";

export const Movie = () => {
  return (
    <div>
      Movie
      <Outlet />
    </div>
  );
};
