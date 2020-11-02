import React, { Component } from 'react';
import './Calculator.css';

//Pure Component or Class Component
class Calculator extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            valorAInput: "",
            valorBInput: "",
            resultado: "",
        }
    }

  render() {
    const { valorAInput, valorBInput, resultado} = this.state;

    return(
        <div>
            <div className="fundo">
                <h1>Calculator</h1>
                <div className="grupo"> 
                <div id="DivA">
                    Valor 1:
                    <br/>
                    <input type="number" value={valorAInput} onChange={this.handleValorAFieldChange} />
                </div>
                <div id="DivB">
                    Valor 2:
                    <br/>
                    <input type="number" value={valorBInput} onChange={this.handleValorBFieldChange} />
                </div>
                </div>
                
                <br/><br/><br/><br/>
                
                <button className="button" value="+" onClick={this.handleButtonClick}>+</button>
                <button className="button" value="-" onClick={this.handleButtonClick}>-</button>
                <button className="button" value="*" onClick={this.handleButtonClick}>*</button>
                <button className="button" value="/" onClick={this.handleButtonClick}>/</button>
                <button className="buttonRed" value="C" onClick={this.handleButtonClick}>C</button>

                <br/><br/>

                <div id="Result">
                    Resultado: {resultado}
                </div>
                <br/>
            </div>
        </div>
    );
  }

  handleButtonClick = (arg) => {
    const operation = arg.target.value;
    const { valorAInput, valorBInput } = this.state;

    switch(operation){
        case "+":
            this.setState({
            resultado: parseFloat(valorAInput) + parseFloat(valorBInput)
            })
            break;
        case "-":
            this.setState({
            resultado: parseFloat(valorAInput) - parseFloat(valorBInput)
            })
            break;
        case "*":
            this.setState({
            resultado: parseFloat(valorAInput) * parseFloat(valorBInput)
            })
            break;
        case "/":
            this.setState({
            resultado: parseFloat(valorAInput) / parseFloat(valorBInput)
            })
            break;
        case "C":
            this.setState({
            valorAInput: "",
            valorBInput: "",
            resultado: ""
            })
        break;
        default:
            console.log("Something is wrong :p");
    }
  }

    handleValorAFieldChange = (arg) => {
        this.setState({
            valorAInput: arg.target.value
        })
    }

    handleValorBFieldChange = (arg) => {
        this.setState({
            valorBInput: arg.target.value
        })
    }
}

export default Calculator;