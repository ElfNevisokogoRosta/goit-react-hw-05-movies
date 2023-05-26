import styled from "styled-components";
const ImgWrpaer = styled.div`
  position: relative;
  padding-top: 150%;
  box-sizing: border-box;
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  box-sizing: border-box;
`;
const FilmTitlte = styled.h2`
  width: 300px;
  font-size: 24px;
  text-align: center;
  margin: 15px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const FilmElementContainer = styled.li`
  display: flex;
  flex-direction: column;
`;
export { Img, ImgWrpaer, FilmTitlte, FilmElementContainer };
