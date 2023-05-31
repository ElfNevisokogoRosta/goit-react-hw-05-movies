import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 30px;
`;
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
const Genres = styled.p`
  display: flex;
  gap: 15px;
  font-size: 28px;
  font-weight: 700;
`;
export {
  Genres,
  SubTitle,
  OverviewDis,
  Container,
  MovieTitle,
  MovieScore,
  DetailsContainer,
};
