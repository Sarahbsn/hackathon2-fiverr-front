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
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [registerMessage, setRegisterMessage] = useState('');
  const [connMessage, setConnMessage] = useState('');

  const register = () => {
    axios.post('http://localhost:8000', {
      email: registerEmail,
      password: registerPassword,
    }, { withCredentials: true }).then((res) => setRegisterMessage(res));
  }

  return (
    <FormContainer>
      <h3>Register</h3>
      <form>
        <p>Email</p>
        <input type="text" onChange={(event) => setRegisterEmail(event.target.value)}/>
        <p>Password</p>
        <input type="text" onChange={(event) => setRegisterPassword(event.target.value)}/>
        <ButtonContainer onClick={() => register()}>
          <StyledButton>Sign me up!</StyledButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default Connection;