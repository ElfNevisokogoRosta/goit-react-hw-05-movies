import React from "react";
import { Outlet } from "react-router-dom";

export const Movies = () => {
  return (
    <div>
      MovieList
      <Outlet />
    </div>
  );
};
