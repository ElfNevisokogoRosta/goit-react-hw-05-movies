import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const MoviesLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
