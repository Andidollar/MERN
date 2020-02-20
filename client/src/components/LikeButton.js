import Button from 'react-bootstrap/Button';
import React from 'react';
import Axios from 'axios';
import {connect} from "react-redux";
import loginNow from "../store/actions/loginActions"

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            username: ''
        };
        this.handleClick = this
            .handleClick
            .bind(this);
    }

    
    /* Get user by :ID, post itinerary (but specific) to this user's favourites, remove from favourites, 
    button needs to check if this itinerary is part of the favourites*/
    handleClick() {
      // const {username} = this.props.login
        this.setState({
            liked: !this.state.liked // here we need to check whether the itinerary is in the favourites
        });
        // let axios0 = ("http://localhost:5000/users/id/" + username)
        // let axios1 = "http://localhost:5000/users/addToFavorite"
        // let axios1 = "http://localhost:5000/users/removeFromFavorite"

        // const request0 = axios.get(axios0)
        // const request1 = axios.post(axios1)
        // const request2 = axios.post(axios2)

        // axios.all([request0, request1, request2]).then(axios.spread((...responses) => {
        //   const response0 = responses[0]
        //   const response1 = responses[1]
        //   const respones2 = responses[2]
        // use/access the results 
        // })).catch(errors => {
         // react on errors.
        // })

        let {username} = this.state.username
        Axios
            .get(("http://localhost:5000/users/id/" + username), {
            // username: 'andidollar'
        })
            
            .then(res => {
                console.log(res);
                this.setState({isLoggedIn: true});
            })
            .catch(err => {
                this.setState({isError: true, error: err.response.data});
                console.log(err.response);
            });
    }

    render() {
      console.log("Username", this.state.username)
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

const mapStateToProps = state => {
  console.log("Buttonredux", state)
  return {cityId: state.cityId,
          username: state.username};
};

// export default FetchCities

export default connect(mapStateToProps, {loginNow})(LikeButton);
