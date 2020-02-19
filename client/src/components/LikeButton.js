import Button from 'react-bootstrap/Button';
import React from 'react';
import Axios from 'axios';
import {connect} from "react-redux";
import FetchCities from './FetchCities';

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
      const {username} = this.props.login
        this.setState({
            liked: !this.state.liked
        });
        Axios
            .get("http://localhost:5000/users/id/:id", {
            username: username
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
      console.log("Username", this.state.login)
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
  return {cities: state.cities,
          unsername: state.username};
};

// export default FetchCities

export default connect(mapStateToProps, {FetchCities})(LikeButton);
