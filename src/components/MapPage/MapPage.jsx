import { React, useState } from 'react';
import { Flex, FlexCol } from '../../styles/GenericsContainer';
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

    const getLocationId = (event) => {
        return event.target.id;
    }

    const handleLocationClick = (event) => {
        const clickedLocation = getLocationName(event);
        /*         const clickedLocationId = getLocationId(event); */
        setClickedLocation(clickedLocation);
        /*         window.open(this.links[clickedLocationId], '_blank'); */
    }

    return (
        <div>

            <FormContainer>
                <h1>
                    FiverrFriends Map
                </h1>
                <h2>Location : {clickedLocation}</h2>
                <MapContainer>
                    <SVGMap
                        map={France}
                        onLocationClick={handleLocationClick}
                    />
                </MapContainer>
            </FormContainer>

        </div>
    )
}

export default MapPage;