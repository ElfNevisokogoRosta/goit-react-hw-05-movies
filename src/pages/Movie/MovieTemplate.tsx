import React, { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";

const MovieTemplate: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieTemplate;
