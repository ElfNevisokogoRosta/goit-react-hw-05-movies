import React from "react";
import { Outlet } from "react-router-dom";

export const Movies: React.FC = () => {
  return (
    <div>
      MovieList
      <Outlet />
    </div>
  );
};
