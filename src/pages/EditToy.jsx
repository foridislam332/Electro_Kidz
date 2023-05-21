import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditToy = () => {
    const toyData = useLoaderData();

    const { _id, name, img, price, rating, quantity, subCategory, des, seller, email } = toyData;
    // add toy
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const subCategory = form.category.value;
        const img = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const seller = form.seller.value;
        const quantity = form.quantity.value;
        const des = form.description.value;

        if (isNaN(price)) {
            return toast.warning('Price should be number', {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        }
        if (isNaN(rating)) {
            return toast.warning('Rating should be number', {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        }

        if (parseFloat(rating) > 5) {
            return toast.warning('Rating is less than or equal to 5', {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        }

        if (isNaN(quantity)) {
            return toast.warning('Quantity should be number', {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        }

        const newToy = { name, img, price, rating, subCategory, quantity, des, seller, email }

        fetch(`https://electro-kidz-server.vercel.app/my-toys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('👌 Toy Update Success!', {
                        position: "bottom-center",
                        autoClose: 3000,
                        theme: "light",
                    });
                }
            })
    }
    return (
        <>
            <Helmet>
                <title>ElectroKidz | Edit Toy page</title>
            </Helmet>
            <section className='py-16'>
                <div className='container'>
                    <div data-aos="fade-up" className='lg:w-4/5 mx-auto rounded-lg shadow-custom p-6'>
                        <h1 className='text-center text-3xl font-bold mb-10 text-navy drop-shadow-lg'>Add Toys</h1>

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
                                        defaultValue={name}
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
                                        defaultValue={subCategory}
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
                                        defaultValue={price}
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
                                        defaultValue={quantity}
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
                                        defaultValue={rating}
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
                                    defaultValue={img}
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
                                    defaultValue={des}
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
                                        defaultValue={seller}
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
                                        defaultValue={email}
                                        placeholder='Enter your email'
                                        required
                                    />
                                </div>

                                <button type='submit' className="btn_primary w-full mt-5 md:mt-0">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditToy;