import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import MyToyCard from '../components/MyToyCard';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/my-toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <section className='py-16'>
            <div className='container'>
                {/* section top */}
                <div className='text-center'>
                    <p className='text-blue md:text-xl tracking-widest drop-shadow-md'>See</p>
                    <h1 className='text-3xl md:text-4xl font-bold text-navy drop-shadow-md'>My Toys</h1>
                </div>

                <div className='grid grid-cols-1 gap-6 mt-12'>
                    {
                        toys.map(toy => <MyToyCard
                            key={toy._id}
                            toy={toy}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyToys;