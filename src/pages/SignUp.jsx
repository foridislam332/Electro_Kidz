import React from 'react';

// image
import SignUpImg from '../assets/images/sign-up.jpg';
import GoogleImg from '../assets/images/google.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <section className='py-16 lg:py-[120px]'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center'>
                    <div className='hidden md:block'>
                        <img className='md:w-[450px] lg:w-auto' src={SignUpImg} alt="login" />
                    </div>
                    <div className='w-full'>
                        <form className='w-[450px] mx-auto lg:mx-0 lg:ml-auto rounded-lg shadow-custom p-6' onSubmit={handleSubmit}>
                            <h1 className='text-center text-3xl font-bold mb-10'>Sign Up</h1>

                            {/* name field */}
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="email">Full name :</label>
                                <input
                                    id='name'
                                    className='w-full border border-blue focus:border-pink outline-none pl-4 py-3 mt-1 rounded-lg'
                                    type="text"
                                    name='name'
                                    placeholder='Enter your full name'
                                />
                            </div>
                            {/* email field */}
                            <div className='flex flex-col w-full mt-3'>
                                <label className='text-navy font-bold' htmlFor="email">Email :</label>
                                <input
                                    id='email'
                                    className='w-full border border-blue focus:border-pink outline-none pl-4 py-3 mt-1 rounded-lg'
                                    type="email"
                                    name='email'
                                    placeholder='Enter your email'
                                />
                            </div>

                            {/* Password field */}
                            <div className='flex flex-col w-full mt-3'>
                                <label className='text-navy font-bold' htmlFor="password">Password :</label>
                                <input
                                    id='password'
                                    className='w-full border border-blue focus:border-pink outline-none pl-4 py-3 mt-1 rounded-lg'
                                    type="password"
                                    name='password'
                                    placeholder='Enter your password'
                                />
                            </div>

                            {/* Confirm password field */}
                            <div className='flex flex-col w-full mt-3'>
                                <label className='text-navy font-bold' htmlFor="confirm">Confirm password :</label>
                                <input
                                    id='confirm'
                                    className='w-full border border-blue focus:border-pink outline-none pl-4 py-3 mt-1 rounded-lg'
                                    type="password"
                                    name='confirm'
                                    placeholder='Confirm your password'
                                />
                            </div>

                            {/* image field */}
                            <div className='flex flex-col w-full mt-3'>
                                <label className='text-navy font-bold' htmlFor="photo">Photo URL :</label>
                                <input
                                    id='photo'
                                    className='w-full border border-blue focus:border-pink outline-none pl-4 py-3 mt-1 rounded-lg'
                                    type="password"
                                    name='photo'
                                    placeholder='Enter your photo URL'
                                />
                            </div>

                            <button type='submit' className="btn_primary w-full mt-5">Sign Up</button>
                            <div className='text-center text-navy font-medium my-4 flex items-center gap-4 mx-4'>
                                <span className='block w-full h-[1px] bg-gray-text'></span>
                                OR <span className='block w-full h-[1px] bg-gray-text'></span>
                            </div>
                            <button type='submit' className="w-full bg-white shadow-custom font-bold py-4 rounded-lg border border-blue flex items-center justify-center gap-2">
                                <img className='w-6' src={GoogleImg} alt="google" /> <span>Google Sign Up</span>
                            </button>

                            <p className='text-center mt-4 font-medium text-gray-text'>Already have an account?
                                <Link className='font-bold text-pink' to='/login'> Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;