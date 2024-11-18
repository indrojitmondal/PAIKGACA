import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { MdHome } from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";
import { IoLogIn } from "react-icons/io5";
import { FaRegRegistered } from "react-icons/fa";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Profile from './Profile';
import PrivateRoute from '../routes/PrivateRoute';
import { CgProfile } from "react-icons/cg";
const Navbar = () => {

    const { user, setUser } = useContext(AuthContext);

    const links = <div className='flex md:text-lg flex-col md:flex-row gap-4 md:gap-10'>
        <NavLink className='flex items-center gap-1' ><MdHome /> Home</NavLink>
        <NavLink className='flex items-center gap-1'  ><TbBrandAirtable /> Brand</NavLink>
         
         {
            user?
                <NavLink to={'/my-profile'} className='flex items-center gap-1'> <CgProfile />  My Profile
                </NavLink> : 
                ""
         }

        <NavLink className='flex items-center gap-1' ><TbArrowRoundaboutRight />About Us</NavLink>

    </div>
    return (
        <div className='md:w-11/12 mx-auto'>
            <div className="navbar   bg-base-100">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {links}

                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    <img className=" w-32 h-32 md:w-40 md:h-40 " src={logo} alt="logo" />
                </div>
                <div className="navbar-center hidden lg:flex">

                  
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {
                    user ?



                        <div className="navbar-end md:text-lg flex gap-5 items-center">



                            <Profile></Profile>


                        </div> :
                        <div className="navbar-end text-lg flex gap-5 items-center">



                            <Link to={'/login'} className='flex items-center gap-1'> <IoLogIn /> Login</Link>
                            <Link className='flex items-center gap-1'> <FaRegRegistered /> Register</Link>


                        </div>



                }
            </div>
        </div>
    );
};

export default Navbar;