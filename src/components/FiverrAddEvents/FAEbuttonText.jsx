import styled from 'styled-components';
import { StyledButton } from '../../styles/StyledButtons';
import logofriends from '../../assets/icon-friends.png';


export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
border-radius: 5px;
  background-color: #6eb895;
  color: white;
  height: auto;
 text-align: center;
 flex-direction: column;
 align-items: center;
`;

export const EventDesc = styled.p`
  display: flex;
  width: 40%;
  line-height: 1.5rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const FriendsIcon = styled.img` 
height: 5rem;
`

export const FaebuttonText = (props) => {
  return (
    <>
      <ContainerText>
        <h2>
          Hello and welcome to my Fiverr Meet!
        </h2>
        <FriendsIcon src={logofriends} alt="icon" />
        <EventDesc>
          {props.description}
        </EventDesc>
      </ContainerText>

    </>
  );
};
