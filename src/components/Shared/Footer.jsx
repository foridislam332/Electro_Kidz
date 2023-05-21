import { Link } from 'react-router-dom';

// logo
// import Logo from '../../assets/images/logo-w.png';
import Payment from '../../assets/images/payment.webp';

// react icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";

// logo
import Logo from '../../assets/images/logo-w.png';

const Footer = () => {
    return (
        <section className='bg-[#272727]'>
            <div className='container px-4 md:px-8 lg:px-16 xl:px-20 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-24 py-20 md:py-[120px]'>

                    <div className='md:col-span-2 md:border-r border-[#3D3D3D]'>
                        <div className='md:max-w-xs'>
                            {/* Logo */}
                            <Link to="/" className="flex-shrink-0">
                                <img className='w-48' src={Logo} alt="Electro-Kidz" />
                            </Link>
                            <p className='text-[#7B7B7B] text-[15px] mt-8 mb-12'>ElectroKidz is a vibrant and innovative brand that brings a world of electronic toys to life.</p>

                            <div className='flex items-center gap-4 text-[#FAFAFA]'>
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                                <FaBehance />
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {/* Navigation */}
                        <div>
                            <p className='text-[#FAFAFA] font-semibold text-lg leading-7 mb-4 md:mb-8'>Navigation</p>

                            <ul className='flex flex-col gap-4'>
                                <li>
                                    <Link className='text-[#7B7B7B] hover:text-[#FAFAFA] duration-300' to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link className='text-[#7B7B7B] hover:text-[#FAFAFA] duration-300' to='/all-toys'>All Toys</Link>
                                </li>
                                <li>
                                    <Link className='text-[#7B7B7B] hover:text-[#FAFAFA] duration-300' to='/blog'>Blog</Link>
                                </li>
                                <li>
                                    <Link className='text-[#7B7B7B] hover:text-[#FAFAFA] duration-300' to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Information */}
                        <div>
                            <p className='text-[#FAFAFA] font-semibold text-lg leading-7 mb-4 md:mb-8'>Information</p>

                            <ul className='flex flex-col gap-4'>
                                <li>
                                    <Link className='text-[#7B7B7B] hover:text-[#FAFAFA] duration-300' to='/'>Secure Payment</Link>
                                </li>
                                <li>
                                    <Link className='text-[#7B7B7B] hover:text-[#FAFAFA] duration-300' to='/delivery'>Delivery</Link>
                                </li>
                                <li>
                                    <Link className='text-[#7B7B7B] hover:text-[#FAFAFA] duration-300' to='/terms'>Terms And Conditions</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Find Us */}
                        <div>
                            <p className='text-[#FAFAFA] font-semibold text-lg leading-7 mb-4 md:mb-8'>Find Us</p>

                            <div className='flex flex-col gap-4'>
                                <p className='text-[#7B7B7B] hover:text-[#FAFAFA] transition-all duration-300'>Greenwich Village & <br /> Soho, 10012 New York, USA</p>

                                <p className='text-[#7B7B7B] hover:text-[#FAFAFA] transition-all duration-300'>800 123-456 <br /> electro.kidz@electro.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-5'>
                    <img className='mx-auto' src={Payment} alt="payment-system" />
                </div>
                <div className='border-t border-[#3D3D3D] text-center md:text-left'>
                    <p className='py-8 text-[#7B7B7B] text-[15px] font-medium'>© 2023 Copyright by <Link to='/' className='font-bold text-white'>AzazTheme</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Footer;