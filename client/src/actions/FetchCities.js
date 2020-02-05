import React, {Component} from 'react';
// import Landing from './components/Landing';
import Cities from '../components/Cities';
// import 'bootstrap/dist/css/bootstrap.min.css'; import $ from 'jquery'; import
// Popper from 'popper.js'; import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

class FetchCities extends Component {
    state = {
        cities: [],
        input: ''
    };

    onChangeHandler(e) {
        this.setState({input: e.target.value})
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search by city"
                    style={{
                    marginLeft: 15
                }}/>
                <Cities cities={this.state.cities}/></div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:5000/cities/all')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({cities: data})
            })
            .catch(console.log)
    }
}

export default FetchCities