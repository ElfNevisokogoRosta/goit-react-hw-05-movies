import React, { Suspense, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCast } from "../../utils/useCast";
import { Actor } from "../../utils/useCast";
import { MutatingDots } from "react-loader-spinner";
import { CastList } from "./Cast.styled";
const CastCard = React.lazy(() => import("./CastCard/CastCard"));
export const Cast: React.FC = () => {
  const [actors, setActors] = useState<Actor[]>([
    {
      character: "",
      name: "",
      profile_path: "",
      id: "1",
    },
  ]);
  const params = useParams<Record<string, string | undefined>>();
  const id = params.movieID;
  const [loading, error, result] = useCast(id || "");
  const navigate = useNavigate();
  useEffect(() => {
    setActors(result);
  }, [result]);
  if (error) {
    navigate("/error_page");
  }
  return (
    <div>
      <CastList>
        {actors.map((actor: Actor, id: number) => {
          return (
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
              {" "}
              <CastCard key={`${actor.id}-${id}`} actor={actor} />
            </Suspense>
          );
        })}
      </CastList>
      {loading ? <MutatingDots /> : ""}
    </div>
  );
};
