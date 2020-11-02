import React, { Component } from 'react';
import imagem from "../images/perfil.jpeg";

class About extends Component{
    render() {
        return (
            <div>
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
                    <p>Ferramentas que costumo utilizar:</p>
                    <ul>
                        <li>Windows e Linux Ubuntu;</li>
                        <li>IntelliJ (Java) - Nível intermediário;</li>
                        <li>VSCode (C, PHP, Javascript) - Nível iniciante/intermediário.</li>
                    </ul>
                    <p>Estudando:</p>
                    <ul>
                        <li>Github;</li>
                        <li>Java;</li>
                        <li>Python;</li>
                        <li>JavaScript (ReactJS);</li>
                        <li>C;</li>
                        <li>MySQL.</li>
                    </ul>
                </div>
            </div>
        );
    }
    
}

export default About;