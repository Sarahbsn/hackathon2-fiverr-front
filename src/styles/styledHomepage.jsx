import styled from 'styled-components';

export const StyledMainContainer = styled.div`
  display: flex;
  margin: 2%;
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
  width: 50%;
  margin-top: 5%;
  margin-left: 2%;

  align-items: center;
`;

export const StyledTitle1 = styled.h1`
  font-size: 5vh;
  color: #8f2900;
  text-align: center;
`;

export const StyledParagraphe = styled.p`
  font-size: 3vh;
  flex-wrap: wrap;
  text-align: center;
`;

export const Styledbutton = styled.button`
  height: 5vh;
  width: 20%;
  background-color: lightcoral;
  align-items: center;
`;

// right conatainer with image

export const StyledRightContainer = styled.div`
  padding-left: 15%;
  display: flex;
  justify-content: right;
  height: 60vh;
  width: 40%;
`;

export const StyledImage = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
`;

// card bottom page

export const StyledCardContainer = styled.div`
  display: flex;

  text-align: center;
`;

export const StyledCardImage = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
`;
