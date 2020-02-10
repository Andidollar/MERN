import React, {Component} from 'react';
// import Landing from './components/Landing';
import '../index.css';
import Cities from './children/Cities';
import {fetchAll} from '../store/actions/cityActions';
import {connect} from "react-redux";
import home from '../media/homeIcon.png';
import {Link} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'; import $ from 'jquery'; import
// Popper from 'popper.js'; import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

export class FetchCities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            input: ''
        }
    };

    filterCities = () => {
        return this
            .props // redux
            .cities
            .cities // redux
            .filter(city => {
                return city
                    .name
                    .toLowerCase()
                    .startsWith(this.state.input.toLowerCase())
            })
    }

    render() {
        const {isLoaded} = this.props.cities
        const cities = this.filterCities()

        const onChangeHandler = (e) => {
            console.log(e)
            console.log(this.state)
            this.setState({input: e.target.value})

        }

        return (
            <div>
                <div className="search">
                    <input
                        id="searchField"
                        type="text"
                        placeholder="Search by city"
                        onChange={onChangeHandler.bind(this)}
                        value={this.state.input}
                        style={{
                        border: 'solid black',
                        marginLeft: 15,
                        marginBottom: 15,
                        marginTop: 10
                    }}/></div>
                {isLoaded && <Cities cities={cities} input={this.state.input}/>}
                <Link to="/">
                    <img
                        className="homeButton"
                        src={home}
                        alt="home"
                        style={{
                        width: 100,
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 10,
                        marginBottom: 10
                    }}></img>
                </Link>
            </div>
        )
    }
    componentDidMount() {
        this
            .props
            .fetchAll()
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {cities: state.cities};
};

// export default FetchCities

export default connect(mapStateToProps, {fetchAll})(FetchCities);