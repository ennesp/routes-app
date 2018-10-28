import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";

const Map = withGoogleMap((props) => {
        let location;

        if(!props.location){
            location = {
                lat: 44.63,
                lng: 28.77
            };
        }

        return(
            <GoogleMap 
                defaultZoom={7}
                defaultCenter={location}
            >
                {props.directions}
            </GoogleMap>
        );
    }
);

export default Map;