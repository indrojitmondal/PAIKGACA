import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Wave } from 'react-animated-text';
import { Link } from 'react-router-dom';

const Card = ({ brand }) => {
    // console.log('Hello', brand);
    const { brand_logo, brand_name, rating, description, isSaleOn } = brand;
    return (
        <div className='lg:w-10/12 border border-green-500 grid grid-cols-2 rounded-md  p-4  gap-4 lg:justify-between  items-center  mx-auto my-8'>
            <div className="left ">
                <img className='w-40 h-40 rounded-xl hover:rotate-2 lg:w-96 lg:h-96' src={brand_logo} alt="" />
                <h2 className='text-xl '>{brand_name}</h2>


                <div className='flex items-center gap-3'>


                    <ReactStars count={5}

                        size={24}
                        activeColor="#ffd700"
                        value={rating}
                    >   </ReactStars>
                    {rating}

                </div>

            </div>

            <div className="middle flex   justify-between">

                <div>
                    <h2 className='text-xl font-bold'>{brand_name}</h2>
                    <p className='py-3 text-lg'>{description}</p>
                    
                    <div className="lg:hidden py-3  text-green-600 ">
                    
                    {
                        isSaleOn &&

                        //  <button className='border border-green-300 bg-green-200 text-green-600 font-bold rounded-[32px] px-3 py-1'>  'sale is on'   </button>
                        <Wave  text="sale is on"  />
                    }
                    </div>
                    <Link  className='btn mt-3'>View Coupons</Link>

                    
                
                </div>

                <div className=" hidden py-4 pr-8 text-xl lg:block text-green-600 ">
                    
                    {
                        isSaleOn &&

                        //  <button className='border border-green-300 bg-green-200 text-green-600 font-bold rounded-[32px] px-3 py-1'>  'sale is on'   </button>
                        <Wave  text="Sale is on"  />
                    }
                </div>


            </div>
            {/* <div className="hidden lg:block right">
                <button className='btn'>View Details</button>
            </div> */}

        </div>
    );
};

export default Card;