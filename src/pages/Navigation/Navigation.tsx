import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderStyled,
  NavContianer,
  NavList,
  NavElement,
  MainTitle,
  Container,
} from "./Navigation.styled";
export const Navigation: React.FC = () => {
  return (
    <HeaderStyled>
      <Container>
        <MainTitle>Film Path</MainTitle>
        <NavContianer>
          <NavList>
            <NavElement>
              <NavLink to="/">Home</NavLink>
            </NavElement>
            <NavElement>
              <NavLink to="/movie">Movie</NavLink>
            </NavElement>
          </NavList>
        </NavContianer>
      </Container>
    </HeaderStyled>
  );
};
