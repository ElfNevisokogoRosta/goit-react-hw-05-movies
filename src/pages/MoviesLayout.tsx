import React from "react";
import { Outlet } from "react-router-dom";

export const MoviesLayout = () => {
  return (
    <div>
      <>Navigations</>
      <Outlet />
    </div>
  );
};
