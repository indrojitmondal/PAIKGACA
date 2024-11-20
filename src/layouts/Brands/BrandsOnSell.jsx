import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import SellCard from '../../components/SellCard';

const BransOnSell = () => {

    const [brands, setBrands] = useState([]);
    useEffect( ()=>{

        fetch('/coupons.json')
        .then( res=> res.json())
        .then (data=> setBrands(data));

    },[])
    
    
    return (
        <div className='mt-20 mx-5'>
            <h2 className='text-xl text-center font-bold'>BRANDS ON SELL</h2>

            <div className='my-8'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                  
                   
                  
                   {
                     brands.filter( brand => brand.isSaleOn == true)
                     .map( brand => <SellCard key={brand._id} brand={brand} ></SellCard> )
                   
                     
                   }

                

                
                </div>
            </div>

        </div>
    );
};

export default BransOnSell;