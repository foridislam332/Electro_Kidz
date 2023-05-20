import React, { useContext, useRef } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const EditProfile = () => {
    const nameRef = useRef(null);
    const photoRef = useRef(null);
    const { user, profileUpdate } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        profileUpdate(user, name, photo)
            .then(() => {
                toast.success('👌 Profile Update Success!', {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                });
            })
            .then(error => {
                console.log(error.message)
            })
    }
    return (
        <>
            <Helmet>
                <title>ElectroKidz | Edit Profile page</title>
            </Helmet>
            <section className='py-16 lg:py-[120px]'>
                <div className='container'>
                    <div className='w-[450px] mx-auto rounded-lg shadow-custom p-6'>
                        <h1 className='text-center text-3xl font-bold mb-10'>Edit your profile</h1>

                        <form onSubmit={handleSubmit}>
                            {/* Email field */}
                            <div className='flex flex-col w-full'>
                                <label className='text-navy font-bold' htmlFor="name">Full Name :</label>
                                <input
                                    ref={nameRef}
                                    onClick={() => nameRef.current.setSelectionRange(0, nameRef.current.value.length)}
                                    id='name'
                                    className='w-full border border-blue focus:border-pink outline-none pl-4 py-3 mt-1 rounded-lg'
                                    type="text"
                                    name='name'
                                    defaultValue={user.displayName}
                                    placeholder='Enter your full name'
                                />
                            </div>

                            {/* photo url field */}
                            <div className='flex flex-col w-full mt-3'>
                                <label className='text-navy font-bold' htmlFor="photo">Photo URL :</label>
                                <input
                                    ref={photoRef}
                                    onClick={() => photoRef.current.setSelectionRange(0, photoRef.current.value.length)}
                                    id='photo'
                                    className='w-full border border-blue focus:border-pink outline-none px-4 py-3 mt-1 rounded-lg'
                                    type="text"
                                    name='photo'
                                    defaultValue={user.photoURL}
                                    placeholder='Photo URL'
                                />
                            </div>

                            <button type='submit' className="btn_primary w-full mt-10">Update</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditProfile;