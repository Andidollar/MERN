import React from 'react';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// const filteredCitie = cities.filter(element => {input})

const Cities = ({cities, input}) => {

    return (

        <div>

            {cities && cities.map((city) => (
                <div key={city._id}>
                    <h2>{city.name}</h2>
                    <p>{city.country}</p>
                    <img
                        src={city.image}
                        alt="pic"
                        style={{
                        width: 400,
                        height: 300,
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}/><br/><br/>
                </div>
            ))}</div>

    )
};

export default Cities