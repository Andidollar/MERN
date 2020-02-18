import React, { Component } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Landing from './components/Landing';
import FetchCities from './components/FetchCities';
import MYtinerary from './components/MYtinerary';
import PrivateRoute from './components/PrivateRoute';
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