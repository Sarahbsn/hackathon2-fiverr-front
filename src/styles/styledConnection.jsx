import styled from 'styled-components';
import Portrait from '../assets/portrait.jpg';

export const FormContainer = styled.div`
  height: 80vh;
`;

export const StyledDivBox = styled.div`
  padding-top: 8%;
  height: 100%;
  width: 100%;
`;

export const StyledImage = styled.div`
  background-image: url(${Portrait});
  background-repeat: no-repeat;
  width: 100%;
  height: 45rem;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const StyledConnection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: white;
  border-radius: 10%;
  margin-left: 15%;
  padding-top: 3%;
  width: 20%;
  height: 45%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;
