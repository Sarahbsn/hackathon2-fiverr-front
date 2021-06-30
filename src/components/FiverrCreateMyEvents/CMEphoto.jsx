import styled from 'styled-components';
import odiles from '../../assets/odiles.jpg';
import { Container } from '../FiverrAddEvents/FAEpicture';

export const ContainerPhoto = styled.div`
  height: 380px;
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

export const BoxPhotoTitleContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function ProfilPhoto() {
  return (
    <>
      <ContainerPhoto>
        <Container>
          <BoxPhotoTitleContent>
            <StyledPhoto src={odiles} alt="" />
            <TitleEvent>Baptiste</TitleEvent>
          </BoxPhotoTitleContent>
        </Container>
      </ContainerPhoto>
    </>
  );
}
