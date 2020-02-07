import React, { Component } from 'react';
import Landing from './components/Landing';
import FetchCities from './components/FetchCities';
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
            <Route exact path='/home' component={ Landing } />
          </Switch>
          {/* <Switch>
          <Route exact path='/' component={ SearchCity } />
          </Switch> */}
          <Switch>
            <Route exact path='/cities' component={ FetchCities } />
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