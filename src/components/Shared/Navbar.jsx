import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import ActiveLink from "../ActiveLink";
import MobileNav from "./MobileNav";

// react icons
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { TfiClose } from 'react-icons/tfi';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const [scrollNav, setScrollNav] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 40) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);
    return (
        <header>
            <TopBar />
            <nav className={`shadow-lg w-full z-50 transition-all duration-300 ease-in-out ${scrollNav ? 'fixed top-0' : ''}`}>
                <div className="container">
                    <div className={`flex items-center justify-between transition-all duration-300 ease-in-out ${scrollNav ? 'h-20' : 'h-24'}`}>
                        {/* logo */}
                        <Link to='/'>ElectroKidz</Link>


                        {/* bars icons */}
                        <button className="inline-block lg:hidden" onClick={() => setShow(!show)}>
                            <HiBars3BottomRight className="text-navy hover:text-pink duration-300" size={28} />
                        </button>

                        <ul className="hidden lg:flex items-center gap-6">
                            <li>
                                <ActiveLink to='/'>Home</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to='/all-toys'>All Toys</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to='/blog'>Blog</ActiveLink>
                            </li>
                        </ul>

                        <ul className="hidden lg:flex items-center gap-6">
                            <li>
                                <AiOutlineHeart size={24} />
                            </li>
                            <li>
                                <AiOutlineShoppingCart size={24} />
                            </li>
                            <li>
                                <ActiveLink to='/login'>
                                    <button className="btn_primary">Login</button>
                                </ActiveLink>
                            </li>
                        </ul>

                        {/* responsive nav */}
                        <MobileNav show={show} toggle={() => setShow(!show)} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;