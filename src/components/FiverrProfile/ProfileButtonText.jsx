import styled from 'styled-components';
import { StyledButton } from '../../styles/StyledButtons';
import { ContainerText, EventDesc, ContainerButton } from '../FiverrAddEvents/FAEbuttonText';

export const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileButtonText = (props) => {
  return (
    <>
      <ContainerCol>
        <ContainerText>
          <EventDesc>{props.desc}</EventDesc>
        </ContainerText>
        <ContainerButton>
          <StyledButton>Her/His Event</StyledButton>
        </ContainerButton>
      </ContainerCol>
    </>
  );
};
