import styled from 'styled-components';
import region from '../../assets/region.png';
import ville from '../../assets/ville.png';
import name from '../../assets/name.png';
import skills from '../../assets/skills.png';

export const Container = styled.div`
  display: flex;
  height: 10%;
  width: 65%;
  padding: 45px;
  justify-content: space-between;
  margin-left: 370px;
`;

export const StyledBoxGoogleMap = styled.iframe`
  width: 500px;
  height: 500px;
  padding: 35px;
`;

export const StyledTitleInfo = styled.h3`
  font-size: 25px;
  width: 150px;
  margin-left: 325px;
  margin: 130px;
  text-decoration: underline #2dbe73;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PimpIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const ProfileMapText = (props) => {
  return (
    <>
      <Container>
        <ImgContainer>
          <PimpIcon src={name} />
          <p>{props.firstname}</p>
          <p>{props.lastname}</p>
        </ImgContainer>
        <ImgContainer>
          <PimpIcon src={skills} />
          <p>{props.skill}</p>
        </ImgContainer>
        <ImgContainer>
          <PimpIcon src={ville} />
          <p>
            {props.ville} / {props.region}
          </p>
        </ImgContainer>
      </Container>
    </>
  );
};
