import React from 'react';
import './Root.css';
import Home from "./pages/Home";
import Calculator from "./calculator/Calculator";
import Counter from "./pages/Counter";
import About from "./pages/About";

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";


//Functional Component or Stateless Component
const App = (props) => {

  return (
    <div>
      <header><h1 id="tituloH1">Giovanni Rafael Mota</h1></header>
      <div className="main">
        <Router>
          <div className="Esquerda">
            <nav>
                <Link to="/"><button><span>Home</span></button></Link>
                <Link to="/calculator"><button><span>Calculator</span></button></Link>
                <Link to="/todolist"><button><span>ToDoList</span></button></Link>
                <Link to="/counter"><button><span>Counter</span></button></Link>
                <Link to="/about"><button><span>About Me</span></button></Link>
            </nav>
          </div>
        <div className="Direita">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/calculator" component={Calculator}/>
              <Route path="/todolist" component={Home}/>
              <Route path="/counter" component={Counter}/>
              <Route path="/about" component={About}/>
            </Switch>
        </div>
        </Router>
      </div>
      
      <footer>
        <h3>Desenvolvido por Giovanni R. Mota</h3>
        <h3>giovanni.mota01@fatec.sp.gov.br</h3>
        <h3>2020</h3>
      </footer>
    </div>
  );
}

export default App;