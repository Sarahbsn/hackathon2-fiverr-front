import styled from 'styled-components';
import odiles from '../../assets/odiles.jpg';
import { Container, BoxFaePicFlex } from '../FiverrAddEvents/FAEpicture';

export const ContainerPhoto = styled.div`
  height: 335px;
  width: 100%;
`;

export const StyledPhoto = styled.img`
  width: 350px;
  height: 300px;
  border-radius: 50%;
`;

export const TitleEvent = styled.h2`
  text-decoration: underline #2dbe73;
`;

export default function ProfilPhoto() {
  return (
    <>
      <ContainerPhoto>
        <Container>
          <BoxFaePicFlex>
            <StyledPhoto src={odiles} alt="" />
            <TitleEvent>My event</TitleEvent>
          </BoxFaePicFlex>
        </Container>
      </ContainerPhoto>
    </>
  );
}
