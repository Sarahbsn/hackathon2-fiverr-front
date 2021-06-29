import styled from 'styled-components';
import { StyledButton } from '../../styles/StyledButtons';

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  border: solid 3px #2dbe73;
  background-color: #c0c0c0;
  width: 65%;
  height: auto;
  margin-left: 300px;
`;

export const EventDesc = styled.p`
  display: flex;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const FaebuttonText = () => {
  return (
    <>
      <ContainerText>
        <EventDesc>
          Hello, welcome to my event! Everyone is welcome to participate in the picnic, please have a good mood and eat and drink! Thank you, you are
          a magical community!
        </EventDesc>
      </ContainerText>
      <ContainerButton>
        <StyledButton>Her Event</StyledButton>
      </ContainerButton>
    </>
  );
};
