import styled from 'styled-components';
import PersonalPhoto from './PersonalPhoto';
import { PersonalRecentEvts } from './PersonalRecentEvts';

export const ContainerProfile = styled.div`
  display: flex;
  height: 1300px;
  width: auto;
`;

export const StyledPhoto = styled.img`
  width: 400px;
  height: 300px;
`;

export default function FiverrProfile() {
  return (
    <>
      <ContainerProfile>
        <PersonalPhoto />
        <PersonalRecentEvts />
      </ContainerProfile>
    </>
  );
}
