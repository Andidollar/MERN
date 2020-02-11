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
            </div>

        
            
    )
};

export default Cities

                    

                    // <Link key={city._id} to={"/cities/" + city.name}>
                    //     <div className="cities-card" key={city._id}>
                    //         <h2>{"MY " + city.name + " itinerary"}</h2>
                    //     </div>
                    // </Link>