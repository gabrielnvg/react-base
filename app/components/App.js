import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: 'World'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div className="component--App">
                <div>
                    <input type="text" placeholder="Your name here" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    Hello <span className="colorful-text">{this.state.name}</span>!
                </div>
            </div>
        );
    }
}