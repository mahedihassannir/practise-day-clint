import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {

    let { title, img, price } = data

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">$$: {price}</h2>
                    <p>{title}</p>
                    <div className="card-actions">
                        <Link to={`Checkout/${data._id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;