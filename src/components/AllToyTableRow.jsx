import React from 'react';
import { Link } from 'react-router-dom';

const AllToyTableRow = ({ toy }) => {
    const { _id, name, price, quantity, subCategory } = toy;
    return (
        <tr className="border-b border-blue even:bg-navy even:text-white">
            <td className="py-3 px-4 text-left text-blue min-w-[200px]">
                <p>{name?.slice(0, 65)} ...</p>
            </td>
            <td className="min-w-[150px] py-3 px-2 text-left">{subCategory}</td>
            <td className="py-3 px-2 text-center">${price}</td>
            <td className="py-3 px-2 text-center">{quantity}</td>
            <td className="min-w-[180px] py-3 px-4 text-center">
                <Link to={`/toyDetails/${_id}`}>
                    <button className="btn_primary">
                        View Details
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToyTableRow;