import styled from "styled-components";
const CastCardTitle = styled.h3`
  margin: 0px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 20px;
`;
const CastCardDis = styled.p`
  margin: 0px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 20px;
`;
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
export { CastCardTitle, CastCardDis, ImgWrpaer, Img };
