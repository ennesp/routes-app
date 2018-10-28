import React, { Component } from 'react';
import Form from './Form';
import RouteList from './RouteList';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            routes: [],
        }
    }

    componentDidMount = () => {
        // Retrieve routes from localStorage
        const storedRoutes = JSON.parse(localStorage.getItem('routes'));
        if(storedRoutes && storedRoutes.length > 0){
            this.setState({ routes: storedRoutes });
        }
    }

    // Adding new route
    addNewRoute = (route) => {
        const routes = this.state.routes;
        routes.push(route);
        this.setState({ routes: routes });

        localStorage.setItem('routes', JSON.stringify(routes));
    }

    // Deleting a route
    deleteRoute = (i) => {
        const routes = this.state.routes;
        routes.splice(i, 1);
        this.setState({routes: routes});
        localStorage.setItem('routes', JSON.stringify(routes));
    }

    render(){
        return(
            <div>
                <Form addRoute={ this.addNewRoute } />
                <RouteList routes={ this.state.routes } deleteRoute={ this.deleteRoute } />

                <div>You have { this.state.routes.length } route(s).</div>
            </div>
        );
    }
}

export default Home;