import React, { Component } from 'react';
import Data from './components/Books';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <Data books={this.state.books} />
        )
    }

    state = {
        books: []
    };

    componentDidMount() {
        fetch('https://api.myjson.com/bins/zyv02')
            .then(res => res.json())
            .then((data) => {
                this.setState({ books: data.books })
            })
            .catch(console.log)
    }
}

export default App





// https://api.myjson.com/bins/zyv02