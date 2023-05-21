import React from 'react';
import { Link } from 'react-router-dom';

// deal bg
import DealBg from '../../assets/images/deal-bg.svg';

const Deal = () => {
    return (
        <section style={{ backgroundImage: `url(${DealBg})` }} className='py-28 bg-cover bg-center bg-no-repeat'>
            <div className='container'>
                <div data-aos="zoom-in" className='text-center'>
                    <h1 className='text-5xl text-black font-bold mb-3'>Deal Of The Day</h1>

                    <h3 className='text-3xl font-semibold mb-4'><span className='text-white font-bold'>Up to 35%</span> Off on All Other Car Toys!</h3>

                    <p className='mb-14 md:w-2/4 mx-auto'>Attention all parents and caregivers! We have an incredible offer for you. For a limited time only, enjoy up to 35% off on all other Car Toys.</p>

                    <Link to="/all-toys">
                        <button className="btn_primary">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Deal;