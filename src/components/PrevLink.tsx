import React from "react";
import { Link } from "react-router-dom";
import { PrevLinkProps } from "../utils/interfaces";
export const PrevLink: React.FC<PrevLinkProps> = ({ state }) => {
  return <Link to={state?.state ?? "/"}>Go back</Link>;
};
