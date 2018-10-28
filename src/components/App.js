import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import RouteDetail from './RouteDetail';
import './css/App.css';

class App extends Component {
    render(){
        return(
            <div className="app-container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/route/:index" component={RouteDetail} />
                </Switch>
            </div>
        );
    }
}

export default App;