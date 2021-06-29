import styled from 'styled-components';
import gilbert from '../../assets/gilbert';

export const ContainerProfilePersonal = styled.div`
  width: auto;
  margin-left: 65px;
`;

export const Container = styled.div`
  display: flex;
  background-color: whitesmoke;
  justify-content: center;
  padding: 10px;
  width: 70%;
  height: 405px;
  border: solid 2px gray;
  border-bottom: hidden;
`;
export const Container2 = styled.div`
  display: flex;
  padding: 10px;
  width: 70%;
  height: 235px;
  border: solid 2px gray;
  background-color: whitesmoke;
  border-top: hidden;
`;

export const ContainerTitlePhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 390px;
`;

export const StyledPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const TitleName = styled.h2``;

export const Proverb = styled.p``;

export const ButtonConvers = styled.button`
  color: #ffffff;
  background-color: #039053;
  width: 35%;
  height: 40px;
  border-radius: 10px;
  font-weight: 900;
  font-size: 16px;
  border: solid 1px;
  cursor: pointer;
  &:hover {
    background-color: #005f1e;
    color: white;
    transition: 0.4s;
  }
`;

export const GreyLine = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: solid 2px gray;
  height: 60px;
  width: 380px;
`;

export const ContainerDescCol = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 300px;
  height: 230px;
`;
export const ContainerDescCol2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  height: auto;
  width: 300px;
  height: 230px;
`;

export default function ProfilPhoto() {
  return (
    <>
      <ContainerProfilePersonal>
        <Container>
          <ContainerTitlePhoto>
            <StyledPhoto src={gilbert} alt="" />
            <TitleName>Gilbert Jenkins</TitleName>
            <Proverb>A proud mind and a beggar's purse, agree ill together.</Proverb>
            <GreyLine>
              <ButtonConvers>Conversation</ButtonConvers>
            </GreyLine>
          </ContainerTitlePhoto>
        </Container>
        <Container2>
          <ContainerDescCol>
            <h3>From</h3>
            <h3>Member since</h3>
            <h3>Avg response Time</h3>
            <h3>Last activity</h3>
          </ContainerDescCol>
          <ContainerDescCol2>
            <h3>India</h3>
            <h3>March 2018</h3>
            <h3>2 hours</h3>
            <h3>12 min</h3>
          </ContainerDescCol2>
        </Container2>
      </ContainerProfilePersonal>
    </>
  );
}
