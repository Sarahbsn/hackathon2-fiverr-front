import styled from 'styled-components';
import { StyledButton } from '../../styles/StyledButtons';
import { Container, BoxFaePicFlex } from '../FiverrAddEvents/FAEpicture';

export const ContainerProfile = styled.div`
  height: 335px;
  width: 100%;
`;

export const StyledPhoto = styled.img`
width: 400px;
height: 300px;
`;

export default function ProfilPhoto(props) {
  return (
    <>
      <ContainerProfile>
        <Container>
          <BoxFaePicFlex>
            <StyledPhoto src={props.avatar} alt="" />
            <StyledButton>Contact Me</StyledButton>
          </BoxFaePicFlex>
        </Container>
      </ContainerProfile>
    </>
  );
}
