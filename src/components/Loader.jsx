import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='h-96 flex items-center justify-center'>
            <ThreeCircles
                height="100"
                width="100"
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#81d1e5"
                innerCircleColor="#183a5c"
                middleCircleColor="#ff8087"
            />
        </div>
    );
};

export default Loader;