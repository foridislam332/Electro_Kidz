import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Loader from '../../components/Loader';

const BestProducts = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://electro-kidz-server.vercel.app/all-toys')
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    const sortData = data.sort((a, b) => b.rating - a.rating)
                    setToys(sortData.slice(0, 4))
                }
            })
    }, [])
    let content;
    if (toys.length === 0) {
        content = <Loader />
    }
    else if (toys.length > 0) {
        content = <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
            {
                toys.map(toy => <ProductCard key={toy._id} toy={toy} />)
            }
        </div>
    }
    return (
        <section className='py-16 md:py-20'>
            <div className="container">
                {/* section top */}
                <div className='text-center'>
                    <p className='text-blue md:text-xl tracking-widest drop-shadow-md'>Best Sales</p>
                    <h1 className='text-3xl md:text-4xl font-bold text-navy drop-shadow-md'>Best Products</h1>
                </div>

                {content}
            </div>
        </section>
    );
};

export default BestProducts;