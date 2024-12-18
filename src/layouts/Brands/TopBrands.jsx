import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const TopBrands = () => {

    const [coupons, setCoupons] = useState([]);
    useEffect( ()=>{

        fetch('/coupons.json')
        .then( res=> res.json())
        .then (data=> setCoupons(data));

    },[])
    return (
        <div className='mt-10'>
            <h2 className='text-xl text-center font-bold animate__animated animate__bounce animate__delay-2s '>TOP BRANDS</h2>

            <div className='mt-8'>
                <Marquee pauseOnHover='true' speed={100}>
                  
                   
                  
                   {
                     coupons.filter( coupon => coupon.rating > 4.5)
                     .map( coupon => <Link to={`/brand/${coupon._id}`} key={coupon._id}> <img className='w-[200px] h-[200px]' key={coupon._id} src={coupon.brand_logo}></img> </Link> )
                   
                     
                   }

                

                
                </Marquee>
            </div>

        </div>
    );
};

export default TopBrands;