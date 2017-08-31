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
            <div className="component--App">
                Hello <span className="colorful-text">{this.state.name}</span>!
            </div>
        );
    }
}