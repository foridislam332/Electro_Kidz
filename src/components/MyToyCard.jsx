import React from 'react';
import { Link } from 'react-router-dom';

const MyToyCard = ({ toy }) => {
    const { _id, name, img, price, rating, quantity, seller, subCategory } = toy;

    return (
        <div className='w-80 md:w-full mx-auto md:flex items-center border border-blue hover:rounded-lg hover:shadow-lightBlue p-4 transition-all duration-300 ease-in-out'>
            {/* toy image */}
            <Link to={`/toyDetails/${_id}`}>
                <div className='h-48 md:w-48 mb-4 md:mb-0'>
                    <img className='h-full mx-auto' src={img} alt={name} />
                </div>
            </Link>

            {/* toy content */}
            <div className='md:flex items-center justify-between md:px-3 w-full'>
                <div className='w-full'>
                    {/* toy name */}
                    <Link to={`/toyDetails/${_id}`}>
                        <h1 className='text-navy text-sm font-medium drop-shadow-md'>{name}</h1>
                    </Link>

                    <p className='text-gray-text text-sm mt-2'><span className='font-semibold text-navy'>Seller:</span> {seller}</p>

                    <p className='text-gray-text text-sm'><span className='font-semibold text-navy'>Category:</span> {subCategory}</p>

                    <p className='text-gray-text text-sm font-semibold mt-1'><span className='text-navy'>Available Quantity:</span> {quantity}</p>

                    <p className="text-black text-2xl font-bold drop-shadow-lg mt-3">${price}</p>
                </div>

                <div className='flex md:flex-col gap-2 md:gap-3 w-full md:w-36 md:px-1 mt-4 md:mt-0'>
                    <Link to={`/toyDetails/${_id}`}>
                        <button className="btn_primary w-full">
                            Edit
                        </button>
                    </Link>

                    <button className="btn_primary btn_delete w-full">
                        Delete
                    </button>


                    <Link to={`/toyDetails/${_id}`}>
                        <button className="btn_primary w-full">
                            View
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyToyCard;