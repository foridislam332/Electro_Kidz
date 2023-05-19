import React, { useEffect, useState } from 'react';
import ToyCard from '../components/ToyCard';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch(`https://electro-kidz-server.vercel.app/all-toys?search=${searchTerm}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [searchTerm])

    return (
        <section className='py-16'>
            <div className="container">
                {/* section top */}
                <div className='text-center'>
                    <p className='text-blue md:text-xl tracking-widest drop-shadow-md'>Shop</p>
                    <h1 className='text-3xl md:text-4xl font-bold text-navy drop-shadow-md'>All Toys</h1>
                </div>

                {/* filter toys */}
                <div className='flex items-center justify-center mt-12 mb-8'>
                    {/* search area */}
                    <input
                        className='md:w-96 px-3 py-2 border border-pink focus:border-blue outline-none rounded-tl-3xl rounded-bl-3xl'
                        type="text"
                        placeholder='Search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className='bg-pink hover:bg-blue border border-pink hover:border-blue px-5 py-2 text-white rounded-tr-3xl rounded-br-3xl duration-300'
                    >
                        Search
                    </button>
                </div>

                {/* toy card */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        toys.map(toy => <ToyCard key={toy._id} toy={toy} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllToys;