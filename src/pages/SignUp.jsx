import React, { useContext } from 'react';

// image
import SignUpImg from '../assets/images/sign-up.jpg';
import GoogleImg from '../assets/images/google.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const { createUser, profileUpdate, googleSignIn } = useContext(AuthContext);

    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // create account
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (password.length < 6) {
            return toast.error('Password should be at least 6 characters', {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        }

        createUser(email, password)
            .then((result) => {
                profileUpdate(result.user, name, photo)
                    .then(() => {
                        navigate(from, { replace: true })
                    }).catch((error) => {
                        toast.error(error.message, {
                            position: "top-center",
                            autoClose: 3000,
                            theme: "light",
                        });
                    });
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                });
            })
    }

    // google sign up
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
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
        <>
            <Helmet>
                <title>ElectroKidz | Toy Details page</title>
            </Helmet>
            <section className='py-16'>
                <div className='container'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center'>
                        <div data-aos="zoom-out-right" className='hidden md:block'>
                            <img className='md:w-[450px] lg:w-auto' src={SignUpImg} alt="login" />
                        </div>

                        <div data-aos="zoom-in" className='w-full'>
                            <div className='w-[450px] mx-auto lg:mx-0 lg:ml-auto rounded-lg shadow-custom p-6'>
                                <h1 className='text-center text-3xl font-bold mb-10'>Sign Up</h1>

                                <form onSubmit={handleSubmit}>
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

                                    {/* image field */}
                                    <div className='flex flex-col w-full mt-3'>
                                        <label className='text-navy font-bold' htmlFor="photo">Photo URL :</label>
                                        <input
                                            id='photo'
                                            className='w-full border border-blue focus:border-pink outline-none pl-4 py-3 mt-1 rounded-lg'
                                            type="text"
                                            name='photo'
                                            placeholder='Enter your photo URL'
                                        />
                                    </div>

                                    <button type='submit' className="btn_primary w-full mt-5">Sign Up</button>
                                </form>

                                <div className='text-center text-navy font-medium my-4 flex items-center gap-4 mx-4'>
                                    <span className='block w-full h-[1px] bg-gray-text'></span>
                                    OR <span className='block w-full h-[1px] bg-gray-text'></span>
                                </div>
                                <button onClick={handleGoogleSignIn} className="w-full bg-white shadow-custom font-bold py-4 rounded-lg border border-blue flex items-center justify-center gap-2">
                                    <img className='w-6' src={GoogleImg} alt="google" /> <span>Google Sign Up</span>
                                </button>

                                <p className='text-center mt-4 font-medium text-gray-text'>Already have an account?
                                    <Link className='font-bold text-pink' to='/login'> Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;