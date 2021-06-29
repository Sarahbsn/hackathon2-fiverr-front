import styled from 'styled-components';
import  { CMEtextMap }  from './CMEtextMap';
import { ProfileButtonText } from '../FiverrCreateMyEvents/CMEbuttonDesc';
import ProfilPhoto from './CMEphoto';

export const ContainerProfile = styled.div`
  height: 1300px;
  width: 100%;
`;

export const StyledPhoto = styled.img`
  width: 400px;
  height: 300px;
`;

export const CreateMyEvent = () => {
  return (
    <>
      <ContainerProfile>
        <ProfilPhoto />
        <CMEtextMap />
        <ProfileButtonText />
      </ContainerProfile>
    </>
  );
};
