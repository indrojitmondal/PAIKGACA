import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const TopBrands = () => {

    const [coupons, setCoupons] = useState([]);
    useEffect( ()=>{

        fetch('/coupons.json')
        .then( res=> res.json())
        .then (data=> setCoupons(data));

    },[])
    return (
        <div className='mt-5'>
            <h2 className='text-lg text-center font-bold'>Top Brands</h2>

            <div className='mt-4'>
                <Marquee pauseOnHover='true'>
                  
                   
                   {
                     coupons.map( coupon => <img className='w-[200px] h-[200px]' key={coupon._id} src={coupon.brand_logo}></img> )
                   }
                
                </Marquee>
            </div>

        </div>
    );
};

export default TopBrands;