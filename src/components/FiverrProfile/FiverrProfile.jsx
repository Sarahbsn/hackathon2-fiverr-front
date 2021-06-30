import { useState, useEffect } from 'react';
import axios from 'axios';
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

export default function FiverrProfile(props) {

  const [user, setUser] = useState(null);

  const { id } = props.match.params;

  useEffect(() => {
    console.log(id)
    const getUserProfile = () => {
      axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => {
          setUser(res.data);
          console.log(res)
        })
    }
    getUserProfile()

  }, [id])
  console.log(user)
  return (
    <>
      {
        user &&
        <ContainerProfile>
          <ProfilePhoto avatar={user.avatar} />
          <ProfileMapText firstname={user.firstname} name={user.name} ville={user.ville} region={user.region} skill={user.skill} />
          <ProfileButtonText /* desc={user.description} */ />
        </ContainerProfile>
      }
    </>
  );
}
