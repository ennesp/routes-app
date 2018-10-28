import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            from: '',
            end: '',
            error: false
        }
    }

    // Update state values on input change
    onInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    }

    // Handling form submit
    onFormSubmit = (e) => {
        e.preventDefault();
        const from = this.state.from;
        const to = this.state.end;

        if(from !== '' && to !== ''){
            const route = {
                from: from,
                to: to
            }

            this.props.addRoute(route);
            this.setState({
                from: '', 
                end: '',
                error: false
            });  
        }else{
            this.setState({ error: true });
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} >
                    <input type="text" name="from" className="form-control" placeholder="From" value={ this.state.from } onChange={this.onInputChange} />
                    <input type="text" name="end" className="form-control" placeholder="End" value={ this.state.end } onChange={this.onInputChange} />
                    <button type="submit" className="btn" >Submit</button>
                </form>
                { this.state.error && <p className="error">All fields are required.</p> }
            </div>
        );
    }
}

export default Form;