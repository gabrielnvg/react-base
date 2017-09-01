import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();
        
        this.state = {
            name: 'World'
        };
    }

    render() {
        return (
            <div className="component--App">
                Hello <span className="colorful-text">{this.state.name}</span>!
            </div>
        );
    }
}