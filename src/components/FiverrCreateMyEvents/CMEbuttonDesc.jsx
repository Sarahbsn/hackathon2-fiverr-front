import styled from 'styled-components';
import { StyledButton } from '../../styles/StyledButtons';
import { ContainerText, EventDesc, ContainerButton } from '../FiverrAddEvents/FAEbuttonText';
import place from '../../assets/place.png'
import hours from '../../assets/hours.png'
import date from '../../assets/date.png'

export const EventDescText = styled.p`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  width: 75%;
  background-color: #6eb895;
  color: white;
  height: 250px;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerAlign = styled.div`
display: flex;
height: 280px;
align-items: center;
justify-content: space-between;
margin-left: 25%;
width: 50%;
`;

export const ImgContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const PimpIcon = styled.img`
width: 50px;
height: 50px;
`;

export const ProfileButtonText = () => {
  return (
    <>
      <ContainerText>
        <EventDescText>
          Hi I'm Marry, I'm here for found collaration for my project, also I created some events abouts Coding Front-End. I love music and costume
          cuir party and i love meet some new freelancer if you want join for create that will be with a great pleasure.
        </EventDescText>
      </ContainerText>
      <ContainerAlign>
      <ImgContainer>
      <PimpIcon src={place}/>
      <p>Paris</p>
      </ImgContainer>
      <ImgContainer>
      <PimpIcon src={date}/>
      <p>2021-06-29</p>
      </ImgContainer>
      <ImgContainer>
      <PimpIcon src={hours}/>
      <p>8:30 PM</p>
      </ImgContainer>
      </ContainerAlign>
      <ContainerButton>
        <StyledButton>Create an event</StyledButton>
      </ContainerButton>
    </>
  );
};
