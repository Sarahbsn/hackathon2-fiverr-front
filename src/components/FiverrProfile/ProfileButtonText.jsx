import { StyledButton } from '../../styles/StyledButtons';
import { ContainerText, EventDesc, ContainerButton } from '../FiverrAddEvents/FAEbuttonText';

export const ProfileButtonText = (props) => {
  return (
    <>
      <ContainerText>
        <EventDesc>
          {props.desc}
        </EventDesc>
      </ContainerText>
      <ContainerButton>
        <StyledButton>Her/His Event</StyledButton>
      </ContainerButton>
    </>
  );
};
