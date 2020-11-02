import React, { Component } from 'react';
import "./Counter.css";

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            contador: 0,
        };
    }

    decrementar() {
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    incrementar() {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    render() {
        return (
            <div>
                <h1>Contador</h1>
                <h1>{this.state.contador}</h1>
                <div>
                    <button className="btnCt" onClick={this.decrementar.bind(this)}>-</button>
                    <button className="btnCt" onClick={this.incrementar.bind(this)}>+</button>
                </div>
            </div>
        );
    }
    
}

export default Counter;