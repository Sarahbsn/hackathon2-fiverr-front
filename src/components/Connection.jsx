import React from 'react';
import { StyledButton } from '../styles/StyledButtons';
import { FormContainer, StyledDivBox, StyledConnection, ButtonContainer, StyledImage } from '../styles/styledConnection';

const Connection = () => {
  return (
    <FormContainer>
      <StyledImage>
        <StyledDivBox>
          <StyledConnection>
            <p>Email</p>
            <input type="text" />
            <p>Password</p>
            <input type="text" />
            <ButtonContainer>
              <StyledButton style={{ width: '10rem' }}>Sign me in!</StyledButton>
            </ButtonContainer>
          </StyledConnection>
        </StyledDivBox>
      </StyledImage>
    </FormContainer>
  );
};

export default Connection;
