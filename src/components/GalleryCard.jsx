import React from 'react';

const GalleryCard = ({ toy }) => {
    const { image, title } = toy;
    return (
        <div className="h-64 bg-white p-14 md:flex flex-col relative hover:scale-110 border border-blue hover:border-pink z-10 hover:z-40 transition-all duration-300 ease-in-out group">
            <img src={image} alt={title} className="h-full mb-4 m-auto relative group-hover:scale-125 transition-all duration-300 ease-in-out" />

            <div className='absolute w-full left-0 bottom-0 py-3 text-center scale-0 origin-center group-hover:scale-100 transition-all duration-300 ease-in-out'>
                <h2 className='text-blue font-bold'>{title}</h2>
            </div>
        </div>
    );
};

export default GalleryCard;