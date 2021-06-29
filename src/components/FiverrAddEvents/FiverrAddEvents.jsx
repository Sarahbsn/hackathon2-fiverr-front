import styled from 'styled-components';
import { FAEpicture } from './FAEpicture';

import { FaebuttonText } from './FAEbuttonText';

export const ContainerAddEvents = styled.div`
  height: 110vh;
`;

export default function FiverrAddEvents() {
  return (
    <>
      <ContainerAddEvents>
      <FaebuttonText />
        <FAEpicture />
       
        
      </ContainerAddEvents>
    </>
  );
}
