import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

// Rating star
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// react icons
import { FaFacebookF, FaTwitter, FaPinterest, FaGoogle } from "react-icons/fa";
import { TfiAngleRight } from "react-icons/tfi";

import { Helmet } from 'react-helmet';

const ToyDetails = () => {
    const [count, setCount] = useState(1);
    const toy = useLoaderData();
    const { name, email, img, price, rating, quantity, seller, subCategory, des } = toy;

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ff8087',
        inactiveFillColor: '#ff80864c'
    }

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    // get discount
    const originalPrice = price;
    const discountPercentage = quantity;
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;

    return (
        <>
            <Helmet>
                <title>ElectroKidz | Toy Details page</title>
            </Helmet>
            <section className='py-16'>
                <div className="container">
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                        <div>
                            <img className='w-96 lg:w-[500px] mx-auto' src={img} alt={name} />
                        </div>

                        <div className='md:pl-8'>
                            {/* seller name */}
                            <p className='text-gray-text text-sm flex items-center gap-2'>
                                <Link to='/all-toys' className='text-blue' >Electronic Toy</Link>
                                <TfiAngleRight size={12} /> {subCategory}
                            </p>

                            {/* toy name */}
                            <h2 className='text-2xl font-semibold text-navy'>{name}</h2>

                            {/* toy rating */}
                            <div className='flex items-center gap-1 mb-3'>
                                <Rating className='max-w-[90px]' readOnly value={rating} itemStyles={myStyles} />
                                <span>{rating}</span>
                            </div>

                            {/* toy price */}
                            <div className='mb-6 flex items-center gap-4'>
                                <p className='text-2xl font-medium text-gray-text line-through'>
                                    ${parseInt(price).toFixed(2)}
                                </p>
                                <p className='text-3xl font-bold text-navy'>
                                    ${discountedPrice?.toFixed(2)}
                                </p>
                                <button className='bg-pink py-1 px-3 text-white'>
                                    SAVE {quantity}%
                                </button>
                            </div>

                            {/* description */}
                            {
                                des ? <p className='text-gray-text'>
                                    {des}
                                </p> : <p className='text-gray-text'>
                                    The toy's user interface is intuitive and straightforward, allowing my child to navigate through the different activities with ease. The sound effects and music are also pleasant, creating an immersive experience and adding an extra layer of excitement to the gameplay.
                                </p>
                            }

                            {/* button */}
                            <div className='flex items-center gap-10 my-8'>
                                <div className='flex items-center gap-3 bg-gray-text text-white font-semibold py-2 px-4'>
                                    <button onClick={decrement}>-</button>
                                    <span>{count.toString().padStart(2, '0')}</span>
                                    <button onClick={increment}>+</button>
                                </div>
                                <button className="btn_primary">
                                    Add To Cart
                                </button>
                            </div>

                            {/* quantity & categories */}
                            <div>
                                <p className='text-navy font-bold'>Available Quantity:
                                    <span className='text-gray-text ml-1'>
                                        {quantity?.toString().padStart(2, '0')}
                                    </span>
                                </p>

                                <p className='text-navy font-bold mt-4'>Seller:
                                    <span className='text-gray-text ml-1 font-medium'>
                                        {seller}
                                    </span>
                                </p>

                                <p className='text-navy font-bold'>Email:
                                    <span className='text-gray-text ml-1 font-medium'>
                                        {
                                            email ? email : seller.split()[0] + '@gmail.com'
                                        }
                                    </span>
                                </p>
                            </div>

                            {/* social icons */}
                            <div className='flex items-center gap-5 mt-3'>
                                <p className='text-navy font-bold'>Share: </p>
                                <div className='flex items-center gap-4 text-gray-text'>
                                    <FaFacebookF size={18} className='hover:text-blue duration-300' />
                                    <FaTwitter size={18} className='hover:text-blue duration-300' />
                                    <FaPinterest size={18} className='hover:text-blue duration-300' />
                                    <FaGoogle size={18} className='hover:text-blue duration-300' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ToyDetails;