import styled from 'styled-components';
import { StyledButton } from '../../styles/StyledButtons';
import Party from '../../assets/friends.webp';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoxFaePicFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 700px;
  height: auto;
`;

export const FAEpicture = () => {
  return (
    <>
      <Container>
        <BoxFaePicFlex>
          <StyledImg src={Party} alt="" />
          <StyledButton>Contact the event owner</StyledButton>
        </BoxFaePicFlex>
      </Container>
    </>
  );
};
