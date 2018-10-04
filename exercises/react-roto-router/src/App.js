import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import MatchService from './MatchService';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <h1>Beehive Plumbing</h1>
        <nav className="navBar">
          <Link to="/" className="links">Home</Link>
          <Link to="/about" className="links">About</Link>
          <Link to="/services" className="links">Services</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route exact path='/services' component={Services}/>
        <Route path='/services/:serviceId' component={MatchService}/>
      </Switch>
      <footer>
        ©2018
      </footer>
    </div>
  );
}

export default App;
