import React, { Component } from 'react';
import MapContainer from './MapContainer';
import { Link } from 'react-router-dom';
import { DirectionsRenderer } from 'react-google-maps';

class RouteDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            directions: null,
            distance: '',
            duration: '',
            route: null,
            error: false
        }
    }

    // Get selected route from localStorage, check directions and display a route or show an error
    componentDidMount = () => {
        const index = this.props.match.params.index;
        const storedRoutes = JSON.parse(localStorage.getItem('routes'));

        if(storedRoutes && storedRoutes.length > 0){
            const route = storedRoutes[index];
            if(route){
                let directionsService;
                directionsService = new window.google.maps.DirectionsService();

                var request = {
                    origin: route.from,
                    destination: route.to,
                    travelMode: 'DRIVING'
                };

                directionsService.route(request, (response, status) => {
                    if (status === 'OK') {
                        this.setState({
                            directions: response,
                            distance: response.routes[0].legs[0].distance.text,
                            duration: response.routes[0].legs[0].duration.text,
                            route: route
                        });
                    }else{
                        this.setState({error: true});
                    }
                });
            }else{
                this.setState({error: true});
            }
            
        }
    }

    render(){
        const route = this.state.route;
        let start, end;

        if(route){
            start = route.from;
            end = route.to;
        }else{
            return (
                <div>
                    <Link to="/" className="btn orange">Go Back</Link>
                    <div>
                        <br/>
                        { this.state.error === true ? <p className="error">Can't find route.</p> : "Loading..." }
                    </div>
                </div>
            );
        }

        const title = `#1 ${start} - ${end}`;

        return(
            <div className="route-detail">
                <Link to="/" className="btn orange">Go Back</Link>
                <h2 className="route-title">{ title }</h2>
                <MapContainer
                    defaultZoom={7}
                >
                    { this.state.directions && <DirectionsRenderer directions={ this.state.directions } /> }
                </MapContainer>

                { this.state.distance && <div className="route-info">{this.state.distance}. About {this.state.duration}</div> }
            </div>
        );
    }
}

export default RouteDetail;