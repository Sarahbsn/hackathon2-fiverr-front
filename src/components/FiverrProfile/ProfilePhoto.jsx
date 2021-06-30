import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../styles/StyledButtons';
import { Container, BoxFaePicFlex } from '../FiverrAddEvents/FAEpicture';

export const ContainerProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 335px;
  width: 100%;
`;

export const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPhoto = styled.img`
  width: 350px;
  height: 300px;
  border: solid 7px black;
  border-radius: 50%;
`;

export const WidhtButton = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ProfilPhoto(props) {
  return (
    <>
      <ContainerProfile>
        <Container>
          <BoxFaePicFlex>
            <ContainerCol>
              <StyledPhoto src={props.avatar} alt="" />
              <WidhtButton>
                <Link to="/conversation">
                  <StyledButton>Contact Me</StyledButton>
                </Link>
              </WidhtButton>
            </ContainerCol>
          </BoxFaePicFlex>
        </Container>
      </ContainerProfile>
    </>
  );
}
