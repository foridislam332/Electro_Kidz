import React from 'react';

const GalleryCard = ({ toy }) => {
    const { image, title, description } = toy;
    return (
        <div className="bg-navy text-white rounded-lg p-4 md:flex flex-col relative hover:scale-110 shadow-lg hover:shadow-lightBlue transition-all duration-300 ease-in-out group">
            <div className='p-4'>
                <img src={image} alt={title} className="h-52 mb-4 m-auto relative group-hover:scale-110 transition-all duration-300 ease-in-out" />
            </div>
            <div className='border border-blue rounded-lg p-3 flex-1'>
                <h3 className="text-lg mb-2 text-blue font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GalleryCard;