import styled from 'styled-components';
import marie from '../../assets/marie.jpg';
import { StyledButton } from '../../styles/StyledButtons';
import { Container, BoxFaePicFlex, StyledImg } from '../FiverrAddEvents/FAEpicture';

export const ContainerProfile = styled.div`
  height: 335px;
  width: 100%;
`;

export const StyledPhoto = styled.img`
width: 400px;
height: 300px;
`;

export default function ProfilPhoto() {
    return (
      <>
        <ContainerProfile>
          <Container>
            <BoxFaePicFlex>
              <StyledPhoto src={marie} alt="" />
              <StyledButton>Contact Me</StyledButton>
            </BoxFaePicFlex>
          </Container>
        </ContainerProfile>
      </>
    );
  }
  