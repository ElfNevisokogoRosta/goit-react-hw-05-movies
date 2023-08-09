import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../../components/Loader";

const MovieTemplate: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieTemplate;
