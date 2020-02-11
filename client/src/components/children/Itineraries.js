import React from 'react';
import '../../index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import {Link} from "react-router-dom";
// import {fetchItineraries} from '../../store/actions/itineraryActions'; import
// {Link} from "react-router-dom"; const filteredCitie = cities.filter(element
// => {input})

const Itineraries = ({itineraries}) => {

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
};

export default Itineraries

                    

                    // <Link key={city._id} to={"/cities/" + city.name}>
                    //     <div className="cities-card" key={city._id}>
                    //         <h2>{"MY " + city.name + " itinerary"}</h2>
                    //     </div>
                    // </Link>