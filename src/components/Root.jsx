import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Root = () => {
    return (
        <div>
             <Helmet>
                <title>Paikgaca </title>
             </Helmet>
              <Navbar></Navbar>
              <div className=''>
                  <Outlet></Outlet>
              </div>
              <Footer></Footer>
        </div>
    );
};

export default Root;