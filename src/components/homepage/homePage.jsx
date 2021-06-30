import React from 'react';
import { Link } from 'react-router-dom';
import Couple from '../../assets/couple.png';
import Card from '../../assets/Card2.png';
import {
  StyledImage,
  StyledLeftContainer,
  StyledTitle1,
  StyledParagraphe,
  Styledbutton,
  StyledRightContainer,
  StyledMainContainer,
  StyledCardContainer,
  StyledCardImage,
} from '../../styles/styledHomepage';
import { StyledButton } from '../../styles/StyledButtons';

const Homepage = () => {
  return (
    <div>
      <StyledMainContainer>
        <StyledLeftContainer>
          <StyledTitle1>Welcome to the Fiverr Community</StyledTitle1>
          <StyledParagraphe>Get access to upcoming events, exclusive content, the latest and greatest industry news, and more.</StyledParagraphe>
          <Link to="/Connection">
            <StyledButton style={{ width: '100%', fontSize: '25px' }}>Sign in</StyledButton>
          </Link>
        </StyledLeftContainer>
        <StyledRightContainer>
          <StyledImage src={Couple} alt="bureaux" />
        </StyledRightContainer>
      </StyledMainContainer>
      <StyledCardContainer>
        <StyledCardImage src={Card} alt="card presentation" />
      </StyledCardContainer>
    </div>
  );
};

export default Homepage;
