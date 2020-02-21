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

    componentDidMount() {
        let {username} = this.props.login
        Axios
            .get("http://localhost:5000/users/id/" + username)
            .then(res => {
                console.log("XXXXX", res.data.favourites)
                const favourites = res.data.favourites;
                this.setState({ favourites })
                // if (res.data.favourites.itineraryId !== null) {
                //     this.setState({
                //         liked: this.state.liked
                //     })
                // }
            })
            .catch(err => {
                console.log(err.response);
            })}

            

    /* Get user by :ID, find itinerary, post itinerary to this user's favourites, remove from favourites,
    button needs to check if this itinerary is part of the favourites*/
    handleClick(e) {
        // console.log('favourites', this.state.favourites[0].itineraryId)
        let {username} = this.props.login
        let itineraryId = this.props.itineraryId
        // let itineryIdState = this.state.favourites
        //map oder for loop
        // let i;
        // for (i = 0; i < this.state.favourites.length; i++) {
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

        // e.preventDefault();
        // if (this.state.favourites[0].itineraryId === itineraryId) {
        //     this.setState({liked: this.state.liked});
        // } else {
        //     this.setState({liked: !this.state.liked});
        // }
            this.setState({
                liked: !this.state.liked // here we need to check whether the itinerary is in the favourites
            });
        // let itineraryId = this.props.itineraryId
        console.log('itineraryId', itineraryId)

        // let body = JSON.stringify({itineraryId, username})
        // console.log('body', body)
        if (!this.state.liked) {
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
        // console.log("RENDER", this.state)
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

// LikeButton.propTypes = {     login: PropTypes.object.isRequired   };

const mapStateToProps = state => {
    console.log("Buttonredux", state)
    return {cityId: state.cityId, login: state.login};
};

// export default FetchCities

export default connect(mapStateToProps, {loginNow})(LikeButton);
