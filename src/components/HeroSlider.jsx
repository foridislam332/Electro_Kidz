import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper";

// slider bg image
import SliderBg from '../assets/images/slider/bg.jpg';

// slide image
import Slide1 from '../assets/images/slider/toys-1.png';
import Slide2 from '../assets/images/slider/toys-robot.png';
import Slide3 from '../assets/images/slider/toys-2.png';

const HeroSlider = () => {
    return (
        <Swiper
            cssMode={true}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div style={{ backgroundImage: `url(${SliderBg})` }}
                    className="bg-cover bg-no-repeat bg-center md:h-screen flex place-items-center"
                >
                    <div className="container flex flex-col-reverse md:flex-row place-items-center py-16 text-center md:text-left gap-10 md:gap-0">
                        {/* slide content */}
                        <div className='relative z-50 text-white'>
                            <h1 className='text-4xl lg:text-6xl font-bold lg:leading-[80px]'>Best Kids Store for Electronic Toys</h1>

                            <p className="mt-5 mb-14 md:max-w-md text-sm md:text-base">Discover a world of interactive electronic toys at our e-commerce store, where imagination and technology unite for endless fun and entertainment</p>

                            <Link to='/all-toys'>
                                <button className="btn_primary">
                                    Shop Now
                                </button>
                            </Link>

                        </div>
                        <img className="w-72 lg:w-[450px]" src={Slide1} alt="toys" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: `url(${SliderBg})` }}
                    className="bg-cover bg-no-repeat bg-center md:h-screen flex place-items-center"
                >
                    <div className="container flex flex-col-reverse md:flex-row place-items-center justify-between py-16 text-center md:text-left gap-10 md:gap-0">
                        {/* slide content */}
                        <div className='relative z-50 text-white'>
                            <h1 className='text-4xl lg:text-6xl font-bold lg:leading-[80px]'>Embrace the Future with Robot Toys!</h1>

                            <p className="mt-5 mb-14 md:max-w-md text-sm md:text-base">From interactive companions to programmable robots, discover a world of robotic fun and learning.</p>

                            <Link to='/all-toys'>
                                <button className="btn_primary">
                                    Shop Now
                                </button>
                            </Link>

                        </div>
                        <img className="w-64 lg:w-96" src={Slide2} alt="toys-robot" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundImage: `url(${SliderBg})` }}
                    className="bg-cover bg-no-repeat bg-center md:h-screen flex place-items-center"
                >
                    <div className="container flex flex-col-reverse md:flex-row place-items-center py-16 text-center md:text-left gap-10 md:gap-0">
                        {/* slide content */}
                        <div className='relative z-50 text-white'>
                            <h1 className='text-4xl lg:text-6xl font-bold lg:leading-[80px]'>Unlock Adventure with Toys Video Games!</h1>

                            <p className="mt-5 mb-14 md:max-w-md text-sm md:text-base">Discover a world of virtual adventure and interactive playtime with our toys video games collection, where fun and learning go hand-in-hand</p>

                            <Link to='/all-toys'>
                                <button className="btn_primary">
                                    Shop Now
                                </button>
                            </Link>

                        </div>
                        <img className="w-72 lg:w-[450px]" src={Slide3} alt="toys" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSlider;