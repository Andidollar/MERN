import Button from 'react-bootstrap/Button';
import React from 'react';
import Axios from 'axios';
import {connect} from "react-redux";
import loginNow from "../store/actions/loginActions";
// import PropTypes from "prop-types";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            username: '',
            itineraryId: this.props.itineraryId
        };
        this.handleClick = this
            .handleClick
            .bind(this);
    }

    
    /* Get user by :ID, find itinerary, post itinerary to this user's favourites, remove from favourites, 
    button needs to check if this itinerary is part of the favourites*/
    handleClick() {
      // const {username} = this.props.login
        this.setState({
            liked: !this.state.liked // here we need to check whether the itinerary is in the favourites
        });
        // let axios0 = "http://localhost:5000/users/id/test123"
        // let axios1 = "http://localhost:5000/users/addToFavorite"
        // let axios1 = "http://localhost:5000/users/removeFromFavorite"

        // const request0 = axios.get(axios0)
        // const request1 = axios.post(axios1)
        // const request2 = axios.post(axios2)

        // Axios.all([request0, request1, request2]).then(axios.spread((...responses) => {
        //   const response0 = responses[0]
        //   const response1 = responses[1]
        //   const respones2 = responses[2]
        // use/access the results 
        // })).catch(errors => {
         // react on errors.
        console.log("click")
          let {username} = this.props.login
          let itineraryId = this.props.itineraryId
          console.log('itineraryId', itineraryId)

          let body = JSON.stringify({
            itineraryId, 
            username
        })
        console.log('body', body)
        Axios.post("http://localhost:5000/users/addToFavorite", 
        {
        itineraryId, 
        username
    })
            
            .then(res => {
                console.log("fav", res);
            })
            .catch(err => {
                console.log(err.response);
            });
    }

    render() {
      console.log("Username", this.props)
        // const text = this.state.liked ? 'liked' : 'haven\'t liked';
        const label = this.state.liked
            ? 'Unlike'
            : 'Like'
        return (
            <div className="customContainer">
                <Button
                    className="btn btn-primary"
                    style={{
                    backgroundColor: '#23aa4e',
                    borderColor: '#177d37'
                }}
                    onClick={this.handleClick}>
                    {label}</Button>

            </div>
        );
    }
}

// LikeButton.propTypes = {
//     login: PropTypes.object.isRequired
//   };

const mapStateToProps = state => {
  console.log("Buttonredux", state)
  return {cityId: state.cityId,
          login: state.login};
};

// export default FetchCities

export default connect(mapStateToProps, {loginNow})(LikeButton);
