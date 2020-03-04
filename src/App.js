import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Component/Home.js';
import About from './Component/About.js';
import Room from './Component/Room.js';
import ContactUs from './Component/ContactUs.js';
import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
      <nav className="sticky-top navbar navbar-expand-md navbar-light bg-light ">
          <a href="/home" className="navbar-brand">Tour</a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav">
                  <a href="/home" className="nav-item nav-link active">Home</a>
                  <a href="/about" className="nav-item nav-link">About</a>
                  <a href="/room" className="nav-item nav-link">Room</a>
                  <a href="/contact" className="nav-item nav-link">ContactUs</a>
              </div>
          </div>
      </nav>

        
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/room" component={Room} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App;

