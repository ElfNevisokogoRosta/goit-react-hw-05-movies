import styled from "styled-components";
const HeaderStyled = styled.header`
  background-color: tomato;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
`;
const Container = styled.div`
  width: 1280px;
  padding: 0px 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 40px;
`;
const NavContianer = styled.nav``;
const NavList = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  gap: 30px;
`;
const NavElement = styled.li`
  font-size: 48px;
  font-weight: 550;
`;
const MainTitle = styled.h1`
  margin: 0px;
  margin-left: 30px;
  font-size: 48px;
  font-weight: 700;
  text-transform: uppercase;
`;
export {
  HeaderStyled,
  NavContianer,
  NavList,
  NavElement,
  MainTitle,
  Container,
};
