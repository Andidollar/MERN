import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Cities = ({cities}) => {
    return (
        <div>
            {cities.map((city) => (
                <div key={city._id}>
                    <h2>{city.name}</h2>
                    <p>{city.country}</p>
                    <img
                        src={city.image}
                        alt="pic"
                        style={{
                        width: 400,
                        height: 300,
                        paddingLeft: 15
                    }}/>
                </div>
            ))}</div>
    )
};

export default Cities