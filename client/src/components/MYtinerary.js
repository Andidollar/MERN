import {connect} from "react-redux";
import {fetchItineraries} from "../store/actions/itineraryActions";
// import Itineraries from './children/Itineraries'; import { Link } from
// "react-router-dom";

import React, {Component} from 'react'

export class MYtinerary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itineraries: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        this
            .props
            .fetchItineraries(this.props.match.params.id)
    }

    render() {
        console.log('where', this.props.itineraries)
        const itineraries = [];
        return (

            <div>
              {itineraries.map((itinerary) => (
                <div key={itinerary._id}>
                    <h2>{itinerary.title}</h2>
                    <img src={itinerary.picture}
                        alt="itineraryPic"
                        style={{
                        width: 300,
                        height: 350,
                        objectFit: 'cover',
                        overflow: 'hidden',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        padding: 10
                    }}/>
                    <p>Rating: {itinerary.rating}</p>
                    <p>Duration (hours): {itinerary.duration}</p>
                    <p>Price (€): {itinerary.price}</p>
                </div>
            ))}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {itineraries: state.itineraries};
};

export default connect(mapStateToProps, {fetchItineraries})(MYtinerary);
