import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { MutatingDots } from "react-loader-spinner";

export const MoviesLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Suspense
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
        <Outlet />
      </Suspense>
    </div>
  );
};
