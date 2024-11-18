import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { MdHome } from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";
import { IoLogIn } from "react-icons/io5";
import { FaRegRegistered } from "react-icons/fa";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Profile from './Profile';
import PrivateRoute from '../routes/PrivateRoute';
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {

    const { user, setUser } = useContext(AuthContext);
    const location = useLocation();
    const path= location.pathname;
    // console.log(path);

    const links = <div className='flex md:text-lg justify-center py-5 md:py-0 gap-5 md:gap-10'>
        <NavLink className='flex items-center gap-1' ><MdHome /> Home</NavLink>
        <NavLink to={'/brands'} className='flex items-center gap-1'  ><TbBrandAirtable /> Brand</NavLink>
         
         {
            user?
                <>
                 <NavLink to={'/my-profile'} className='flex items-center gap-1'> <CgProfile />  My Profile
                </NavLink> 

                </>
               
                : 
                ""
         }

        <NavLink className='flex items-center gap-1' ><TbArrowRoundaboutRight />About Dev</NavLink>

    </div>
    return (
        <div className=''>
            <div className="navbar text-white    bg-[#036544]">
                <div className=" navbar-start">
                    <div className="">
                        {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        </div> */}
                        
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    <img className=" w-32 h-24 md:w-40 md:h-40 " src={logo} alt="logo" />
                </div>
                <div className="navbar-center hidden  lg:flex lg:flex-col">

                    
                    
                    
                    
                      { 
                       path =='/brands' &&
                      
                      <div className=" form-control relative mt-4  mx-auto w-[300px]">
                                 <input type="text" placeholder="Search Brand" className="input text-black   input-bordered " />
                                 
                                 <button className='absolute right-3 top-4'>
                                  <IoSearch className=' text-primary' />
                                 </button>
                                
                      </div>  
                      }

                    <div className=' '>
                       <ul className="menu menu-horizontal px-1">
                        {links}
                       </ul>
                     </div>

                     
 
                      
                  

                    

                   
                </div>

                {
                    user ?



                        <div className="navbar-end md:text-lg flex gap-5 items-center">



                            <Profile></Profile>


                        </div> :
                        <div className="navbar-end mr-4 text-lg flex gap-5 items-center">



                            <Link to={'/login'} className='flex items-center gap-1'> <IoLogIn /> Login</Link>
                            <Link to={'/register'} className='flex items-center gap-1'> <FaRegRegistered /> Register</Link>


                        </div>



                }
            </div>

            <div className='text-white  lg:hidden   bg-[#036544]'>
                
               
               <div className=' '>
                   {links}
               </div>

                {
                    path =='/brands' &&
                    <div className=" form-control pb-3 relative  mx-auto w-[300px]">
                                 <input type="text" placeholder="Search Brand" className="input text-black   input-bordered " />
                                 
                                 <button className='absolute right-3 top-8'>
                                  <IoSearch className=' text-primary' />
                                 </button>
                                
                      </div> 
                }
               
              
               
               
             
            </div>
        </div>
    );
};

export default Navbar;