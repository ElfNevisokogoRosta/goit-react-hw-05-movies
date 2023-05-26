import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderStyled,
  NavContianer,
  NavList,
  NavElement,
  MainTitle,
  Container,
} from "./Header.styled";
export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Container>
        <MainTitle>Film Path</MainTitle>
        <NavContianer>
          <NavList>
            <NavElement>
              <NavLink className="navLink" to={"/"}>
                Home
              </NavLink>
            </NavElement>
            <NavElement>
              <NavLink className="navLink" to={"/movies"}>
                Movies
              </NavLink>
            </NavElement>
          </NavList>
        </NavContianer>
      </Container>
    </HeaderStyled>
  );
};
