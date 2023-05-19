import React from 'react';
import { Link } from 'react-router-dom';

// Rating star
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ToyCard = ({ toy }) => {
    const { _id, name, img, price, rating, quantity, seller, subCategory } = toy;

    // rating style
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ff8087',
        inactiveFillColor: '#ff80864c'
    }
    return (
        <div className='w-80 lg:w-full mx-auto border border-blue hover:rounded-lg hover:shadow-lightBlue p-4 transition-all duration-300 ease-in-out'>
            {/* toy image */}
            <Link to={`/toyDetails/${_id}`}>
                <div className='h-48'>
                    <img className='h-full mx-auto' src={img} alt={name} />
                </div>
            </Link>

            {/* toy content */}
            <div className='mt-4'>
                {/* toy rating */}
                <div className='flex items-center gap-1 mb-3'>
                    <Rating className='max-w-[90px]' readOnly value={rating} itemStyles={myStyles} />
                    <span>{rating}</span>
                </div>

                {/* toy name */}
                <Link to={`/toyDetails/${_id}`}>
                    <h1 className='text-navy text-sm font-medium drop-shadow-md'>{name.slice(0, 50)}...</h1>
                </Link>

                <p className='text-gray-text text-sm mt-2'><span className='font-semibold text-navy'>Seller:</span> {seller}</p>

                <p className='text-gray-text text-sm'><span className='font-semibold text-navy'>Category:</span> {subCategory}</p>

                <p className='text-gray-text text-sm font-semibold mt-1'><span className='text-navy'>Available Quantity:</span> {quantity}</p>

                <div className="flex items-center justify-between mt-6">
                    <p className="mr-2 text-black text-2xl font-bold drop-shadow-lg">${price}</p>
                    <Link to={`/toyDetails/${_id}`} className="btn_primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;