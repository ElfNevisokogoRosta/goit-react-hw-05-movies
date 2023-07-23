import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCast } from "../../../../utils/customHooks/useCast";
import { CastList } from "./Cast.styled";
import { CastCard } from "./CastCard/CastCard";
import { CastI, ActorI } from "../../../../utils/interfaces";
import { Loader } from "../../../../components/Loader";

const Cast: React.FC = () => {
  const [res, setRes] = useState<CastI[]>([]);
  const { movieId } = useParams();
  const [loading, error, result] = useCast(movieId || "000");
  const navigate = useNavigate();
  useEffect(() => {
    const res = result.map((actor: ActorI) => ({
      id: actor.id,
      character: actor.character,
      name: actor.name,
      profileImg: actor.profile_path,
    }));
    setRes(res);
  }, [result]);
  if (error) {
    navigate("/error");
  }
  return (
    <div>
      <CastList>
        {res.map((actor: CastI) => (
          <CastCard actor={actor} />
        ))}
        {loading && <Loader />}
      </CastList>
    </div>
  );
};
export default Cast;
