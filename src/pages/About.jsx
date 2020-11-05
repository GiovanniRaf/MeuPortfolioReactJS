import React, { Component } from 'react';
import imagem from "../images/perfil.jpeg";
import "./About.css";

class About extends Component{
    render() {
        return (
            <div>
                <div className="aboutContent">
                    <h1>Sobre mim</h1>
                    <div>
                        <img src={imagem}/>
                    </div>
                    <div className="Curriculo">
                        <p>Formado no curso técnico de 
                            Mecatrônica pelo Colégio Técnico Bento Quirino.</p>
                        <p>Cursando graduação em Análise 
                            e Desenvolvimento de sistemas na Fatec Campinas.</p>
                        <p>Atuação durante 1 ano na loja de componentes eletrônicos Cinestec.</p>
                        
                        <br/>
                        <p>Ferramentas que costumo utilizar:</p>
                        <li>Windows e Linux Ubuntu;</li>
                        <li>IntelliJ (Java) - Nível intermediário;</li>
                        <li>VSCode (C, PHP, Javascript) - Nível iniciante/intermediário.</li>
                        
                        <br/>
                        <p>Estudando:</p>
                        <li>Github;</li>
                        <li>Java;</li>
                        <li>Python;</li>
                        <li>JavaScript (ReactJS);</li>
                        <li>C;</li>
                        <li>MySQL.</li>
                    </div>
                </div>
            </div>
        
        );
    }
    
}

export default About;