import styled from 'styled-components';
import ProfilePhoto from './ProfilePhoto';
import { ProfileMapText } from './ProfileMapText';
import { ProfileButtonText } from './ProfileButtonText';

export const ContainerProfile = styled.div`
  height: 1300px;
  width: 100%;
`;

export const StyledPhoto = styled.img`
  width: 400px;
  height: 300px;
`;

export default function FiverrProfile() {
  return (
    <>
      <ContainerProfile>
        <ProfilePhoto />
        <ProfileMapText />
        <ProfileButtonText />
      </ContainerProfile>
    </>
  );
}
