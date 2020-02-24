import Button from 'react-bootstrap/Button';
import React from 'react';
import Axios from 'axios';
import {connect} from "react-redux";
import jwt_decode from "jwt-decode";
// import loginNow from "../store/actions/loginActions";
// import PropTypes from "prop-types";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: this.props.liked,
            username: '',
            itineraryId: this.props.itineraryId
        };
        this.handleClick = this
            .handleClick
            .bind(this);
    }

    /* Check if user has favourites, post/remove from favourites*/
    handleClick() {
        // let {username} = this.props.login
        // console.log('username', username)
        const itineraryId = this.props.itineraryId

            this.setState({
                liked: !this.state.liked // here we need to check whether the itinerary is in the favourites
            });

            const decoded = jwt_decode(localStorage.token)
            // console.log('decoded', decoded)
        const username = decoded.username
        // const { liked, onLikeChange} = this.props
        // onLikeChange(itineraryId, !liked)
        
        if (this.state.liked === false) {
            Axios
                .post("http://localhost:5000/users/addToFavorite", {itineraryId, username})
                .then(res => {
                    console.log("fav", res);
                })
                .catch(err => {
                    console.log(err.response);
                });
        } else {
            Axios.post("http://localhost:5000/users/removeFromFavorite", {itineraryId, username})
        }
    }
    

    render() {
        console.log('LIKE', this.state.liked)
        // onLikeChange(this.props.itineraryId, !this.props.liked)
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
    // console.log("Buttonredux", state)
    return {cityId: state.cityId, login: state.login};
};

export default connect(mapStateToProps)(LikeButton);
// console.log("RENDER", this.state)
        // const text = this.state.liked ? 'liked' : 'haven\'t liked';
// let body = JSON.stringify({itineraryId, username})
        // console.log('body', body)

// if (res.data.favourites.itineraryId !== null) {
                //     this.setState({
                //         liked: this.state.liked
                //     })
                // }
// LikeButton.propTypes = {     login: PropTypes.object.isRequired   };
 // let itineryIdState = this.state.favourites
        //map oder for loop
        // let i;
        // for (let i = 0; i < this.state.favourites.length; i++) {
        //         if (this.state.favourites[i].itineraryId = this.props.itineraryId ) {
        //             this.setState({
        //                 liked: true
        //             })
        //         } else {
        //             setState({
        //                 liked: false
        //             })
        //         }
        // }
        // this.state.favourites.forEach(function (favourite) {
        //     console.log('favourite', favourite)
            
        // });
        // e.preventDefault();
        // if (this.state.favourites[0].itineraryId === itineraryId) {
        //     this.setState({liked: this.state.liked});
        // } else {
        //     this.setState({liked: !this.state.liked});
        // }

        // const Id = this.props.itineraryId
        // console.log('Id', Id)
        // this.state.favourites.forEach(function (favourite) {
        //     if (favourite.itineraryId !== itineraryId) {
        //         this.setState(prevstate => ({ yourstate: !prevstate.yourstate}))
        //     }
            
        // });