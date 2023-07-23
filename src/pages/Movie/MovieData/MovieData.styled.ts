import styled from "styled-components";

const MovieTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  margin: 0;
  margin-bottom: 15px;
`;
const MovieScore = styled.p`
  font-size: 30px;
  font-weight: 700;
`;
const DetailsContainer = styled.div`
  margin-top: 30px;
`;
const SubTitle = styled.h3`
  font-size: 32px;
  margin: 0;
  margin-bottom: 15px;
  margin-top: 30px;
`;
const OverviewDis = styled.p`
  margin: 0;
  margin-top: 15px;
  font-size: 28px;
  line-height: 1.14;
`;
const Genres = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 15px;
  font-size: 28px;
  font-weight: 700;
`;
const MovieDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  gap: 30px;
`;

const NavLinkContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 15px 0px;
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
`;
export {
  Genres,
  SubTitle,
  OverviewDis,
  MovieTitle,
  MovieScore,
  DetailsContainer,
  MovieDetailsContainer,
  NavLinkContainer,
};
