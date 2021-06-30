import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  height: 45%;
  width: 70%;
  padding: 65px;
  justify-content: space-between;
  margin-left: 200px;
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

export const ProfileMapText = (props) => {
  return (
    <>
      <Container>
        <StyledTitleInfo>Firstname: </StyledTitleInfo>
        <p>{props.firstname}</p>
        <StyledTitleInfo> Lastname:</StyledTitleInfo>
        <p>{props.name}</p>
        <StyledTitleInfo>Skill:</StyledTitleInfo>
        <p>{props.skill}</p>
        <StyledTitleInfo>Live in:</StyledTitleInfo>
        <p>{props.ville} / {props.region}</p>

        <StyledBoxGoogleMap
          title={props.ville}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41792.62034245705!2d6.1613866973156055!3d49.104903895785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1b6074b6a9%3A0x596be4b635bba669!2sMetz!5e0!3m2!1sfr!2sfr!4v1624972227695!5m2!1sfr!2sfr"
        />

      </Container>
    </>
  );
};
