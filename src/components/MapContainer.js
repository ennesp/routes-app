import React, { Component } from 'react';
import Map from './Map';

class MapContainer extends Component{
    render(){
        return(
            <Map
                loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                coords={this.props.coords}
                directions={this.props.children}
            />
        );
    }
};

export default MapContainer;