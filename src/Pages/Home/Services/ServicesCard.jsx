import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {_id, img, price, title } = service;
    // console.log(service);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions flex justify-center items-center">
                    <p className='text-xl font-semibold'>Price:{price}</p>
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;