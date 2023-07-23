import styled from "styled-components";
const Container = styled.div`
  width: 1280px;
  box-sizing: border-box;
  margin: 30px auto 30px auto;
  padding: 0px 15px;
`;
const FilmList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 0;
  padding: 0;
`;
const HomeTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  text-transform: uppercase;
`;
const Btn = styled.button`
  display: block;
  width: 250px;
  margin: 30px auto 30px auto;
  padding: 15px 50px;
  border: none;
  border-radius: 15px;
  font-size: 28px;
  cursor: pointer;
`;
export { Container, FilmList, HomeTitle, Btn };
