import styled from 'styled-components';
import { BoxColTitle, BoxColP, StyledH3, StyledP } from '../FiverrAddEvents/FAEmapText';

export const Container = styled.div`
  display: flex;
  height: 45%;
  width: 70%;
  padding: 65px;
  justify-content: space-between;
  margin-left: 200px;
`;

export const StyledBoxGoogleMap = styled.iframe`
  width: 500px;
  height: 500px;
  padding: 35px;
`;

export const StyledTitleInfo = styled.h3`
  font-size: 25px;
  width: 150px;
  margin-left: 325px;
  margin: 130px;
  text-decoration: underline #2dbe73;
`;

export const CMEtextMap = () => {
  return (
    <>
      <Container>
        <BoxColTitle>
          <StyledTitleInfo>Place :</StyledTitleInfo>
          <StyledTitleInfo>Date :</StyledTitleInfo>
          <StyledTitleInfo>Hours:</StyledTitleInfo>
        </BoxColTitle>
        <BoxColP>
          <StyledP>Bordeaux</StyledP>
          <StyledP>30/06/2021</StyledP>
          <StyledP>19h00</StyledP>
        </BoxColP>
      </Container>
    </>
  );
};
