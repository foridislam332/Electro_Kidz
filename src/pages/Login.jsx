import React from 'react';

// image
import LoginImg from '../assets/images/login.jpg';
import GoogleImg from '../assets/images/google.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <section className='py-16 lg:py-[120px]'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center'>
                    <div className='hidden md:block'>
                        <img className='md:w-[450px] lg:w-auto' src={LoginImg} alt="login" />
                    </div>
                    <div className='w-full'>
                        <form className='w-[450px] mx-auto lg:ml-auto rounded-lg shadow-custom p-6' onSubmit={handleSubmit}>
                            <h1 className='text-center text-3xl font-bold mb-10'>Please Login</h1>
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="email">Email :</label>
                                <input
                                    id='email'
                                    className='w-full border border-blue focus:border-pink outline-none pl-4 py-3 mt-1 rounded-lg'
                                    type="email"
                                    name='email'
                                    placeholder='Enter your email'
                                />
                            </div>
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

                            <button type='submit' className="btn_primary w-full mt-5">Login</button>
                            <div className='text-center text-navy font-medium my-4 flex items-center gap-4 mx-4'>
                                <span className='block w-full h-[1px] bg-gray-text'></span>
                                OR <span className='block w-full h-[1px] bg-gray-text'></span>
                            </div>
                            <button type='submit' className="w-full bg-white shadow-custom font-bold py-4 rounded-lg border border-blue flex items-center justify-center gap-2">
                                <img className='w-6' src={GoogleImg} alt="google" /> <span>Google Login</span>
                            </button>

                            <p className='text-center mt-4 font-medium text-gray-text'>New to Electro Kidz?
                                <Link className='font-bold text-pink' to='/sign-up'> Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;