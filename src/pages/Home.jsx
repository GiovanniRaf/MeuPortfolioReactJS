import React, { Component } from 'react';
import "./Home.css";

class Home extends Component{
    render() {
        return(
            <div>
                <div className="banner-text">
                    <h2>Bem-Vindo ao meu portfólio!</h2>
                    <h4>Acesse as aplicações ao lado clicando nelas.</h4>
                </div>
                <div className="animation-area">
                    <ul className="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        );
    }
    
}

export default Home;