import React, { Component } from 'react';
import Landing from './components/Landing';
import Cities from './components/Cities';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
          <Switch>
            <Route exact path='/' component={Cities} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
