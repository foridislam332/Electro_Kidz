import React, { useContext } from 'react';

// image
import LoginImg from '../assets/images/login.jpg';
import GoogleImg from '../assets/images/google.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);

    // email sign in
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            return toast.error('Password should be at least 6 characters', {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        }

        signIn(email, password)
            .then(() => {

            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                });
            })
    }

    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {

            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                });
            })
    }
    return (
        <section className='py-16 lg:py-[120px]'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center'>
                    <div className='hidden md:block'>
                        <img className='md:w-[450px] lg:w-auto' src={LoginImg} alt="login" />
                    </div>
                    <div className='w-full'>
                        <div className='w-[450px] mx-auto lg:mx-0 lg:ml-auto rounded-lg shadow-custom p-6'>
                            <h1 className='text-center text-3xl font-bold mb-10'>Please Login</h1>

                            <form onSubmit={handleSubmit}>
                                {/* Email field */}
                                <div className='flex flex-col w-full'>
                                    <label className='text-navy font-bold' htmlFor="email">Email :</label>
                                    <input
                                        id='email'
                                        className='w-full border border-blue focus:border-pink outline-none pl-4 py-3 mt-1 rounded-lg'
                                        type="email"
                                        name='email'
                                        placeholder='Enter your email'
                                        required
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
                                        required
                                    />
                                </div>

                                <button type='submit' className="btn_primary w-full mt-5">Login</button>
                            </form>

                            <div className='text-center text-navy font-medium my-4 flex items-center gap-4 mx-4'>
                                <span className='block w-full h-[1px] bg-gray-text'></span>
                                OR <span className='block w-full h-[1px] bg-gray-text'></span>
                            </div>
                            <button onClick={handleGoogleSignIn} className="w-full bg-white shadow-custom font-bold py-4 rounded-lg border border-blue flex items-center justify-center gap-2">
                                <img className='w-6' src={GoogleImg} alt="google" /> <span>Google Login</span>
                            </button>

                            <p className='text-center mt-4 font-medium text-gray-text'>New to Electro Kidz?
                                <Link className='font-bold text-pink' to='/sign-up'> Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;