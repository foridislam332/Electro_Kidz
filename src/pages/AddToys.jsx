import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AddToys = () => {
    const { user } = useContext(AuthContext);

    // add toy
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const subCategory = form.category.value;
        const img = form.photo.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const seller = form.seller.value;
        const quantity = form.quantity.value;
        const des = form.description.value;

        if (isNaN(price)) {
            return alert('price should be number')
        }
        if (isNaN(rating)) {
            return alert('rating should be number')
        }
        if (isNaN(quantity)) {
            return alert('quantity should be number')
        }

        console.log(name, img, price, rating, subCategory, quantity, des, seller, email)
    }

    return (
        <section className='py-16 lg:py-[120px]'>
            <div className='container'>
                <div className='lg:w-4/5 mx-auto rounded-lg shadow-custom p-6'>
                    <h1 className='text-center text-3xl font-bold mb-10'>Add Toys</h1>

                    <form onSubmit={handleSubmit}>
                        {/* 1st col */}
                        <div className='flex flex-col lg:flex-row items-center gap-3'>
                            {/* title name field */}
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="email">Title :</label>
                                <input
                                    id='name'
                                    className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                    type="text"
                                    name='name'
                                    placeholder='Enter toy name'
                                    required
                                />
                            </div>

                            {/* sub-category field */}
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="category">Sub Category :</label>
                                <input
                                    id='category'
                                    className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                    type="text"
                                    name='category'
                                    placeholder='Enter Sub-Category'
                                    required
                                />
                            </div>
                        </div>

                        {/* 2nd col */}
                        <div className='flex flex-col lg:flex-row items-center gap-3 mt-3'>
                            {/* Price field */}
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="price">Price :</label>
                                <input
                                    id='price'
                                    className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                    type="text"
                                    name='price'
                                    placeholder='Enter toy price'
                                    required
                                />
                            </div>

                            {/* quantity field */}
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="quantity">Quantity :</label>
                                <input
                                    id='quantity'
                                    className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                    type="text"
                                    name='quantity'
                                    placeholder='Available quantity'
                                    required
                                />
                            </div>

                            {/* Rating field */}
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="rating">Rating :</label>
                                <input
                                    id='rating'
                                    className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                    type="text"
                                    name='rating'
                                    placeholder='Toy Rating'
                                    required
                                />
                            </div>
                        </div>

                        {/* 3rd col */}
                        {/* photo field */}
                        <div className='flex flex-col w-full mt-3'>
                            <label className='text-navy font-bold' htmlFor="photo">Photo URL :</label>
                            <input
                                id='photo'
                                className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                type="text"
                                name='photo'
                                placeholder='Enter toy photo URL'
                                required
                            />
                        </div>

                        {/* 4th col */}
                        {/* description field */}
                        <div className='flex flex-col w-full mt-3'>
                            <label className='text-navy font-bold' htmlFor="description">Description :</label>
                            <textarea rows={4}
                                id='description'
                                className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                type="text"
                                name='description'
                                placeholder='Enter toy description'
                                required
                            />
                        </div>

                        {/* 5th col */}
                        <div className='flex flex-col lg:flex-row items-end gap-3 mt-3'>
                            {/* Seller name field */}
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="seller">Seller :</label>
                                <input
                                    id='seller'
                                    className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                    type="text"
                                    name='seller'
                                    defaultValue={user?.displayName}
                                    placeholder='Enter seller name'
                                    required
                                />
                            </div>

                            {/* email field */}
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="email">Email :</label>
                                <input
                                    id='email'
                                    className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                    type="email"
                                    name='email'
                                    defaultValue={user?.email}
                                    placeholder='Enter your email'
                                    required
                                />
                            </div>

                            <button type='submit' className="btn_primary w-full mt-5 md:mt-0">Add Toy</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddToys;