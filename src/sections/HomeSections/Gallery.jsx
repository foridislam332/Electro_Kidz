import React from 'react';
import GalleryCard from '../../components/GalleryCard';

const Gallery = () => {
    const toyCards = [
        {
            id: 1,
            image: "https://i.ibb.co/ynjpBBB/toy-8.png",
            title: "Electronic Car Toy"
        },
        {
            id: 2,
            image: "https://i.ibb.co/WGwBHCY/robot-2.png",
            title: "Interactive Robot Toy"
        },
        {
            id: 3,
            image: "https://i.ibb.co/728RY5g/toys-3.png",
            title: "Electronic Gun Toy"
        },
        {
            id: 4,
            image: "https://i.ibb.co/n0h94MF/toys-5.png",
            title: "Game Master Interactive"
        },
        {
            id: 5,
            image: "https://i.ibb.co/rxYp3tN/toy-1.png",
            title: "Sky Master Helicopter"
        },
        {
            id: 6,
            image: "https://i.ibb.co/pjkV2GL/toys-6.png",
            title: "Aero Speed Airplane"
        },
        {
            id: 7,
            image: "https://i.ibb.co/SPYrLNj/7.png",
            title: "Electro Speed Train"
        },
        {
            id: 8,
            image: "https://i.ibb.co/6gzhpbD/8.png",
            title: "Electronic Car Toy"
        }
    ];
    return (
        <section className='py-16 md:py-[120px]'>
            <div className="container">
                {/* gallery section top */}
                <div className='text-center'>
                    <p className='text-blue md:text-xl tracking-widest drop-shadow-md'>Gallery</p>
                    <h1 className='text-3xl md:text-4xl font-bold text-navy drop-shadow-md'>Our Toys Gallery</h1>
                </div>

                {/* gallery card */}
                <div className='grid grid-cols-1 md:grid-cols-4 mt-12'>
                    {
                        toyCards.map(toy => <GalleryCard key={toy.id} toy={toy} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Gallery;