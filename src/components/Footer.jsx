import styled from 'styled-components';
import insta from '../assets/instagram.png';
import pint from '../assets/pinterest.png';
import face from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import fiverr from '../assets/Fiverr.png';

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  border-top: 1px solid black;
  height: 150px;
  width: 80%;
  margin-left: 150px;
  position: fixed;
  left: 0;
  bottom: 0;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  margin-right: 25px;
`;

export const LogoAndText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  margin-left: 25px;
`;

export const StyledImg = styled.img`
  width: 25px;
  height: 25px;
`;
export const StyledLogo = styled.img`
  height: 30px;
  width: auto;
`;

export default function Footer() {
  return (
    <>
      <ContainerFooter>
        <LogoAndText>
          <StyledLogo src={fiverr} alt="" />
          <p>Fiverr International Ltd. 2020</p>
        </LogoAndText>
        <ImgContainer>
          <StyledImg src={face} alt="" />
          <StyledImg src={twitter} alt="" />
          <StyledImg src={youtube} alt="" />
          <StyledImg src={pint} alt="" />
          <StyledImg src={insta} alt="" />
        </ImgContainer>
      </ContainerFooter>
    </>
  );
}
