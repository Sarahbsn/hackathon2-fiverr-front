import { React, useState } from 'react';
import { SVGMap } from "react-svg-map";
import France from "@svg-maps/france.regions";
import "react-svg-map/lib/index.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh
`
export const MapContainer = styled.div`
width: 800px;
height: 100vh
`

const MapPage = () => {
    const [clickedLocation, setClickedLocation] = useState(null)
    const [pointedLocation, setPointedLocation] = useState(null)


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
                <h1>
                    FiverrFriends Map
                </h1>
                <h2>Location : {pointedLocation}</h2>
                <MapContainer>
                    <SVGMap
                        map={France}
                        onLocationClick={handleLocationClick}
                        onLocationMouseOver={handleLocationMouseOver}
                    />
                </MapContainer>
            </FormContainer>

        </div>
    )
}

export default MapPage;