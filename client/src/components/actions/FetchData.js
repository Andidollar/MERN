import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery'; import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Row from 'react-bootstrap/Row';

const Data = ({books}) => {
    return (
        <div>
        <Row className="justify-content-center">
        {books.map((book) => (
                    <div key={book.title} className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img
                                    src={book.cover}
                                    alt="Avatar"
                                    style={{
                                    width: 300,
                                    height: 500
                                }}/>
                            </div>
                            <div className="flip-card-back">
                                <h2>{book.title}</h2>
                                <p>{book.description}</p>
                                <button type="button" data-fancybox="gallery" href={book.detail}>More Info</button>
                            </div>
                        </div>
                    </div>                
            ))}</Row></div>
    )
};

export default Data