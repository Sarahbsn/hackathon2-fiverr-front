import styled from 'styled-components';
import { BoxColTitle, BoxColMap, BoxColP, StyledH3, StyledP } from '../FiverrAddEvents/FAEmapText';

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
        <BoxColMap>
          <StyledBoxGoogleMap
            title="Bordeaux"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45246.829998047564!2d-0.6211603289252993!3d44.86378343537451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1624997406622!5m2!1sfr!2sfr"
          />
        </BoxColMap>
      </Container>
    </>
  );
};
