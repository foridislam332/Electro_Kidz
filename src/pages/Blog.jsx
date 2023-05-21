import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>ElectroKidz | Blog page</title>
            </Helmet>

            <section className='py-12'>
                <div className="container">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
                        <div className='shadow-xl p-4 rounded-lg hover:shadow-lightBlue transition-all duration-300 ease-in-out'>
                            <h2 className='text-2xl mb-2 text-navy'><span className='font-semibold text-pink'>Question : </span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

                            <p> <span className='text-blue font-semibold text-xl'>Answer : </span> An access token and a refresh token are both commonly used in authentication and authorization systems to grant and manage access to protected resources. Here's an explanation of each and how they work:</p>

                            <p className='mt-2'><span className='font-medium underline'>Access Token:</span> An access token is a credential that is issued by an authentication server upon successful authentication.</p>

                            <p className='mt-2'><span className='font-medium underline'>Refresh Token:</span> A refresh token is also issued by the authentication server, usually alongside the access token.</p>
                        </div>

                        <div className='shadow-xl p-4 rounded-lg hover:shadow-lightBlue transition-all duration-300 ease-in-out'>
                            <h2 className='text-2xl mb-2 text-navy'><span className='font-semibold text-pink'>Question : </span> Compare SQL and NoSQL databases?</h2>

                            <p> <span className='text-blue font-semibold text-xl'>Answer : </span> SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database management systems that differ in their data models, querying languages, and overall approach to handling data.</p>

                            <p className='mt-2'><span className='font-medium underline'>SQL databases:</span> SQL databases use a structured data model based on tables with predefined schemas. </p>

                            <p className='mt-2'><span className='font-medium underline'>NoSQL databases:</span> NoSQL databases use a variety of data models, including key-value, document, columnar, and graph. </p>
                        </div>
                        <div className='shadow-xl p-4 rounded-lg hover:shadow-lightBlue transition-all duration-300 ease-in-out'>
                            <h2 className='text-2xl mb-2 text-navy'><span className='font-semibold text-pink'>Question : </span> What is express js? What is Nest JS?</h2>

                            <p> <span className='text-blue font-semibold text-xl'>Answer : </span> Express.js and Nest.js are both popular web application frameworks based on JavaScript/TypeScript. Here's an overview of each:</p>

                            <p className='mt-2'><span className='font-medium underline'>Express.js:</span> Express.js is a minimalistic and flexible web framework for Node.js. It provides a simple, unopinionated approach to building web applications and APIs.</p>

                            <p className='mt-2'><span className='font-medium underline'>Nest.js:</span> Nest.js is a progressive, opinionated framework for building scalable and maintainable server-side applications. It is built with TypeScript and takes inspiration from Angular's architecture and concepts.</p>

                        </div>
                        <div className='shadow-xl p-4 rounded-lg hover:shadow-lightBlue transition-all duration-300 ease-in-out'>
                            <h2 className='text-2xl mb-2 text-navy'><span className='font-semibold text-pink'>Question : </span> What is MongoDB aggregate and how does it work?</h2>

                            <p> <span className='text-blue font-semibold text-xl'>Answer : </span> MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It provides a flexible and powerful way to process and analyze data within the database. </p>

                            <p className='mt-2'><span className='font-medium underline'>$match:</span> Filters the documents based on specified criteria, similar to the find method.</p>

                            <p className='mt-2'><span className='font-medium underline'>$sort:</span> Sorts the documents based on one or more fields in ascending or descending order.</p>

                            <p className='mt-2'><span className='font-medium underline'>$limit and $skip:</span> Control the number of documents returned by limiting or skipping a certain number of documents.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;