import React from "react";
import { SiNextcloud } from "react-icons/si";
import { Btn } from "../../MovieHome.styled";
import { LoadMoreBtnProps } from "../../../../utils/interfaces";

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  const nextPage = (
    state: number,
    setSate: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setSate((prevState) => prevState + 1);
  };
  return (
    <>
      <Btn onClick={() => onClick(nextPage)}>
        Next
        <SiNextcloud />
      </Btn>
    </>
  );
};
