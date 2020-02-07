import React, {Component} from 'react';
// import Landing from './components/Landing';
import Cities from './children/Cities';
import {fetchAll} from '../store/actions/cityActions'
import { connect } from "react-redux";
// import 'bootstrap/dist/css/bootstrap.min.css'; import $ from 'jquery'; import
// Popper from 'popper.js'; import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

class FetchCities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            input: ''
        }
    };

    

    

    render() {
        //const cities = this.filterCities()
        const {cities} = this.props.cities
        console.log('loading', this.props.cities)
        
        console.log("cities", cities)
        // const onChangeHandler = (e) => {
        //     console.log(e)
        //     console.log(this.state)
        //     this.setState({input: e.target.value})
        //     filterCities()

        // }
        // const filterCities = () => {
        //     console.log("hi")

        //     const filteredCities =  cities
        //         .filter(city => {
        //             return city
        //                 .name
        //                 .toLowerCase()
        //                 .startsWith(this.state.input.toLowerCase())
        //         })
        //         console.log('filteredCities', filteredCities)
        //         this.setState({cities: filteredCities})
        // }

        return (
            
            <div>
                {/* <input
                    type="text"
                    placeholder="Search by city"
                    onChange={onChangeHandler.bind(this)}
                    value={this.state.input}
                    style={{
                    marginLeft: 15,
                    marginBottom: 15,
                    marginTop: 10
                }}/> */}
                
                {
                     <Cities cities={this.state.cities} input={this.state.input}/>
                }
                
                </div> 
        )
    }

    componentDidMount() {
        // fetch('http://localhost:5000/cities/all')
        //     .then(res => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         this.setState({cities: data})
        //     })
        //     .catch(console.log)
        
        // console.log({cities: data})
        this.props.fetchAll();

        
    }

}

const mapStateToProps = state => {
    
    return {
      cities: state.cities
    };
  };

// export default FetchCities

export default connect(mapStateToProps, { fetchAll })(FetchCities);