import React from 'react';
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
  return (
    <FormContainer>
      <form>
        <p>Email</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />
        <ButtonContainer>
          <StyledButton>Sign me in!</StyledButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default Connection;
