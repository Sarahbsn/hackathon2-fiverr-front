import { useState } from "react";
import axios from "axios";
import { StyledButton } from '../styles/StyledButtons';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 3rem;
`;

const Connection = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerMessage, setRegisterMessage] = useState('');
  const [connMessage, setConnMessage] = useState('');

  const login = () => {
    axios.post('http://localhost:8000', {
      email: loginEmail,
      password: loginPassword,
    }, { withCredentials: true }).then((res) => setConnMessage(res));

  }

  return (
    <FormContainer>
      <h3>Login</h3>
      <form>
        <p>Email</p>
        <input type="text" onChange={(event) => setLoginEmail(event.target.value)}/>
        <p>Password</p>
        <input type="text" onChange={(event) => setLoginPassword(event.target.value)}/>
        <ButtonContainer onClick={() => login()}>
          <StyledButton>Sign me in!</StyledButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default Connection;
