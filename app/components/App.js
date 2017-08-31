import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            name: 'World'
        };
    }

    render() {
        return (
            <h1>
                Hello <span className="colorful-text">{this.state.name}</span>!
            </h1>
        );
    }
}