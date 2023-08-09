import React, { Suspense } from "react";
import { Navigation } from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Loader } from "../components/Loader";

const HomeTemplate: React.FC = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomeTemplate;
