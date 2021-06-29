import styled from 'styled-components';
import { EventCard } from './EventCard';

export const ContainerPersonalRecentEvts = styled.div`
  margin-right: 5%;
  width: 100%;
  height: 80%;
`;

export const TitleCreateEvent = styled.h2`
  padding: 15px;
  margin-left: 15px;
  text-decoration: underline #2dbe73;
`;

export const PersonalRecentEvts = () => {
  return (
    <>
      <ContainerPersonalRecentEvts>
        <TitleCreateEvent>My events</TitleCreateEvent>
        <EventCard />
        <TitleCreateEvent>My events</TitleCreateEvent>
        <EventCard />
      </ContainerPersonalRecentEvts>
    </>
  );
};
