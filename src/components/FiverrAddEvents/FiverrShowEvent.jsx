import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FAEpicture } from './FAEpicture';
import axios from "axios";


import { FaebuttonText } from './FAEbuttonText';

export const ContainerAddEvents = styled.div`
  height: 110vh;
`;

export default function FiverrAddEvents(props) {

  const [event, setEvent] = useState(null);

  const { id } = props.match.params;

  useEffect(() => {
    console.log(id)
    const getFiverrMeet = () => {
      axios.get(`http://localhost:8000/api/fiverrmeets/${id}`)
        .then(res => {
          setEvent(res.data);
          console.log(res)
        })
    }
    getFiverrMeet()

  }, [id])
  console.log(event)

  return (
    <>
      {
        event &&
        <ContainerAddEvents>
          <FaebuttonText description={event.description} />
          <FAEpicture image={event.image} ville={event.ville} region={event.region} author_id={event.author_id} />
        </ContainerAddEvents>
      }
    </>
  );
}
