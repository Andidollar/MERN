import React, { Component } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Landing from './components/Landing';
import FetchCities from './components/FetchCities';
import MYtinerary from './components/MYtinerary';
import PrivateRoute from './components/PrivateRoute';
import Comments from './components/Comments';
import Edit from './components/CommentsEdit';
import Index from './components/CommentsIndex';
// import jwt_decode from "jwt-decode";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import PrivateRoute from 'react-private-route'
// import { MemoryRouter } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
      if (localStorage.getItem("token") !== null) {
      localStorage.getItem("token")}
      else if (window.location.search.includes("?code")) {
      localStorage.setItem("token", window.location.search.split("=")[1])}
    
  // localStorage.setItem("token", window.location.search.split("=")[1]) check if the token, decode and store
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Landing } />
          </Switch>
          {/* <Switch>
          <Route exact path='/cities/city:id' component={ MYtinerary } />
          </Switch> */}
          <Switch>
            <PrivateRoute exact path='/cities' component={ FetchCities } />
          </Switch>
          <Switch>
            <PrivateRoute exact path='/cities/:id/itinerary' component={ MYtinerary } />
          </Switch>
          <Switch>
            <Route exact path='/register' component={ Register } />
          </Switch>
          <Switch>
            <Route exact path='/login' component={ Login } />
          </Switch>
          <Switch>
            <Route exact path='/create' component={ Comments } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App

// class App extends Component {
//   render() {
//     return (
//       <Cities cities={this.state.cities} />
//         )
//     }

//     state = {
//         cities: []
//     };

//     componentDidMount() {
//         fetch('http://localhost:5000/cities/all')
//             .then(res => res.json())
//             .then((data) => {
//               console.log(data)
//                 this.setState({ cities: data })
//             })
//             .catch(console.log)
//     }
// }

// export default App