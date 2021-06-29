import styled from 'styled-components';

export const FiverrMeetCardHeader = ({ name, image }) => {
  return(<div>
    <h3>Coucou</h3>
    <h4>{name}</h4>
    <img src={image} alt="" />
  </div>);
};

export const FiverrMeetCardBody = ({ domaine, region, text, date }) => {
  return(<div>
    <p>{text}</p>
    <div>{domaine}</div>
    <div>{region}</div>
    <div>{date}</div>
  </div>);
};

export const FiverrMeetCardFooter = ({ author }) => {
  return(<div>
    <div>{author}</div>
  </div>);
};

export default function FiverrMeetCard({ name, domaine, region, text, author, image, date }) {
  return (
    <div>
      Coucou
      <FiverrMeetCardHeader name={name} image={image} />
      <FiverrMeetCardBody domaine={domaine} region={region} text={text} />
      <FiverrMeetCardFooter author={author} />
    </div>
  );
}
