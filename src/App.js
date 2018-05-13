import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home/loadable';
import Advertisers from './Advertisers/loadable';
import Designers from './Designers/loadable';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/advertisers">Advertisers</Link></li>
            <li><Link to="/3d-designers">Designers</Link></li>
          </ul>

          <hr/>
          

          <Route exact path="/" component={Home}/>
          <Route path="/advertisers" component={Advertisers}/>
          <Route path="/3d-designers" component={Designers}/>
        </div>
      </Router>
    );
  }
}

export default App;
