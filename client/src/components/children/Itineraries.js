import React from 'react';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from "react-router-dom";
// import {fetchItineraries} from '../../store/actions/itineraryActions'; import
// {Link} from "react-router-dom"; const filteredCitie = cities.filter(element
// => {input})

const Cities = ({cities, input, itineraries}) => {

    return (

        <div>

            {cities && cities.map((city) => (
                <div key={city._id}>
                    <h2>{city.name}</h2>
                    <p>{city.country}</p>
                    <img src={city.image}
                        alt="pic"
                        style={{
                        width: 500,
                        height: 350,
                        objectFit: 'cover',
                        overflow: 'hidden',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        padding: 10
                    }}/>
                    <Link to={"/cities/" + city.name + "/itinerary"}>
                        <button
                        // id={city.name}
                        className="btn btn-secondary"
                        data-toggle="modal" 
                        data-target={"#" + city.name}
                        style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>{"MYtinerary for " + city.name}
                    </button></Link>
                     <br/><br/>
                </div>
            ))}
            {itineraries.map((itinerary) => ( 
            
            <div class="modal fade" id={itinerary.city_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
            
            <div className="modal-header">
            <h5 className="modal-title" id="title">{itinerary.title}</h5></div>
            <img src={itinerary.picture} alt="Activity"
            style={{
            width: 400,
            height: 200,
            overflow: 'hidden',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10
            }}></img>
            <div class="modal-body">
            <ul style={{ listStyleType: "none" }}>
                <li>Rating: {itinerary.rating}</li>
                <li>Duration (hours): {itinerary.duration}</li>
                <li>Price (€): {itinerary.price}</li>
            </ul>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
            </div>
            </div>))}
            </div>

        
            
    )
};

export default Cities

                    

                    // <Link key={city._id} to={"/cities/" + city.name}>
                    //     <div className="cities-card" key={city._id}>
                    //         <h2>{"MY " + city.name + " itinerary"}</h2>
                    //     </div>
                    // </Link>