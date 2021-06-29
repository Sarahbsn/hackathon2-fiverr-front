import styled from 'styled-components';
import party from '../../assets/party.jpg';
import petanque from '../../assets/petanque.jpg';
import picnic from '../../assets/picnic.jpeg';

export const ContainerBody = styled.div`
  background-color: whitesmoke;
  margin-right: 5%;
  padding: 25px;
  width: 300px;
  height: 300px;
`;

export const ContainerForCards = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px;
`;

export const TitleEvent = styled.h2`
  display: flex;
  justify-content: center;
  border: solid 1px;
`;

export const ImgEvent = styled.img`
  width: 100%;
  height: 180px; ;
`;

export const TextEvent = styled.p`
  display: flex;
  justify-content: center;
`;

export const EventCard = () => {
  return (
    <>
      <ContainerForCards>
        <ContainerBody>
          <TitleEvent>Halloween</TitleEvent>
          <ImgEvent src={party} alt="" />
          <TextEvent>Night event with team mates</TextEvent>
        </ContainerBody>
        <ContainerBody>
          <TitleEvent>Petanque</TitleEvent>
          <ImgEvent src={petanque} alt="" />
          <TextEvent>Petanque event with team mates</TextEvent>
        </ContainerBody>
        <ContainerBody>
          <TitleEvent>Pic-Nic</TitleEvent>
          <ImgEvent src={picnic} alt="" />
          <TextEvent>Pic-nic with team mates</TextEvent>
        </ContainerBody>
      </ContainerForCards>
    </>
  );
};
