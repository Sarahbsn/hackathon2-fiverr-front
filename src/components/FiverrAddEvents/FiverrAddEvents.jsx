import styled from 'styled-components';
import { FAEpicture } from './FAEpicture';
import { FaepmapText } from './FAEmapText';
import { FaebuttonText } from './FAEbuttonText';

export const ContainerAddEvents = styled.div`
  height: 1300px;
  width: 100%;
`;

export default function FiverrAddEvents() {
  return (
    <>
      <ContainerAddEvents>
        <FAEpicture />
        <FaepmapText />
        <FaebuttonText />
      </ContainerAddEvents>
    </>
  );
}
