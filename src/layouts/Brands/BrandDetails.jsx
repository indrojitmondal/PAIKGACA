import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import CouponCard from '../../components/CouponCard';
const BrandDetails = () => {
    const param = useParams();
    // console.log('Hello Params:', param.id);
    const desiredId = param.id;
    // const [brands, setBrands]= useState([]);
    // useEffect(()=>{
    // fetch('/coupons.json')
    // .then(res => res.json())
    // .then(data => setBrands(data));

    // },[]);
    const brands = useLoaderData();

    const desiredBrand = brands.find(brand => brand._id == desiredId);
    // console.log('Desired Brand:', desiredBrand);

    const { brand_name, rating, description, brand_logo, coupons, shop_link,
        category, isSaleOn } = desiredBrand;



    return (
        <div className='min-h-[420px]'>
            <Helmet>
                <title>Paikgaca | Brand-Details</title>
            </Helmet>
            <div className='bg-b1 border-t py-5 border-white text-white'>
                <h2 className='text-center text-2xl'>Brand Details</h2>
            </div>
            <div className='lg:w-3/12 mx-auto mt-4 space-y-2 '>

                <h2 className='text-xl font-bold'>{brand_name}</h2>
                <img src={brand_logo} alt="" />

                <div className='flex items-center gap-3'>


                    <ReactStars count={5}

                        size={24}
                        activeColor="#ffd700"
                        value={rating}
                    >   </ReactStars>
                    {rating}

                </div>

            </div>

            <div className='my-5 mx-5 grid lg:grid-cols-3 gap-5'>

                {
                    coupons.map(coupon => <CouponCard key={coupon.coupon_code} coupon={coupon} ></CouponCard>)
                }
               

            </div>
            <div className='mb-4 flex justify-center'>
                 <Link target='_blank' to={shop_link} className='btn bg-green-500 '>use Now</Link>
               </div>

           



        </div>
    );
};

export default BrandDetails;