import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import MyToyCard from '../components/MyToyCard';
import Loader from '../components/Loader';
import Swal from 'sweetalert2';
import MyToyTableRow from '../components/MyToyTableRow';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://electro-kidz-server.vercel.app/my-toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    // delete toy
    const handleDelete = (id) => {
        const url = `https://electro-kidz-server.vercel.app/my-toys/${id}`;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining)
                        }

                    })
            }
        })

    }

    let content;

    if (toys.length === 0) {
        content = <Loader />
    }

    else if (toys.length > 0) {
        content = toys.map(toy => <MyToyTableRow
            key={toy._id}
            toy={toy}
            handleDelete={handleDelete}
        />)
    }

    // <div className='grid grid-cols-1 gap-6 mt-12'>
    //         {
    //             toys.map(toy => <MyToyCard
    //                 key={toy._id}
    //                 toy={toy}
    //                 handleDelete={handleDelete}
    //             />)
    //         }
    //     </div>

    return (
        <section className='py-16'>
            <div className='container'>
                {/* section top */}
                <div className='text-center'>
                    <p className='text-blue md:text-xl tracking-widest drop-shadow-md'>Manage</p>
                    <h1 className='text-3xl md:text-4xl font-bold text-navy drop-shadow-md'>My Toys</h1>
                </div>

                {/* toy table */}
                <div className='overflow-x-auto mt-12'>
                    <table className="table w-full border border-blue">
                        <thead>
                            <tr className="bg-blue text-white uppercase leading-normal">
                                <th className="py-3 px-4 text-left">Photo</th>
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-2 text-left">Seller</th>
                                <th className="py-3 px-2 text-left">Sub-category</th>
                                <th className="py-3 px-2 text-center">Price</th>
                                <th className="py-3 px-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 font-medium">
                            {content}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MyToys;