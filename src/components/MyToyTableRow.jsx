import React from 'react';
import { Link } from 'react-router-dom';

import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

const MyToyTableRow = ({ toy, handleDelete }) => {
    const { _id, img, name, price, seller, subCategory } = toy;
    return (
        <tr className="border-b border-blue even:bg-navy even:text-white">
            <td className="py-3 px-4 text-left text-blue">
                <p className='w-16 h-16 rounded-full border border-blue shadow-lg'>
                    <img className='h-full rounded-full' src={img} alt={name} />
                </p>
            </td>
            <td className="py-3 px-4 text-left text-blue min-w-[200px]">
                <Link to={`/toyDetails/${_id}`}>
                    {name?.slice(0, 65)} ...
                </Link>
            </td>
            <td className="min-w-[150px] py-3 px-2 text-left">{seller}</td>
            <td className="min-w-[150px] py-3 px-2 text-left">{subCategory}</td>
            <td className="py-3 px-2 text-center">${price}</td>
            <td className="min-w-[120px] py-3 px-4 text-center">
                <div className='flex items-center justify-center gap-2'>
                    <Link to={`/edit-toys/${_id}`}>
                        <button className="h-10 w-10 flex items-center justify-center bg-blue rounded-full text-white shadow-lg hover:shadow-blue duration-300">
                            <FaPencilAlt />
                        </button>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="h-10 w-10 flex items-center justify-center bg-blue rounded-full text-white shadow-lg hover:shadow-pink hover:bg-pink duration-300">
                        <FaRegTrashAlt />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MyToyTableRow;