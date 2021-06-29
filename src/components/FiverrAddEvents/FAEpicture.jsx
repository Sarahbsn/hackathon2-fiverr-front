import styled from 'styled-components';
import { StyledButton } from '../../styles/StyledButtons';
import Party from '../../assets/friends.webp';
import placeicon from '../../assets/placeicon.png'
import adressicon from '../../assets/adressicon.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoxFaePicFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled.img`
  height: 500px;
  padding-right: 5rem;
  padding-top: 5rem;
`;

export const PlaceIcon = styled.img`
height: 70px;
padding-top: 5rem;
` 

export const IconsContainer = styled.div` 
display: flex;
justify-content: space-between;
`

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;

` 

export const FAEpicture = () => {
  return (
    <>
      <Container>
        <BoxFaePicFlex>
          <StyledImg src={Party} alt="" />

          <IconsContainer>
            <ColumnContainer>
          <PlaceIcon src={placeicon} />
          <p>Strasbourg</p>
          </ColumnContainer>
          <ColumnContainer>
          <PlaceIcon src={adressicon} />
          <p>10 patchigue street</p>
          </ColumnContainer>
          </IconsContainer>
          {/* <StyledButton>Contact the event owner</StyledButton>
          <StyledButton>Her/His Events</StyledButton> */}
        </BoxFaePicFlex>
      </Container>
    </>
  );
};
