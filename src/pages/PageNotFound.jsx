import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <Helmet>
                <title>ElectroKidz | 404 Page Not Found</title>
            </Helmet>
            <section className='h-screen flex flex-col items-center justify-center'>
                <div className='w-64 md:w-96'>
                    <img className='w-full' src="https://i.ibb.co/nsXxDFc/404.jpg" alt="404" />
                </div>

                <Link className='btn_primary' to='/'>Back To Home</Link>
            </section>
        </>
    );
};

export default PageNotFound;