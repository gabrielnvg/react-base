import React, { Component } from 'react';

export default class ComponenteTeste extends Component {
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

    //BEGIN - Life Cycle functions
    componentWillMount() {
        console.log('Componente prestes a ser renderizado no DOM!');
    }
  
    componentDidMount() {
        console.log('Componente foi renderizado no DOM!');
    }
  
    componentWillReceiveProps(newProps) {    
        console.log('Componente prestes a receber novas props!');
    }
  
    shouldComponentUpdate(newProps, newState) {
        console.log('Componente prestes a ser atualizado, esta funcao retorna true ou false para permitir ou nao a renderizacao da atualizacao!');
        return true;
    }
  
    componentWillUpdate() {
        console.log('Componente prestes a ser alterado!');
    }
  
    componentDidUpdate() {
        console.log('Componente foi alterado!');
    }
  
    componentWillUnmount() {
        console.log('Componente prestes a ser removido do DOM!');
    }
    //END - Life Cycle functions

    render() {
        return (
            <div className="component--ComponenteTeste">
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