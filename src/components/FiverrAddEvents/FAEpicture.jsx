import styled from 'styled-components';
import { StyledButton } from '../../styles/StyledButtons';
import friend from '../../assets/friends.webp';

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
  width: 600px;
  height: auto;
`;

export const FAEpicture = () => {
  return (
    <>
      <Container>
        <BoxFaePicFlex>
          <StyledImg src={friend} alt="" />
          <StyledButton>Contact the event owner</StyledButton>
        </BoxFaePicFlex>
      </Container>
    </>
  );
};
