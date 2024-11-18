import React, { useEffect, useState } from 'react';

import TopBrands from '../layouts/Brands/TopBrands';
import { Helmet } from 'react-helmet';
import Card from '../components/Card';



const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect( ()=>{

        fetch('/coupons.json')
        .then( res=> res.json())
        .then (data=> setBrands(data));

    },[])
    return (
        <div>

            <Helmet>
                <title>Paikgaca | Brands</title>
            </Helmet>

            

           
            <div className=''>

                {/* <h2  className='text-center  lg:text-xl'>All Brands</h2> */}

                {
                    brands.map( brand => <Card key={brand._id} brand={brand} ></Card>)
                }
                 
           
            </div>
            
        </div>
    );
};

export default Brands;