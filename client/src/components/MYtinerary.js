import {connect} from "react-redux";
import {fetchItineraries} from "../store/actions/itineraryActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Header from './Header1';
import LikeButton from './LikeButton';
import Comments from './Comments';
import Index from './CommentsIndex';
import Axios from 'axios';
import jwt_decode from "jwt-decode";
import '../index.css';
// import Itineraries from './children/Itineraries'; 
import { Link } from "react-router-dom";

import React, {Component} from 'react'

export class MYtinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            activities: [],
            username: '',
            favourites: [],
            token: '',
            isLoggedIn: true,
            comments: []
        }
    }



    componentDidMount() {
        // console.log(this.props.match.params.id)
        this
            .props
            .fetchItineraries(this.props.match.params.id);
            
            const decoded = jwt_decode(localStorage.token)
            Axios
                .get("http://localhost:5000/users/id/" + decoded.username)
                .then(res => {
                    console.log("XXXXX", res.data.favourites)
                    const favourites = res.data.favourites;
                    this.setState({ favourites })
                })
                .catch(err => {
                    console.log(err.response);
                    
                })
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
            {console.log("aöslkjfdlöfkf", this.state)}
            <LikeButton 
            itineraryId={itinerary._id} 
            liked={this.state.favourites.find(({ itineraryId}) => itineraryId === itinerary._id)}
            // label={this.forceUpdate()}
            // liked={!this.state.favourites.filter(({ itineraryId }) => { return itineraryId === itinerary._id ? true : false})}
            // onLikeChange={this.onLikeChange}
            />
          <p><b>Rating: </b>{itinerary.rating}
          <b> Duration (hours): </b>{itinerary.duration}
          <b> Price (€): </b>{itinerary.price}<br></br>
          <b> Tags: </b>{itinerary.hashtags}</p>
          <Accordion defaultActiveKey="0">
          <Card>
          <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
          <p>Activities</p>
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
          
          <Card.Body>{itinerary.activities.map((c,index) =>
    
          <ul key={index} style={{ listStyleType: "none" }}>
                <br></br><li><b>{c.tour}</b></li>
                <li>Where? {c.address}</li>
                <li>When? {c.time}</li>
            </ul>
          
            )}</Card.Body>
          </Accordion.Collapse>
          </Card>   
          </Accordion><br></br>
          {console.log("this.state.comments", this.state.comments)}
          <Comments 
          itineraryId={itinerary._id}
        //visible={this.state.comments.includes(itinerary._id)}
            visible={this.state.comments.filter(({ itineraryId }) => itineraryId === itinerary._id)}
            
          />
          <Index itineraryId={itinerary._id} />
      </div>]
      }
        )
    }
  

    render() {
        const itineraries = this.mapItinerary()
        
        return (
            
            <div>  
            <Header/>
              {itineraries}
             <p className='links' style={{marginTop: 10}}><Link to="/cities">Choose another city</Link></p>
             <Footer></Footer>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log('redux MY', state)
    return {itineraries: state.itineraries, login: state.login, favourites: state.favourites};
};

export default connect(mapStateToProps, {fetchItineraries})(MYtinerary);