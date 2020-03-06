import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Component/Home.js';
import About from './Component/About.js';
import Room from './Component/Room.js';
import Pages from './Component/Pages.js';
import News from './Component/News.js';
import ContactUs from './Component/ContactUs.js';
import './App.css';
import Header2 from './Component/Header2.js';
import Logo from './assets/kumo_Logo.png'

class App extends Component{
  render(){
    return(
      <Router>
        <Header2/>
      <nav className="sticky-top navbar navbar-expand-md navbar-light " style={{backgroundColor:'#0d2933'}}>
          <a href="/home" className="px-2 navbar-brand text-light" >
            <div className=" col-lg-3 text-right">
            <img  src={Logo} style={{height:45}}/>
            </div>
            </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
              <div className="navbar-nav">
                  <a href="/home" className="nav-item nav-link text-light">Home</a>
                  <a href="/about" className="nav-item nav-link text-light">About</a>
                  <a href="/room" className="nav-item nav-link text-light">Room</a>
                  <a href="/Pages" className="nav-item nav-link text-light">Pages</a>
                  <a href="/News" className="nav-item nav-link text-light">News</a>
                  <a href="/contact" className="nav-item nav-link text-light">ContactUs</a>
              </div>
          </div>
      </nav>

        
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/room" component={Room} />
            <Route path="/Pages" component={Pages} />
            <Route path="/News" component={News} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App;

