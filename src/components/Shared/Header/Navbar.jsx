import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink";
import MobileNav from "./MobileNav";

// react icons
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { HiBars3BottomRight } from 'react-icons/hi2';
import UserProfile from "./UserProfile";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { user } = useContext(AuthContext);
    return (
        <nav className='shadow-lg w-full z-50 transition-all duration-300 ease-in-out bg-white'>
            <div className="container">
                <div className="h-24 flex items-center justify-between">
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

                        {
                            user ? <UserProfile user={user} /> : <li>
                                <Link to='/login'>
                                    <button className="btn_primary">Login</button>
                                </Link>
                            </li>
                        }
                    </ul>

                    {/* responsive nav */}
                    <MobileNav show={show} toggle={() => setShow(!show)} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;