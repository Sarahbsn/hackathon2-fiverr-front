import styled from 'styled-components';
import grandest from '../../assets/grandest.png';

export const Container = styled.div`
  display: flex;
  height: 45%;
  width: 70%;
  justify-content: space-between;
  margin-left: 250px;
`;

export const BoxColTitle = styled.div`
height: 30px;
`;

export const BoxColMap = styled.div`
height: 30px;
`;

export const BoxColP = styled.div`
height: 30px;
`;
export const StyledH3 = styled.h3`
  font-size: 25px;
  width: 150px;
  margin-left: 325px;
  margin: 120px;
  text-decoration: underline #2dbe73;
`;

export const StyledP = styled.p`
  display: flex;
  height: 25px;
  width: 350px;
  padding: 8px;
  margin: 120px;
  background-color: #c0c0c0;
  justify-content: center;
`;

export const StyledMap = styled.img`
  width: 600px;
  height: auto;
`;

export const FaepmapText = () => {
  return (
    <>
      <Container>
        <BoxColTitle>
          <StyledH3>Where :</StyledH3>
          <StyledH3>Adress :</StyledH3>
        </BoxColTitle>
        <BoxColP>
          <StyledP>Strasbourg</StyledP>
          <StyledP>40 rue des loisirs</StyledP>
        </BoxColP>
        <BoxColMap>
          <StyledMap src={grandest} alt="" />
        </BoxColMap>
      </Container>
    </>
  );
};
