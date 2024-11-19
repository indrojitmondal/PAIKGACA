import React from 'react';
import oops from '../assets/oops.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='w-8/12 mx-auto'>
               <img src={oops} alt="" />
               <h2 className='text-xl'>Not Found Page</h2>
               <Link to={'/'} className='btn'>Back to  Home</Link>
        </div>
    );
};

export default ErrorPage;