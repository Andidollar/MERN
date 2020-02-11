import {connect} from "react-redux";
import {fetchItineraries} from "../store/actions/itineraryActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../index.css';
// import Itineraries from './children/Itineraries'; 
import { Link } from "react-router-dom";

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

    mapItinerary = () => {
      return this
      .props
      .itineraries
      .itineraries
      .map(itinerary => {
        return [<div key={itinerary._id}>
          <h2>{itinerary.title}</h2>
          <img src={itinerary.picture}
              alt="itineraryPic"
              style={{
                width: 500,
                height: 350,
                objectFit: 'cover',
                overflow: 'hidden',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingBottom: 10
          }}/>
          <p><b>Rating: </b>{itinerary.rating}
          <b> Duration (hours): </b>{itinerary.duration}
          <b> Price (€): </b>{itinerary.price}<br></br>
          <b> Tags: </b>{itinerary.hashtags}</p>
          <p>
  <a className="btn btn-primary" data-toggle="collapse" href={"#" + itinerary.city_id} role="button" aria-expanded="false" aria-controls="collapseExample">
    Activities
  </a>
</p>
<div className="collapse" id={itinerary.city_id}>
  <div className="card card-body">
  <ul style={{ listStyleType: "none" }}>
                <li>Rating: {itinerary.rating}</li>
                <li>Duration (hours): {itinerary.duration}</li>
                <li>Price (€): {itinerary.price}</li>
            </ul>
  </div>
</div>        
            
      </div>]
      }
        )
     }

    render() {
        console.log('where', this.props.itineraries)
        // const itineraries = [];
        const itineraries = this.mapItinerary()
        return (

            <div>
              {itineraries}
             <p className='links' style={{marginTop: 10}}><Link to="/cities">Choose another city</Link></p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {itineraries: state.itineraries};
};

export default connect(mapStateToProps, {fetchItineraries})(MYtinerary);
