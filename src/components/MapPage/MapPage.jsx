import React, { useState, useEffect } from 'react';
import { SVGMap } from "react-svg-map";
import placeicon from '../../assets/placeicon.png';
import France from "@svg-maps/france.regions";
import "react-svg-map/lib/index.css";
import styled from 'styled-components';

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

/* height: 100vh; */
`

export const MapContainer = styled.div`
width: 800px;
height: 100vh;
`

export const IconLocation = styled.img` 
height: 75px;
width: 75px;
`

const MapPage = () => {
    const [clickedLocation, setClickedLocation] = useState(null)
    const [pointedLocation, setPointedLocation] = useState(null)

    const [freelancers, setFreelancers] = useState([]);
    const [fiverrMeets, setFiverrMeets] = useState([]);

    useEffect(() => {

        const getFreelancers = () => {

            fetch(`http://localhost:8000/api/users/?region=${clickedLocation}`)
                .then(response => {
                    const data = response.json()
                    return data;
                })
                .then((results) => setFreelancers(results));
        }

        const getFiverrMeets = () => {
            fetch(`http://localhost:8000/api/fiverrmeets/?region=${clickedLocation}`)
                .then(response => {
                    const data = response.json()
                    return data;
                })
                .then((results) => setFiverrMeets(results));
        }
        if (clickedLocation) {
            getFreelancers()
            getFiverrMeets()
        }
    }, [clickedLocation])

    const getLocationName = (event) => {
        return event.target.attributes.name.value;
    }

    const handleLocationClick = (event) => {
        const clickedLocation = getLocationName(event);
        setClickedLocation(clickedLocation);
    }

    const handleLocationMouseOver = (event) => {
        const pointedLocation = getLocationName(event);
        setPointedLocation(pointedLocation)
    }

    return (
        <div>

            <FormContainer>
                <div style={{backgroundColor:'#6eb895', width:'100%', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', color:'white'}}>
                <h1>
                    FiverrFriends Map
                </h1>
                
                <IconLocation src={placeicon} />
                <p style={{width:'40%'}}>What if you're about to meet your future collaborator in Bordeaux? Or maybe a new friend?
                Navigate through the map to find your next move! </p>
                </div>
                <h2 style={{padding: '30px'}}>Location : {pointedLocation}</h2>
                <MapContainer>
                    <SVGMap
                        map={France}
                        onLocationClick={handleLocationClick}
                        onLocationMouseOver={handleLocationMouseOver}
                    />
                </MapContainer>
            </FormContainer>

            <h4>Freelancers Around You</h4>{
                (freelancers && freelancers.length) ? (
                    <div>

                        {
                            freelancers.map((freelancer) => <div> {freelancer.name}</div>)
                        }
                    </div>
                ) : (<div> No results </div>)

            }

            <h4>FiverrMeets Around You</h4>{
                (fiverrMeets && fiverrMeets.length) ? (
                    <div>

                        {
                            fiverrMeets.map((fiverrmeet) => <div> {fiverrmeet.name}</div>)
                        }
                    </div>
                ) : (<div> No results </div>)

            }

        </div>
    )
}

export default MapPage;