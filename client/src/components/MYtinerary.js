import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
// import { Link } from "react-router-dom";

import React, { Component } from 'react'

export class MYtinerary extends Component {
  componentDidMount(){
    console.log(this.props.match.params.id)
    this.props.fetchItineraries(this.props.match.params.id)
  }
  render() {
    console.log(this.props.itineraries)
    return (
      <div>
        <p>What</p>
      </div>
    )
  }
}

//export default MYtinerary


const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};
export default connect(
  mapStateToProps,
  { fetchItineraries }
)(MYtinerary);
