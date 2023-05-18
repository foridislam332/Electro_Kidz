import React from 'react';

// Rating star
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const CategoryCard = ({ product }) => {
    const { name, img, price, rating, subCategory } = product;

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div className="max-w-sm rounded-lg border border-pink p-6 overflow-hidden shadow-lg hover:border-blue hover:shadow-lightBlue transition-all duration-300 ease-in-out group">
            <div className='w-56 m-auto'>
                <img className="w-full relative group-hover:scale-125 transition-all duration-300 ease-in-out z-10" src={img} alt={name} />
            </div>
            <div className="relative z-20 mt-6">
                <div className="font-bold drop-shadow-lg text-navy mb-2">{name.slice(0, 60)}...</div>

                <div className='flex items-center gap-1'>
                    <span>{rating}</span>
                    <Rating className='max-w-[90px]' readOnly value={rating} itemStyles={myStyles} />
                </div>
                <div className="flex items-center justify-between mt-6">
                    <p className="mr-2 text-navy text-2xl font-bold drop-shadow-lg">${price}</p>
                    <Link to={`/details/`} className="btn_primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;