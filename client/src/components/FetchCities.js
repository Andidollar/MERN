import React, {Component} from 'react';
// import Landing from './components/Landing';
import '../index.css';
import Cities from './children/Cities';
import {fetchAll} from '../store/actions/cityActions';
// import {fetchItineraries} from '../store/actions/itineraryActions';
import {connect} from "react-redux";
import Footer from './Footer';
import Header from './Header1';
// import jwt_decode from 'jwt-decode';
// const jwtDecode = require('jwt-decode');
// import home from '../media/homeIcon.png';
// import {Link} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'; import $ from 'jquery'; import
// Popper from 'popper.js'; import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

export class FetchCities extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            input: '',
            username: ''
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
            // localStorage.setItem("token", this.props.login.token)
            // const jwtToken = localStorage.getItem("token");
            // const decode = jwtToken.jwt_decode;
            // console.log("decode", decode)
        }
        
        return (
            
            <div>
                <Header />
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
                <Footer></Footer>
            </div>
        )
    }
    componentDidMount() {
        this
            .props
            .fetchAll()
        //     console.log('this.props', this.props)
        // localStorage.setItem("token", this.props.login.token)
    }

}
const mapStateToProps = state => {
    console.log("Cityredux", state)
    return {cities: state.cities, login: state.login};
};

// export default FetchCities

export default connect(mapStateToProps, {fetchAll})(FetchCities);